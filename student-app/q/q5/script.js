(function (cp) {
  cp.generateNewQuestion = () => {
    const metric = [
      { units: "ml", factor: 946.353 },
      { units: "liters", factor: 0.946353 },
    ];
    const english = [
      { units: "ozs", factor: 32 },
      { units: "qt", factor: 1 },
      { units: "gal", factor: 0.25 },
    ];
    const value = cp.Random.float() / 10;
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
