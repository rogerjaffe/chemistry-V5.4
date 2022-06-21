import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useState, useEffect } from "react";
import { useAuthenticateMutation } from "../api";
import onChange from "../utils/onChange";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableLoginButton, setDisableLoginButton] = useState(false);

  const [authenticateTrigger, { data: authResponse, isLoading }] =
    useAuthenticateMutation();

  useEffect(() => {
    setDisableLoginButton(email.length === 0 || password.length === 0);
  }, [email, password]);

  const loginClick = () => {
    authenticateTrigger({ email, password });
  };

  const errorMessages: { [prop: string]: JSX.Element } = {
    AuthenticationFailedError: (
      <h6 className="error">Email and/or password do not match</h6>
    ),
    TeacherNotFoundError: (
      <h6 className="error">Email and/or password do not match</h6>
    ),
    AccountExpiredError: (
      <h6 className="error">
        Your account has expired. Please contact info@chemistry-practice.com
      </h6>
    ),
    EmailNotConfirmedError: (
      <h6 className="error">
        Your email has not been confirmed.
        <br />
        <Link to="/send-confirmation-email">
          Click here for more information
        </Link>
        .
      </h6>
    ),
  };

  return (
    <>
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <Form>
            <h5 className="title">Login</h5>
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
            <Button
              block
              onClick={loginClick}
              disabled={disableLoginButton}
              color={isLoading ? "secondary" : "primary"}
            >
              {isLoading ? "Please wait..." : "Login"}
            </Button>
          </Form>
        </Col>
      </Row>

      {authResponse && authResponse?.error ? (
        <Row>
          <Col className="header">{errorMessages[authResponse.type ?? ""]}</Col>
        </Row>
      ) : null}

      <Row className="login-account-links">
        <Col className="login-account-links-left" md={{ size: 4, offset: 4 }}>
          <Row>
            <Col md={6}>
              <Link to="/signup">Sign up!</Link>
            </Col>
            <Col className="login-account-links-right" md={6}>
              <Link to="/forgot">Forgot password?</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
