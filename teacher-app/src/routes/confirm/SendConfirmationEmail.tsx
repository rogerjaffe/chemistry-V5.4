import {
  BaseResponseType,
  useSendConfirmAccountEmailMutation,
} from "../../api";
import { Button, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import onChange from "../../utils/onChange";
import { Link } from "react-router-dom";

const SendConfirmationEmail = () => {
  const [email, setEmail] = useState("");
  const [sendConfirmEmailTrigger, { data, isLoading }] =
    useSendConfirmAccountEmailMutation();

  const sendConfirmationEmail = () => {
    const host = window.location.host;
    const protocol = window.location.protocol;
    sendConfirmEmailTrigger({ email, host, protocol });
  };

  const getMessage = (data: BaseResponseType | undefined) => {
    if (data?.error && data?.type === "UnableToSendConfirmationEmail") {
      return (
        <Label className="error message-header">
          Unable to send email. Try again in a few minutes
        </Label>
      );
    } else if (data?.error && data?.type === "TeacherNotFoundError") {
      return (
        <Label className="message-header">
          Please check your email for confirmation instructions.
        </Label>
      );
    } else if (data?.error === true) {
      return (
        <Label className="error message-header">
          Unable to send email. Try again in a few minutes
        </Label>
      );
    } else if (data?.error === false) {
      return (
        <div className="center-justify">
          <Label className="error message-header">
            Check your email for instructions on how to complete the signup
            process
          </Label>
          <Link to="/login">Login</Link>
        </div>
      );
    } else {
      return (
        <Form>
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
            onClick={sendConfirmationEmail}
            color={isLoading ? "secondary" : "primary"}
          >
            {isLoading ? "Please wait..." : "Send confirmation email"}
          </Button>
        </Form>
      );
    }
  };

  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <h5 className="header-bold">Send email confirmation</h5>
      </Col>
      <Col md={{ size: 4, offset: 4 }}>{getMessage(data)}</Col>
    </Row>
  );
};

export default SendConfirmationEmail;
