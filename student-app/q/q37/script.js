(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    // true if input element is an input box
    const inputs = [false, true, true, true, true, true];
    inputs[cp.Random.int(1, 5)] = false;
    const compound = cp.getRandomSaltSolution();
    let s;
    const f1 = compound.cation + compound.anion;
    if (f1 === 2) {
      s = Math.sqrt(compound.K);
    } else if (f1 === 3) {
      s = Math.pow(compound.K / 4, 0.33333);
    } else {
      s = Math.pow(compound.K / 27, 0.25);
    }
    const cat = compound.cation * s;
    const ani = compound.anion * s;
    const gs = 0.1 * s * compound.gfw;

    const getNumber = (n) => {
      for (var i = 1; i < 50; i++) {
        n = n * 10;
        if (n > 100) {
          n = Math.round(n) / 100 + "e-" + (i - 2);
          break;
        }
      }
      return n;
    };

    const x = getNumber(compound.K);
    const b = getNumber(s);
    const c = getNumber(gs);
    const d = getNumber(cat);
    const f = getNumber(ani);
    const values = [compound.formula, x, b, c, d, f];

    const answerPayload = [];
    for (let i = 0; i < values.length; i++) {
      if (inputs[i]) {
        answerPayload.push({
          answer: values[i],
          tolerance: 0.05,
          type: "number",
        });
      }
    }

    // Inject into HTML
    cp.library.configureTableFields(fieldEls, inputs, values);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
