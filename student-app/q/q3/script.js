(function (cp) {
  cp.generateNewQuestion = () => {
    const metric = [
      { units: "mm", factor: 1000 },
      { units: "cm", factor: 100 },
      { units: "m", factor: 1 },
      { units: "km", factor: 0.001 },
    ];
    const english = [
      { units: "inches", factor: 39.3701 },
      { units: "feet", factor: 3.28084 },
      { units: "yards", factor: 1.093613888889 },
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
