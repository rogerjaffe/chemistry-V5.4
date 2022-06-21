(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [true, true, true];
    const choice = cp.Random.int(0, 2);
    fields[choice] = false;
    const exponent = Math.pow(8, cp.Random.float());
    const sign = cp.Random.boolean() ? "-1" : "1";
    const mantissa = Math.random();
    const wavelength = mantissa * Math.pow(10, sign * exponent);
    const waveText = Number.parseFloat(wavelength).toExponential(2);
    const freq = 3e10 / wavelength;
    const freqText = Number.parseFloat(freq).toExponential(2);
    const E = 6.626e-34 * freq;
    const EText = Number.parseFloat(E).toExponential(2);
    let vals = [waveText, freqText, EText];
    cp.library.configureTableFields(fieldEls, fields, vals);

    const answerPayload = [];
    for (let i = 0; i < fields.length; i++) {
      if (fields[i]) {
        answerPayload.push({
          answer: vals[i],
          type: "number",
          tolerance: 0.05,
        });
      }
    }
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
