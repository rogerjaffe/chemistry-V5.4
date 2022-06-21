import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useState, useEffect } from "react";
import { useCreateAccountMutation } from "../../api";
import onChangeInput from "../../utils/onChange";

function Signup() {
  const [email, setEmail] = useState("alliedgardensproperties@gmail.com");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [lastName, setLastName] = useState("abc");
  const [firstName, setFirstName] = useState("def");
  const [school, setSchool] = useState("qwer");
  const [disableLoginButton, setDisableLoginButton] = useState(false);

  const [createAccountTrigger, { data, isLoading }] =
    useCreateAccountMutation();

  // const [
  //   validateCaptchaTrigger,
  //   { data: captchaData, isLoading: isLoadingCaptcha },
  // ] = useValidateCaptchaMutation();
  //
  useEffect(() => {
    const field = [
      email,
      password,
      confirmPassword,
      lastName,
      firstName,
      school,
    ];
    const allFilled = field.reduce(
      (acc, field) => acc && field.length > 0,
      true
    );
    const passwordsDontMatch = password !== confirmPassword;
    setPasswordsDontMatch(passwordsDontMatch);
    setDisableLoginButton(!allFilled || passwordsDontMatch);
  }, [email, password, confirmPassword, lastName, firstName, school]);

  const signupClick = () => {
    const host = window.location.host;
    const protocol = window.location.protocol;
    const params = {
      email,
      password,
      lastName,
      firstName,
      school,
      host,
      protocol,
    };
    createAccountTrigger(params);
  };

  const emailAlreadyExists = (
    <Row className="message">
      <Col>
        <h6>This email already has an account attached to it.</h6>
        <h6>Please use a different email to create your account.</h6>
      </Col>
    </Row>
  );

  const emailError = (
    <Row className="message">
      <Col>
        <h6>
          Your account was created but there was a problem sending a
          confirmation email. Please contact info@chemistry-practice.com for
          support.
        </h6>
        <h6>Message: {data?.error}</h6>
      </Col>
    </Row>
  );

  const accountWasCreatedHtml = (
    <Row className="message">
      <Col>
        <h6>Your account has been created!</h6>
        <h6>Check your email to confirm your account.</h6>
        <h6>
          <Link to="/login">Login here</Link>
        </h6>
      </Col>
    </Row>
  );

  const signupPage = (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <Form>
          <h4 className="title">Sign up!</h4>
          <h6 className="title">All fields are required</h6>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={onChangeInput(setEmail)}
              value={email}
            />
            <FormFeedback>
              Sorry, this email already has an account
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              invalid={passwordsDontMatch}
              onChange={onChangeInput(setPassword)}
              value={password}
            />
            <FormFeedback>Passwords don't match</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              invalid={passwordsDontMatch}
              onChange={onChangeInput(setConfirmPassword)}
              value={confirmPassword}
            />
            <FormFeedback>Passwords don't match</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              onChange={onChangeInput(setLastName)}
              value={lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              onChange={onChangeInput(setFirstName)}
              value={firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="school">School</Label>
            <Input
              type="text"
              id="school"
              name="school"
              onChange={onChangeInput(setSchool)}
              value={school}
            />
          </FormGroup>
          <Button
            block
            className="g-recaptcha"
            data-sitekey="reCAPTCHA_site_key"
            data-callback="onSubmit"
            data-action="submit"
            onClick={signupClick}
            disabled={disableLoginButton}
            color={isLoading ? "secondary" : "primary"}
          >
            {isLoading ? "Please wait..." : "Sign up"}
          </Button>
        </Form>
      </Col>
    </Row>
  );

  if (data?.error && data?.type === "TeacherExistsError") {
    return emailAlreadyExists;
  } else if (typeof data?.error === "string") {
    return emailError;
  } else if (data && !data?.error) {
    return accountWasCreatedHtml;
  } else {
    return signupPage;
  }
}

export default Signup;
