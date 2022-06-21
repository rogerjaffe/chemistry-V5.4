(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false, false, false];

    let Ti1 = Math.pow(100, cp.Random.float());
    let Ti2 = Math.pow(20, cp.Random.float());
    if (cp.Random.boolean()) {
      const temp = Ti1;
      Ti1 = Ti2;
      Ti2 = temp;
    }
    const mass1 = Math.pow(1000, cp.Random.float());
    const mass2 = Math.pow(1000, cp.Random.float());
    const Tf = (mass1 * Ti1 + mass2 * Ti2) / (mass1 + mass2);

    const choiceIdx = cp.Random.int(0, 4);
    fields[choiceIdx] = true;
    let vals = [mass1, Ti1, mass2, Ti2, Tf];
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
