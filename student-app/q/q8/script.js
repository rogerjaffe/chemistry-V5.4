(function (cp) {
  cp.generateNewQuestion = () => {
    let mass = cp.Random.float(1, 10);
    let gfw = cp.Random.float(1, 10);
    let moles = mass / gfw;

    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false];
    const choice = cp.Random.int(0, 2);
    fields[choice] = true;
    let vals = [gfw, mass, moles];
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
