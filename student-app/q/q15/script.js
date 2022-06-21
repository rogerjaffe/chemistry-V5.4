(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [false, false, false, false, false];
    const choice = cp.Random.int(1, fields.length - 2);
    fields[choice] = true;

    const solute = cp.compoundUtils.getRandomCompoundBySeq(15);
    const gfw = cp.compoundUtils.getCompoundMass(solute.formula);
    let b = cp.Random.float(0, solute.gs);
    if (b > 10) {
      b = b.toFixed(1);
    } else if (b < 0.1) {
      b = b.toFixed(3);
    } else {
      b = b.toFixed(2);
    }
    const t = (cp.Random.float(0, 100) + 273).toFixed(0);
    const v = (cp.Random.float(0, 1000) + 100).toFixed(2);

    const moles = (b / gfw).toFixed(2);
    const M = (((1000 * moles) / v) * solute.parts).toFixed(2);
    const op = (100 * M * 0.082 * t).toFixed(2);

    let vals = [cp.compoundUtils.getHtml(solute.formula), b, t, op, t];
    const answerPayload = [
      {
        answer: vals[choice] + "",
        tolerance: 0.05,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    cp.library.configureTableFields(fieldEls, fields, vals);

    // return {
    //   questionPayload: {
    //     headers: [
    //       "Solute",
    //       "Solute (grams)",
    //       "Volume (mL)",
    //       "Osmotic P (atm)",
    //       "T (in K)",
    //     ],
    //     template: "table",
    //     answerCount: 1,
    //     skeletonCount: 4,
    //     values,
    //     title: `
    //     <h6 class="text-left">This page is an exercise in osmotic pressure relationships. A solute formula will appear in the first cell and two of the other cells will show values. Determine the value of the missing cell.</h6>
    //     <h6 class="bold text-left">Hints</h6>
    //     <h6 class="text-left">&bull; Be careful about dissociating solutes</h6>
    //     <h6 class="text-left">&bull; All solutions are treated as ideal</h6>
    //     <h6 class="text-left">&bull; It is assumed there are not additional processes beyond the possible solute dissociation</h6>
    //     <h6 class="text-left">&bull; You should continue to work on a problem until you get it correct, but you can get a new problem at any time.</>
    //   `,
    //   },
    //   answerPayload,
    // };
    //
    // const moles = cp.Random.float(0.1, 1);
    // const volume = cp.Random.float(0.01, 10);
    // const molarity = moles / volume;
    // let vals = [moles, volume, moles / volume];
    // vals = vals.map((v) => v.toFixed(2));
    // cp.library.configureTableFields(fieldEls, fields, vals);
    //
    // const answerPayload = [
    //   {
    //     answer: vals[choice],
    //     type: "number",
    //     tolerance: 0.05,
    //   },
    // ];
    // window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
