(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [true, true, true];
    const choice = cp.Random.int(0, 2);
    fields[choice] = false;
    const k = cp.Random.float(0, 450);
    const c = k - 273.15;
    const f = 1.8 * c + 32;
    let vals = [k, c, f];
    vals = vals.map((v) => v.toFixed(2));
    cp.library.configureTableFields(fieldEls, fields, vals);

    const answerPayload = [];
    fields.forEach((f, idx) => {
      if (f) {
        answerPayload.push({
          answer: vals[idx],
          type: "number",
          tolerance: 0.05,
        });
      }
    });
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
