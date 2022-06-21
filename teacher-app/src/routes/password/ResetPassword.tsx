import { useParams } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useState, useEffect } from "react";
import { useResetPasswordMutation } from "../../api";
import onChange from "../../utils/onChange";
import PasswordResetCodeNotFoundError from "./PasswordResetCodeNotFoundError";
import PasswordChanged from "./PasswordChanged";
import ResetCodeMissing from "./ResetCodeMissing";

function ResetPassword() {
  const { code } = useParams();
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const [disableButton, setDisableButton] = useState(false);
  const [resetPasswordTrigger, { isLoading, data }] =
    useResetPasswordMutation();

  useEffect(() => {
    setDisableButton(password.length === 0 || password !== confirmPassword);
  }, [password, confirmPassword]);

  const submitClick = () => {
    if (!code) {
      return null;
    }
    resetPasswordTrigger({ password, code });
  };

  if (code) {
    return (
      <>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <Form>
              <h4 className="title">Reset password</h4>
              <FormGroup>
                <Label for="code">Reset code</Label>
                <Input
                  type="text"
                  id="code"
                  name="code"
                  readOnly
                  value={code}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange(setPassword)}
                  value={password}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={onChange(setConfirmPassword)}
                  value={confirmPassword}
                />
              </FormGroup>
              <Button
                block
                onClick={submitClick}
                disabled={disableButton}
                color={isLoading ? "secondary" : "primary"}
              >
                {isLoading ? "Please wait..." : "Change password"}
              </Button>
            </Form>
          </Col>
        </Row>
        {data?.error && data?.type === "" ? <PasswordChanged /> : null}
        {data?.error && data?.type === "PasswordResetCodeNotFoundError" ? (
          <PasswordResetCodeNotFoundError />
        ) : null}
      </>
    );
  } else {
    return <ResetCodeMissing />;
  }
}

export default ResetPassword;
