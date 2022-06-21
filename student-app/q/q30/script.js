(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false, false];

    let Ti = Math.pow(100, cp.Random.float());
    let Tf = Math.pow(20, cp.Random.float());
    if (cp.Random.boolean()) {
      const temp = Ti;
      Ti = Tf;
      Tf = temp;
    }
    const mass = Math.pow(1000, cp.Random.float());
    const q = 4.184 * mass * (Tf - Ti);
    const choiceIdx = cp.Random.int(0, 3);
    fields[choiceIdx] = true;
    let vals = [mass, q, Ti, Tf];
    const answerPayload = [
      {
        answer: vals[choiceIdx],
        type: "number",
        tolerance: 0.05,
      },
    ];
    vals = vals.map((v) => v.toFixed(2));
    cp.library.configureTableFields(fieldEls, fields, vals);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
