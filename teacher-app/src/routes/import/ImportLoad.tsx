import { useNavigate } from "react-router-dom";
import { Button, Col, Input, Row } from "reactstrap";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../types/AppStateType";
import { importFileAction } from "../../store/actions";

function ImportLoad() {
  const [skipFirstLine, setSkipFirstLine] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const csv = useSelector((state: AppStateType) => state.csv) as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeSkipFirstLine = (e: ChangeEvent<HTMLInputElement>) => {
    setSkipFirstLine(!skipFirstLine);
  };

  const nextClick = () => {
    navigate("/import/2");
  };

  useEffect(() => {
    setDisableNext(csv?.length === 0);
  }, [csv]);

  const showFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const csv = reader.result as string;
      dispatch(importFileAction({ csv, skipFirstLine }));
    };
    const target = e.target as HTMLInputElement;
    let files = target.files;
    if (files) {
      reader.readAsText(files[0]);
    }
  };

  return (
    <>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Input type="file" onChange={showFile} />
        </Col>
        <Col md={2}>
          <Button
            color="primary"
            disabled={disableNext}
            className="right-justify"
            onClick={nextClick}
          >
            {"Next ->"}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="spacer">
          <Input
            type="checkbox"
            checked={skipFirstLine}
            onChange={changeSkipFirstLine}
          />
          {" Skip first line"}
        </Col>
        <Col md={9} className="spacer">
          <h6>
            Required fields (in any order): Last name, First name, Student ID,
            Period, Password, Class
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="spacer">
          <Input
            type="textarea"
            className="csv-contents"
            value={csv}
            readOnly
          />
        </Col>
      </Row>
    </>
  );
}

export default ImportLoad;
