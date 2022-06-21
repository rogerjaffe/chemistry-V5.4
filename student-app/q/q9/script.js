(function (cp) {
  cp.generateNewQuestion = () => {
    let atom = cp.periodicTable.getRandomElement();
    const an = atom.number;
    let mass = cp.Random.float(0, 90);
    let moles = mass / atom.atomic_mass;
    if (moles < 0.01) moles = moles.toFixed(5);
    else if (moles < 0.1) moles = moles.toFixed(4);
    else moles = moles.toFixed(3);
    mass = mass.toFixed(2);

    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false];
    const choice = cp.Random.int(0, 2);
    fields[choice] = true;
    let vals = [an, moles, mass];
    cp.library.configureTableFields(fieldEls, fields, vals);

    const answerPayload =
      choice === 0
        ? [
            {
              answer: vals[choice],
              type: "number",
            },
          ]
        : [
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
