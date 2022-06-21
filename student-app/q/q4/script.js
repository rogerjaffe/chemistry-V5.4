(function (cp) {
  cp.generateNewQuestion = () => {
    const metric = [
      { units: "g", factor: 453.592 },
      { units: "mg", factor: 453592 },
      { units: "kg", factor: 0.453592 },
    ];
    const english = [
      { units: "lbs", factor: 1 },
      { units: "ozs", factor: 16 },
    ];
    const value = Math.pow(10, cp.Random.float());
    const [metric1] = cp.library.chooseN(metric, 1);
    const [english1] = cp.library.chooseN(english, 1);
    let first, second;
    if (cp.Random.boolean()) {
      first = metric1;
      second = english1;
    } else {
      first = english1;
      second = metric1;
    }
    const answerPayload = [
      {
        answer: (value / first.factor) * second.factor + "",
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    document.getElementById("a1").innerHTML = cp.library.format(value, 3);
    document.getElementById("u1").innerHTML = first.units;
    document.getElementById("u2").innerHTML = second.units;
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
