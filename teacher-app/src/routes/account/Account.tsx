import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { ChangeEvent, SetStateAction, useState, useEffect } from "react";
import { Dispatch } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import { useRefreshJwtMutation, useUpdateAccountMutation } from "../../api";
import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";
import differenceInDays from "date-fns/differenceInDays";

function Account() {
  const RENEWAL_NOTICE_DAYS = 30;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [_lastName, setLastName] = useState("");
  const [_firstName, setFirstName] = useState("");
  const [_school, setSchool] = useState("");
  const [dirty, setDirty] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [accountExpirationFormatted, setAccountExpirationFormatted] =
    useState("");
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);
  const {
    jwt,
    lastName,
    firstName,
    school,
    email,
    accountExpiration,
    accountDeletion,
  } = useSelector((state: StateType) => state.appState);

  const [updateAccountTrigger, { isLoading, data }] =
    useUpdateAccountMutation();
  const [refreshJwt] = useRefreshJwtMutation();

  useEffect(() => {
    setLastName(lastName);
    setFirstName(firstName);
    setSchool(school);
  }, [lastName, firstName, school]);

  useEffect(() => {
    const DATE_FORMAT = "MMM d, yyyy";
    if (accountExpiration) {
      setAccountExpirationFormatted(
        format(fromUnixTime(accountExpiration), DATE_FORMAT)
      );
    }
  }, [accountExpiration, accountDeletion]);

  useEffect(() => {
    setDoPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setIsValid(
      _lastName.length === 0 ||
        _firstName.length === 0 ||
        _school.length === 0 ||
        doPasswordsMatch
    );
  }, [_lastName, _firstName, _school, doPasswordsMatch]);

  const save = () => {
    if (!jwt) return;
    updateAccountTrigger({
      jwt,
      firstName: _firstName,
      lastName: _lastName,
      school: _school,
      password,
    }).then((res: any) => {
      if (!res?.data.error) {
        setDirty(false);
        refreshJwt({ jwt });
      }
    });
  };

  const cancel = () => {
    setLastName(lastName);
    setFirstName(firstName);
    setSchool(school);
    setDirty(false);
  };

  const onChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (evt: ChangeEvent<HTMLInputElement>) => {
      setter(evt.currentTarget.value);
      setDirty(true);
    };

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col>&nbsp;</Col>
          <Col>
            <h5 className="title edit-student-title">Edit Account Profile</h5>
          </Col>
          <Col className="right-justify">
            <Button
              className="right-spacer"
              disabled={!dirty || !isValid}
              onClick={save}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
            <Button disabled={!dirty} onClick={cancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <Form>
              <FormGroup>
                <Label>Email: {email}</Label>
                <h6>This account expires on {accountExpirationFormatted}</h6>
                {accountExpiration &&
                differenceInDays(fromUnixTime(accountExpiration), new Date()) <
                  RENEWAL_NOTICE_DAYS ? (
                  <h6>
                    Contact info@chemistry-practice.com to renew your account
                  </h6>
                ) : null}
                {data?.error && data?.type === "" ? (
                  <h6>Changes saved</h6>
                ) : (
                  <h6>&nbsp;</h6>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={onChange(setLastName)}
                  value={_lastName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={onChange(setFirstName)}
                  value={_firstName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="school">School</Label>
                <Input
                  type="text"
                  id="school"
                  name="school"
                  onChange={onChange(setSchool)}
                  value={_school}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  New password (fill in only to change)
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  invalid={!doPasswordsMatch}
                  onChange={onChange(setPassword)}
                  value={password}
                />
                <FormFeedback>Passwords don't match</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm new password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  invalid={!doPasswordsMatch}
                  onChange={onChange(setConfirmPassword)}
                  value={confirmPassword}
                />
                <FormFeedback>Passwords don't match</FormFeedback>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Account;
