(function (cp) {
  cp.generateNewQuestion = () => {
    const c1 = cp.Random.float(1, 6);
    const c2 = cp.Random.float(1, 6);
    const e1 = cp.Random.int(1, 20) * (cp.Random.boolean() ? 1 : -1);
    const e2 = cp.Random.int(1, 20) * (cp.Random.boolean() ? 1 : -1);
    const term1 = `${c1.toFixed(2)} &times; 10<sup>${e1}</sup>`;
    const term2 = `${c2.toFixed(2)} &times; 10<sup>${e2}</sup>`;
    const operator = cp.Random.boolean() ? "m" : "d";
    const operatorHTML =
      operator === "m"
        ? '<span class="operator">&times;</span>'
        : '<span class="operator">&divide;</span>';
    const expression = `${term1} ${operatorHTML} ${term2}`;
    let answer;
    if (operator === "m") {
      answer = e1 + e2;
      if (c1 * c2 >= 10) {
        answer++;
      }
    } else {
      answer = e1 - e2;
      if (c1 > c2) {
        answer--;
      }
    }
    const answerPayload = [
      {
        answer: answer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    $("#question").html(expression);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
