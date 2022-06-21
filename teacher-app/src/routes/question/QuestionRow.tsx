import { MouseEvent } from "react";
// import { useRefreshJwtMutation, useUpdateQuestionFilterMutation } from "../api";
// import { useDispatch, useSelector } from "react-redux";
// import { StateType } from "../types/AppStateType";

function QuestionRow(props: {
  seq: number;
  text: string;
  questionFilter: string[];
  summary: {
    correct: number;
    total: number;
    students: Set<string>;
  };
}) {
  const { seq, summary, text, questionFilter } = props;
  // const jwt = useSelector((state: StateType) => state.appState.jwt) ?? "";
  // const [updateQuestionFilterTrigger /*, { isLoading, data }*/] =
  //   useUpdateQuestionFilterMutation();
  // const [refreshJwt] = useRefreshJwtMutation();

  const pct =
    summary.total === 0
      ? 0
      : ((summary.correct / summary.total) * 100).toFixed(0);
  const isQuestionIncluded = questionFilter.includes(seq + "");

  const onClick = (evt: MouseEvent<HTMLTableRowElement>) => {
    // const seq = evt.currentTarget.getAttribute("data-seq");
    // if (seq === null) return;
    // let qf = R.clone(questionFilter);
    // if (qf.includes(seq)) {
    //   qf = R.without([seq], qf);
    // } else {
    //   qf.push(seq);
    // }
    // updateQuestionFilterTrigger({ jwt, newQuestionFilter: qf.join(",") });
  };

  return (
    <tr
      onClick={onClick}
      data-seq={seq}
      className={
        isQuestionIncluded ? "question-row question-included" : "question-row"
      }
    >
      <td className="center-justify">{seq}</td>
      <td>{text}</td>
      <td className="center-justify">{summary.correct}</td>
      <td className="center-justify">{summary.total}</td>
      <td className="center-justify">{pct}%</td>
      <td className="center-justify">{summary.students.size}</td>
    </tr>
  );
}

export default QuestionRow;
