import { useNavigate } from "react-router-dom";
import { Button, Col, Input, Row, Table } from "reactstrap";
import { ChangeEvent, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import Papa from "papaparse";
import { importFieldSet, importParseAction } from "../../store/actions";
import { StudentType } from "../../types/StudentType";
import { useRefreshJwtMutation, useUpdateStudentListMutation } from "../../api";
const clone = require("ramda/src/clone");

function ImportParse() {
  interface RequiredFieldsType {
    text: string;
    key: string;
  }

  const requiredFields: RequiredFieldsType[] = useMemo(() => {
    return [
      { text: "Choose a field", key: "" },
      { text: "Student ID", key: "studentId" },
      { text: "Last name", key: "lastName" },
      { text: "First name", key: "firstName" },
      { text: "Period", key: "period" },
      { text: "Password", key: "password" },
      { text: "Class", key: "className" },
    ];
  }, []);

  const [disableNext, setDisableNext] = useState(true);
  const [shouldMerge, setShouldMerge] = useState(true);
  const [shouldReplace, setShouldReplace] = useState(false);

  const csv = useSelector((state: StateType) => state.appState.csv) as string;
  const jwt = useSelector((state: StateType) => state.appState.jwt) as string;
  const parsed = useSelector(
    (state: StateType) => state.appState.parsed
  ) as string[][];
  const skipFirstLine = useSelector(
    (state: StateType) => state.appState.skipFirstLine
  ) as boolean;
  const fieldSet = useSelector((state: StateType) => state.appState.fieldSet);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateStudentTrigger, { isLoading, data }] =
    useUpdateStudentListMutation();
  const [refreshJwt] = useRefreshJwtMutation();

  useEffect(() => {
    if (csv === null || csv.length === 0) return;
    let parseResults = Papa.parse<string[]>(csv).data;
    if (parseResults[parseResults.length - 1].length === 1) {
      parseResults = parseResults.slice(0, parseResults.length - 1);
    }
    dispatch(
      importParseAction({ parsed: parseResults.slice(skipFirstLine ? 1 : 0) })
    );
  }, [csv, skipFirstLine, dispatch]);

  useEffect(() => {
    let _requiredFields: RequiredFieldsType[] = clone(requiredFields.slice(1));
    let requiredFieldsString: string = _requiredFields
      .map((item: RequiredFieldsType) => item.key)
      .sort((a: string, b: string) => (a < b ? -1 : 1))
      .join(",");

    let _fieldSet: string[] = clone(fieldSet);
    let fieldSetString: string = _fieldSet
      .sort((a: string, b: string) => (a < b ? -1 : 1))
      .join(",");
    setDisableNext(
      fieldSetString !== requiredFieldsString ||
        (!shouldReplace && !shouldMerge)
    );
  }, [fieldSet, requiredFields, shouldReplace, shouldMerge]);

  useEffect(() => {
    if (parsed === null) return;
    let arr = parsed[0].map(() => "");
    dispatch(importFieldSet({ fieldSet: arr }));
  }, [parsed, dispatch]);

  const saveClick = () => {
    const _newStudentList = parsed.map((rec) => {
      return rec.reduce((acc: any, item, idx) => {
        acc[fieldSet[idx]] = item;
        return acc;
      }, {});
    });
    const newStudentList = _newStudentList.reduce((arr, item) => {
      if (!arr.find((i: StudentType) => i.studentId === item.studentId)) {
        arr.push(item);
      }
      return arr;
    }, []);
    updateStudentTrigger({
      jwt,
      newStudentListJSON: JSON.stringify(newStudentList),
      shouldMerge,
      shouldReplace,
    }).then((response: any) => {
      if (!response.data.error) {
        navigate("/import/1");
      }
      refreshJwt({ jwt: jwt ?? "" });
    });
  };

  const prevClick = () => {
    navigate("/import/1");
  };

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    let target = e.currentTarget;
    let val = target.value;
    let idx = parseInt(target.getAttribute("data-idx") ?? "-1");
    let arr = clone(fieldSet);
    arr[idx] = val;
    dispatch(importFieldSet({ fieldSet: arr }));
  };

  const changeImportScheme = (mode: string) => () => {
    if (mode === "merge") {
      setShouldMerge(!shouldMerge);
      setShouldReplace(false);
    } else {
      setShouldReplace(!shouldReplace);
      setShouldMerge(false);
    }
  };

  const formatTable = () => {
    const valOrSpace = (parsed: string[][], row: number, col: number) => {
      if (row < parsed.length && col < parsed[row].length) {
        return <span>{parsed[row][col]}</span>;
      } else {
        return <span>&nbsp;</span>;
      }
    };
    if (!parsed) return null;
    let trs = [];
    for (let i = 0; i < parsed[0].length; i++) {
      trs.push(
        <tr key={"select" + i}>
          <td>
            <Input
              type="select"
              onChange={onChangeField}
              value={fieldSet[i]}
              data-idx={i}
            >
              {requiredFields.map((field) => (
                <option key={field.key} value={field.key}>
                  {field.text}
                </option>
              ))}
            </Input>
          </td>
          <td>{valOrSpace(parsed, 0, i)}</td>
          <td>{valOrSpace(parsed, 1, i)}</td>
          <td>{valOrSpace(parsed, 2, i)}</td>
        </tr>
      );
    }
    return trs;
  };

  return (
    <>
      <Row>
        <Col md={2}>
          <Button color="primary" onClick={prevClick}>
            {"<- Prev"}
          </Button>
        </Col>
        <Col md={8}>
          {!data?.error ? (
            <h6>Import complete!</h6>
          ) : (
            <h6>Select the fields to import</h6>
          )}
        </Col>
        <Col md={2} className="right-justify">
          <Button
            color="primary"
            disabled={disableNext || isLoading}
            onClick={saveClick}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>
              <Input
                type="checkbox"
                checked={shouldMerge}
                onChange={changeImportScheme("merge")}
              />
              {" Merge student list"}
            </th>
            <th colSpan={2}>
              <Input
                type="checkbox"
                checked={shouldReplace}
                onChange={changeImportScheme("replace")}
              />
              {" Replace student list"}
            </th>
          </tr>
          <tr>
            <th>Field to import</th>
            <th>Record 1</th>
            <th>Record 2</th>
            <th>Record 3</th>
          </tr>
        </thead>
        <tbody>{formatTable()}</tbody>
      </Table>
    </>
  );
}

export default ImportParse;
