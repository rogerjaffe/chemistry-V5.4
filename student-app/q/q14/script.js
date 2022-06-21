(function (cp) {
  cp.generateNewQuestion = () => {
    const lvol = cp.Random.float(1, 3);
    const mlvol = lvol * 1000;
    const compound = cp.compoundUtils.getRandomCompoundBySeq(14);
    const gfw = cp.compoundUtils.getCompoundMass(compound.formula);
    const formula = cp.compoundUtils.getHtml(compound.formula);
    const molarity = cp.Random.float(0.05, 1);
    const moles = molarity * lvol;
    const gmass = moles * gfw;
    const mgmass = gmass * 1000;

    const mass = cp.Random.boolean()
      ? {
          value: gmass.toFixed(2),
          units: "gram",
        }
      : {
          value: mgmass.toFixed(2),
          units: "mg",
        };
    const volume = cp.Random.boolean()
      ? {
          value: lvol.toFixed(2),
          units: "liters",
        }
      : {
          value: mlvol.toFixed(2),
          units: "mL",
        };

    const choice = cp.Random.int(0, 2);
    const htmls = [
      `What volume in <span class="parameter">${
        volume.units
      }</span> of <span class="parameter">${molarity.toFixed(
        2
      )}M </span> <span class="parameter">${formula}</span> would be required if you wanted <span class="parameter">${
        mass.value
      }</span> <span class="parameter">${mass.units}</span> of solute?`,
      `How many grams of <span class="parameter">${formula}</span> are in <span class="parameter">${
        volume.value
      }</span> <span class="parameter">${
        volume.units
      }</span> of a <span class="parameter">${molarity.toFixed(
        2
      )}M</span> solution?`,
      `What is the molarity of a solution which contains <span class="parameter">${mass.value}</span> <span class="parameter">${mass.units}</span> of <span class="parameter">${formula}</span> in a total volume of <span class="parameter">${volume.value}</span> <span class="parameter">${volume.units}</span>?`,
    ];
    const answers = [
      {
        answer: volume.value + "",
        tolerance: 0.05,
        type: "number",
      },
      {
        answer: gmass.toFixed(2) + "",
        tolerance: 0.05,
        type: "number",
      },
      {
        answer: molarity.toFixed(2) + "",
        tolerance: 0.05,
        type: "number",
      },
    ];
    $("#question").html(htmls[choice]);
    window.cp.setAnswerPayload([answers[choice]]);

    // const response = {
    //   questionPayload: {
    //     html: htmls[choice],
    //     template: "wordProblem",
    //     answerCount: 1,
    //     skeletonCount: 3,
    //     title: `<h6>
    //       This page presents random "word" problems in the area of molarity, mass, and volume.
    //     </h6>`,
    //   },
    //   answerPayload: [answers[choice]],
    // };
    // return response;

    // const moles = cp.Random.float(0.1, 1);
    // const volume = cp.Random.float(0.01, 10);
    // const molarity = moles / volume;
    //
    // const fieldEls = $('[name="fields"]');
    // fieldEls.empty();
    // const fields = [false, false, false];
    // const choice = cp.Random.int(0, 2);
    // fields[choice] = true;
    // let vals = [moles, volume, molarity];
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
