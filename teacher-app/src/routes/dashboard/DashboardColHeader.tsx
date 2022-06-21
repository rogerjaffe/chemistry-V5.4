function DashboardColHeader(props: any) {
  const { question, seq } = props;
  return (
    <th title={question.text} className="col-md-1 center-justify with-tooltip">
      <span className="rotate">
        {question ? "Q" + seq + ": " + question.abbrevText : "Q" + seq}
      </span>
    </th>
  );
}

export default DashboardColHeader;
