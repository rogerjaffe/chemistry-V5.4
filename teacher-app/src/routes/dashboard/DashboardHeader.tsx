import { Link, useParams } from "react-router-dom";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import createOptionsWithProp from "../../utils/createOptionsWithProp";
import createOptions from "../../utils/createOption";
import { setFilter } from "../../store/actions";

const CAPACITY = 8;

function DashboardHeader() {
  const params = useParams();
  const min = parseInt(params.min ?? "1");
  const dispatch = useDispatch();

  const {
    studentList: $studentList,
    questionMetadata,
    nameFilter,
    periodFilter,
    classFilter,
  } = useSelector((state: StateType) => state.appState);

  // ************************************************************************
  // Memoize the list of periods and classes for the filter drop-downs to
  // prevent rendering when not needed
  const { periodListOptions, classListOptions } = useMemo(() => {
    const periodList: string[] = createOptionsWithProp("period")($studentList);
    const periodListOptions = createOptions(periodList, "All periods");

    const classList: string[] =
      createOptionsWithProp("className")($studentList);
    const classListOptions = createOptions(classList, "All classes");
    return { periodListOptions, classListOptions };
  }, [$studentList]);

  // Generate the page numbers for navigation
  const nextPage = Math.max(
    1,
    Math.min(min + CAPACITY, questionMetadata.length - CAPACITY + 1)
  );
  const prevPage = Math.max(1, min - CAPACITY);

  const onFilterChange = (type: string) => (evt: any) => {
    dispatch(setFilter({ type, value: evt.currentTarget.value }));
  };

  // Render the complete page
  return (
    <Row>
      <Col md={2}>
        {min !== 1 ? (
          <Link to={"/dashboard/" + prevPage}>&lt;- Prev </Link>
        ) : null}
      </Col>
      <Col md={3}>
        <Form inline>
          <FormGroup>
            <Label for="name-filter" hidden>
              Name filter:
            </Label>
            <Input
              name="name-filter"
              id="name-filter"
              type="text"
              onChange={onFilterChange("nameFilter")}
              value={nameFilter}
              placeholder="Name filter"
            />
          </FormGroup>
        </Form>
      </Col>
      <Col md={2}>
        <Form inline>
          <FormGroup>
            <Label for="period-filter" hidden>
              Period:
            </Label>
            <Input
              name="period-filter"
              id="period-filter"
              type="select"
              onChange={onFilterChange("periodFilter")}
              value={periodFilter}
            >
              {periodListOptions}
            </Input>
          </FormGroup>
        </Form>
      </Col>
      <Col md={3}>
        <Form inline>
          <FormGroup>
            <Label for="class-filter" hidden>
              Period:
            </Label>
            <Input
              name="class-filter"
              id="class-filter"
              type="select"
              onChange={onFilterChange("classFilter")}
              value={classFilter}
            >
              {classListOptions}
            </Input>
          </FormGroup>
        </Form>
      </Col>
      <Col md={2} className="right-justify">
        {min + CAPACITY <= questionMetadata.length ? (
          <Link to={"/dashboard/" + nextPage}>Next -&gt;</Link>
        ) : null}
      </Col>
    </Row>
  );
}

export default DashboardHeader;
