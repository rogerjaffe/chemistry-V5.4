(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false];
    const choice = cp.Random.int(0, 2);
    fields[choice] = true;
    const one = cp.Random.float(1, 10);
    const two = cp.Random.float(1, 10);
    let vals = [one, two, one / two];
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
