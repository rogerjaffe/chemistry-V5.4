import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";
import { useConfirmAccountMutation } from "../../api";
import ConfirmAccountLoading from "./ConfirmAccountLoading";
import EmailConfirmed from "./EmailConfirmed";
import ConfirmEmailUnknownError from "./ConfirmEmailUnknownError";
import SendConfirmationEmail from "./SendConfirmationEmail";

function ConfirmAccount() {
  const { code } = useParams();

  const [
    confirmAccountTrigger,
    { isLoading: confirmAccountIsLoading, data: confirmAccountData },
  ] = useConfirmAccountMutation();

  useEffect(() => {
    if (!code) return;
    confirmAccountTrigger({ confirmationCode: code });
  }, [code, confirmAccountTrigger]);

  if (!code) {
    return (
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <h6 className="title">The confirmation code is missing</h6>
          <h6 className="title">
            Please copy / paste the entire confirmation URL from the
            confirmation email you received or send another confirmation email.
          </h6>
          <SendConfirmationEmail />
        </Col>
      </Row>
    );
  } else if (confirmAccountIsLoading) {
    return <ConfirmAccountLoading />;
  } else if (
    confirmAccountData?.error &&
    confirmAccountData?.type === "ConfirmationExpired"
  ) {
    return (
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <h6 className="title center-justify">
            The confirmation code has expired or this account's email has
            already been confirmed. You can{" "}
            <Link to="/send-confirmation-email">
              send another confirmation email
            </Link>
          </h6>
        </Col>
      </Row>
    );
  } else if (!confirmAccountData?.error) {
    return <EmailConfirmed />;
  } else {
    return <ConfirmEmailUnknownError />;
  }
}

export default ConfirmAccount;
