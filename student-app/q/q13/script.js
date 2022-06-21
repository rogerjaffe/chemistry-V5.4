(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false];
    const choice = cp.Random.int(0, 2);
    fields[choice] = true;
    const moles = cp.Random.float(0.1, 1);
    const volume = cp.Random.float(0.01, 10);
    const molarity = moles / volume;
    let vals = [moles, volume, moles / volume];
    vals = vals.map((v) => v.toFixed(2));
    cp.library.configureTableFields(fieldEls, fields, vals);

    const answerPayload = [
      {
        answer: vals[choice],
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
