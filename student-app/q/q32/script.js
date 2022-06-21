(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false, false, false, false];

    let Ti1 = cp.Random.float(30, 70);
    let diff = cp.Random.float(10, 30);
    let Ti2 = Ti1 - diff;
    if (cp.Random.boolean()) {
      const temp = Ti1;
      Ti1 = Ti2;
      Ti2 = temp;
    }
    const sh = cp.Random.float(0.1, 1);
    const mass1 = cp.Random.float(0.01, 10);
    const mass2 = cp.Random.float(0.01, 10);
    const Tf =
      (4.184 * mass1 * Ti1 + mass2 * Ti2 * sh) / (mass1 * 4.184 + mass2 * sh);

    const choiceIdx = cp.Random.int(0, 5);
    fields[choiceIdx] = true;
    let vals = [mass1, Ti1, mass2, Ti2, sh, Tf];
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
