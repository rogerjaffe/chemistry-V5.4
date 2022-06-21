(function (cp) {
  cp.generateNewQuestion = () => {
    const factors = [
      { units: "g / l", factor: 1 },
      { units: "g / ml", factor: 0.001 },
      { units: "kg / l", factor: 0.001 },
      { units: "kg / ml", factor: 0.000001 },
      { units: "mg / l", factor: 1000 },
      { units: "mg / ml", factor: 1 },
    ];
    const value = Math.pow(100, cp.Random.float());
    let [factor1, factor2] = cp.library.chooseN(factors, 2);
    const answerPayload = [
      {
        answer: (value / factor1.factor) * factor2.factor + "",
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    document.getElementById("a1").innerHTML = cp.library.format(value, 3);
    document.getElementById("u1").innerHTML = factor1.units;
    document.getElementById("u2").innerHTML = factor2.units;
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
