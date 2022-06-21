import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

const R = require("ramda");

function DashboardCell(props: any) {
  const { log, seq, studentId, showDetailStudents } = props;
  if (log && log[seq]) {
    const thisLog = log[seq];
    return (
      <td className="center-justify">
        {thisLog.correct} / {thisLog.total}
        {R.includes(studentId, showDetailStudents) ? (
          <div>
            {thisLog.logItems.map((logItem: any) => {
              return (
                <div
                  className={
                    "dashboard-log-item" +
                    (logItem.isCorrect ? " correct" : " incorrect")
                  }
                >
                  {format(fromUnixTime(logItem.timestamp), "MMM d, HH:mm")}
                </div>
              );
            })}
          </div>
        ) : null}
      </td>
    );
  } else {
    return (
      <td className="center-justify" key={"td" + seq}>
        --
      </td>
    );
  }
}

export default DashboardCell;
