import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import onChange from "../../utils/onChange";
import { useForgotPasswordMutation } from "../../api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const [forgotPasswordTrigger, { isLoading, data }] =
    useForgotPasswordMutation();
  console.log(data);

  useEffect(() => {
    setDisabledButton(email.length === 0);
  }, [email]);

  const forgotPasswordClick = () => {
    // This will send an email with this URL: http://localhost:3000/reset-password?code=<reset-code>
    const host = window.location.host;
    const protocol = window.location.protocol;
    forgotPasswordTrigger({ email, host, protocol });
  };

  return (
    <>
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <Form>
            <h4 className="title">Forgot password</h4>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={onChange(setEmail)}
                value={email}
              />
            </FormGroup>
            <Button
              block
              onClick={forgotPasswordClick}
              disabled={disabledButton}
              color={"primary"}
            >
              {isLoading ? "Please wait..." : "Reset password"}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="links">
          <Link to="/login">Back to login</Link>
        </Col>
      </Row>
      {data?.error && data?.type === "UnableToSendPasswordResetEmail" ? (
        <Row className="message">
          <Col>
            <h6>
              There was a problem connecting to the internet. Please try again
              later.
            </h6>
          </Col>
        </Row>
      ) : null}
      {data?.error && data?.type === "TeacherNotFoundError" ? (
        <Row className="message">
          <Col>
            <h6>
              If there is an account with this email, you will receive
              instructions on how to
              <br />
              reset your password. Please check your email.
            </h6>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default ForgotPassword;
