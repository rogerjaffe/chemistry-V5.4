(function (cp) {
  const getSummaryFromSS = () => {
    const currentJSON = sessionStorage.getItem("summary");
    const current = JSON.parse(currentJSON ?? "[]");
    return current;
  };

  cp.updateLog = function (isCorrect) {
    const current = getSummaryFromSS();
    current.push({ seq: $("#seq").val(), text: $("#text").val(), isCorrect });
    sessionStorage.setItem("summary", JSON.stringify(current));
  };

  cp.displayLog = function () {
    const current = getSummaryFromSS();
    const summary = current.reduce((summary, row) => {
      const found = summary.find((it) => it.seq === row.seq);
      if (!found) {
        summary.push({
          seq: row.seq,
          text: row.text,
          correct: row.isCorrect ? 1 : 0,
          total: 1,
        });
      } else {
        found.correct += row.isCorrect ? 1 : 0;
        found.total++;
      }
      return summary;
    }, []);
    const _summary = summary.sort(
      (a, b) => parseInt(a.seq, 10) - parseInt(b.seq, 10)
    );
    const rows = _summary.map(
      (r) =>
        `<tr><td>${r.seq}</td><td class="summary-table-name">${
          r.text
        }</td><td>${r.correct}</td><td>${r.total - r.correct}</td><td>${
          r.correct > 0 ? ((r.correct / r.total) * 100).toFixed(2) : "0.0"
        }</td></tr>`
    );
    const el = $("#summary-table").html(rows.join(""));
  };
})((window.cp = window.cp || {}));
