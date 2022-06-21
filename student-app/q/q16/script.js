(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fieldSet = [
      [false, true, false, false, true],
      [false, true, false, true, false],
      [false, false, true, true, false],
      [false, false, true, false, true],
      [false, false, false, true, true],
    ];
    const choice = cp.Random.int(0, fieldSet.length - 1);
    const fields = fieldSet[choice];
    const solute = cp.compoundUtils.getRandomCompoundBySeq(16);
    const formula = cp.compoundUtils.getHtml(solute.formula);
    const gfw = cp.compoundUtils.getCompoundMass(solute.formula);
    let b = cp.Random.float(0, solute.gs);
    if (b > 10) {
      b = b.toFixed(1);
    } else if (b < 0.1) {
      b = b.toFixed(3);
    } else {
      b = b.toFixed(2);
    }
    const m = cp.Random.int(100, 1099);
    const moles = b / gfw;
    const u = ((moles * 1000) / m) * solute.parts;
    const fp = (-1.86 * u).toFixed(2);
    const bp = (100 + 0.512 * u).toFixed(2);

    const vals = [formula, b, m, fp, bp];
    const answers = [
      [
        { answer: b + "", tolerance: 0.05, type: "number" },
        {
          answer: bp + "",
          tolerance: 0.05,
          type: "number",
        },
      ],
      [
        { answer: b + "", tolerance: 0.05, type: "number" },
        {
          answer: fp + "",
          tolerance: 0.05,
          type: "number",
        },
      ],
      [
        { answer: m + "", tolerance: 0.05, type: "number" },
        {
          answer: fp + "",
          tolerance: 0.05,
          type: "number",
        },
      ],
      [
        { answer: m + "", tolerance: 0.05, type: "number" },
        {
          answer: bp + "",
          tolerance: 0.05,
          type: "number",
        },
      ],
      [
        {
          answer: fp + "",
          tolerance: 0.05,
          type: "number",
        },
        {
          answer: bp + "",
          tolerance: 0.05,
          type: "number",
        },
      ],
    ];
    window.cp.setAnswerPayload(answers[choice]);
    cp.library.configureTableFields(fieldEls, fields, vals);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
