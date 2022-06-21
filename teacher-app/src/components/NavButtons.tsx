import { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../store/actions";
import { useRefreshJwtMutation } from "../api";
import { StateType } from "../types/AppStateType";

function NavButtons({ children }: { children: JSX.Element }) {
  const modes = [
    { route: "dashboard", text: "Dashboard" },
    { route: "students", text: "Students" },
    { route: "questions", text: "Questions" },
    { route: "import/1", text: "Import" },
    { route: "account", text: "Account" },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const jwt = useSelector((state: StateType) => state.appState.jwt);
  const [refreshJwt] = useRefreshJwtMutation();
  const route = location.pathname.slice(1);

  const onClickMode = (evt: MouseEvent<HTMLButtonElement>) => {
    const route = evt.currentTarget.getAttribute("data-route");
    navigate("/" + route);
  };

  const reloadData = () => {
    refreshJwt({ jwt: jwt ?? "" }).then(() => {
      dispatch(refresh());
    });
  };

  return (
    <>
      <Row>
        <Col className="toolbar">
          {modes.map((_mode) => (
            <Button
              className="toolbar-button"
              data-route={_mode.route}
              key={_mode.route}
              onClick={onClickMode}
              color={route === _mode.route ? "primary" : "secondary"}
            >
              {_mode.text}
            </Button>
          ))}
          <Button
            className="toolbar-button"
            key="refresh"
            onClick={reloadData}
            color="secondary"
          >
            Refresh
          </Button>
        </Col>
      </Row>
      {children}
    </>
  );
}

export default NavButtons;
