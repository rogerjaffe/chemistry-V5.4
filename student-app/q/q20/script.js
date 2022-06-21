(function (cp) {
  cp.generateNewQuestion = () => {
    let reaction = cp.equations.getRandomEquationWithFourReagents();
    const massBase = cp.Random.float(1, 100);
    const masst =
      cp.compoundUtils.getCompoundMass(reaction.left[0].formula) *
      reaction.left[0].coefficient;
    reaction.left = reaction.left.map((rxn) => {
      rxn.ratio =
        (cp.compoundUtils.getCompoundMass(rxn.formula) * rxn.coefficient) /
        masst;
      rxn.mass = massBase * rxn.ratio;
      return rxn;
    });
    reaction.right = reaction.right.map((rxn) => {
      rxn.ratio =
        (cp.compoundUtils.getCompoundMass(rxn.formula) * rxn.coefficient) /
        masst;
      rxn.mass = massBase * rxn.ratio;
      return rxn;
    });
    const eqn = `${cp.compoundUtils.getHtmlWithCoefficient(
      reaction.left[0].coefficient,
      reaction.left[0].formula
    )} + ${cp.compoundUtils.getHtmlWithCoefficient(
      reaction.left[1].coefficient,
      reaction.left[1].formula
    )} => ${cp.compoundUtils.getHtmlWithCoefficient(
      reaction.right[0].coefficient,
      reaction.right[0].formula
    )} + ${cp.compoundUtils.getHtmlWithCoefficient(
      reaction.right[1].coefficient,
      reaction.right[1].formula
    )}`;
    let p, r, mass, answer, rn, rn1, rn2;
    const questionNumber = cp.Random.int(0, 2);
    switch (questionNumber) {
      case 0:
        rn = cp.Random.int(0, 1);
        p = rn === 0 ? reaction.left[0].formula : reaction.left[1].formula;
        r = rn === 0 ? reaction.left[1].formula : reaction.left[0].formula;
        mass =
          massBase *
          (rn === 0 ? reaction.left[1].ratio : reaction.left[0].ratio);
        answer =
          massBase *
          (rn === 0 ? reaction.left[0].ratio : reaction.left[1].ratio);
        break;

      case 1:
        rn1 = cp.Random.int(0, 1);
        rn2 = cp.Random.int(0, 2);
        p = rn1 === 0 ? reaction.right[0].formula : reaction.right[1].formula;
        r = rn2 === 0 ? reaction.left[0].formula : reaction.left[1].formula;
        mass =
          massBase *
          (rn2 === 0 ? reaction.left[0].ratio : reaction.left[1].ratio);
        answer =
          massBase *
          (rn1 === 0 ? reaction.right[0].ratio : reaction.right[1].ratio);
        break;

      case 2:
        rn = cp.Random.int(0, 1);
        p = rn === 0 ? reaction.right[0].formula : reaction.right[1].formula;
        r = rn === 0 ? reaction.right[1].formula : reaction.right[0].formula;
        mass =
          massBase *
          (rn === 0 ? reaction.right[1].ratio : reaction.right[0].ratio);
        answer =
          massBase *
          (rn === 0 ? reaction.right[0].ratio : reaction.right[1].ratio);
        break;
    }

    const header = `<h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>`;
    const questions = [
      `How many grams of ${cp.compoundUtils.getHtml(
        p
      )} will react with <span class="parameter">${mass.toFixed(
        2
      )}</span> grams of ${cp.compoundUtils.getHtml(r)}?`,
      `How many grams of ${cp.compoundUtils.getHtml(
        p
      )} will be produced by the reaction of <span class="parameter">${mass.toFixed(
        2
      )}</span> grams of ${cp.compoundUtils.getHtml(r)}?`,
      `How many grams of ${cp.compoundUtils.getHtml(
        p
      )} will be produced, if <span class="parameter">${mass.toFixed(
        2
      )}</span> grams of ${cp.compoundUtils.getHtml(r)} are produced?`,
    ];
    const answerPayload = [
      {
        answer: answer + "",
        type: "number",
        tolerance: 0.05,
      },
    ];

    // return {
    // questionPayload: {
    //   html: header + questions[questionNumber],
    //   template: "wordProblem",
    //   answerCount: 1,
    //   skeletonCount: 5,
    //   title: `<h6>
    //     This page is an exercise in basic stoichiometry. A reaction with a question will appear.
    //   </h6>`,
    // },
    // answerPayload: [
    //   {
    //     answer: answer + "",
    //     type: "number",
    //     useTolerance: true,
    //     tolerance: 0.05,
    //   },
    // ],
    // };

    $("#question").html(header + questions[questionNumber]);
    window.cp.setAnswerPayload(answerPayload);

    // const equation = cp.equations.getRandomEquation();
    // const left = [],
    //   right = [],
    //   answers = [];
    // equation.left.forEach((d, idx) => {
    //   // input.input-small(type="number" name="input" idx="0" onkeyup="window.cp.onAnswerChange(this)")
    //   const i = `<input type="number" class="input-two-digit" name="input" idx="${idx}" onkeyup="window.cp.onAnswerChange(this)" />`;
    //   left.push(i);
    //   left.push(
    //     `<span class="parameter">${cp.compoundUtils.getHtml(d.formula)}</span>`
    //   );
    //   answers.push({ answer: d.coefficient + "", type: "number" });
    // });
    // equation.right.forEach((d, idx) => {
    //   const i = `<input type="number" class="input-two-digit" name="input" idx="${
    //     equation.left.length + idx
    //   }" onkeyup="window.cp.onAnswerChange(this)" />`;
    //   right.push(i);
    //   right.push(
    //     `<span class="parameter">${cp.compoundUtils.getHtml(d.formula)}</span>`
    //   );
    //   answers.push({ answer: d.coefficient + "", type: "number" });
    // });
    // const html = left.concat([" =&gt; "]).concat(right);

    // return {
    //   questionPayload: {
    //     values,
    //     headers: null,
    //     template: "table",
    //     skeletonCount: 3,
    //     title: `<h6>
    //     This page is an exercise in balancing chemical reactions. In front of each chemical species will be an input box.
    //     Put the proper coefficient in each cell. Use the smallest set of <parameterinteger</bold> coefficients.
    //   </h6>`,
    //   },
    //   answerPayload: answers,
    // };

    // const masst = cp.Random.float(1, 500);
    // const compound = cp.compoundUtils.getRandomCompoundBySeq(18);
    // const massc = cp.compoundUtils.getCompoundMass(compound.formula);
    // const molest = masst / massc;
    // const _elements = cp.compoundUtils.getMassRatios(compound.formula);
    // const elements = _elements.map((el) => {
    //   el.moles = molest * el.n;
    //   el.mass = el.moles * el.info.atomic_mass;
    //   return el;
    // });
    // const useThese = cp.library.chooseN(elements, 2);
    //
    // let n, p, answer;
    // const o = useThese[0].symbol;
    // const questionChoice = cp.Random.int(0, 11);
    // switch (questionChoice) {
    //   case 0:
    //     n = masst;
    //     answer = useThese[0].mass;
    //     break;
    //
    //   case 1:
    //     n = masst;
    //     answer = useThese[0].moles;
    //     break;
    //
    //   case 2:
    //     n = molest;
    //     answer = useThese[0].mass;
    //     break;
    //
    //   case 3:
    //     n = molest;
    //     answer = useThese[0].moles;
    //     break;
    //
    //   case 4:
    //     n = useThese[0].mass;
    //     answer = masst;
    //     break;
    //
    //   case 5:
    //     n = useThese[0].mass;
    //     answer = molest;
    //     break;
    //
    //   case 6:
    //     n = useThese[0].mass;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].mass;
    //     break;
    //
    //   case 7:
    //     n = useThese[0].mass;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].moles;
    //     break;
    //
    //   case 8:
    //     n = useThese[0].moles;
    //     answer = masst;
    //     break;
    //
    //   case 9:
    //     n = useThese[0].moles;
    //     answer = molest;
    //     break;
    //
    //   case 10:
    //     n = useThese[0].moles;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].mass;
    //     break;
    //
    //   case 11:
    //     n = useThese[0].moles;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].moles;
    //     break;
    // }
    //
    // const questions = [
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} has a mass of <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams.  How many grams of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} has a mass of <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams.  How many moles of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of compound.  How many grams of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of compound.  How many moles of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  What is the total mass of the sample?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many moles of compound are present?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many grams of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many moles of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  What is the total mass of the sample?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many moles of the compound are present?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many grams of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many moles of <span class="parameter">${p}</span> does it contain?</h6>`,
    // ];
    //
    // const answerPayload = [
    //   {
    //     answer,
    //     useTolerance: true,
    //     tolerance: 0.05,
    //     type: "number",
    //   },
    // ];
    //
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
