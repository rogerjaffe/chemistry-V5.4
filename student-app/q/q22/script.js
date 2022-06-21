(function (cp) {
  cp.generateNewQuestion = () => {
    let reaction = cp.equations.getRandomEquationWithFourReagents();

    const c1 = reaction.left[0].formula;
    const c2 = reaction.left[1].formula;
    const c1Mass = cp.Random.float(50, 1000);

    const c2C1MolarRatio =
      reaction.left[1].coefficient / reaction.left[0].coefficient;
    const molesC1 = c1Mass / cp.compoundUtils.getCompoundMass(c1);
    const requiredMolesC2 = molesC1 * c2C1MolarRatio;
    const adjustmentFactor =
      1 + (cp.Random.boolean() ? -1 : 1) * cp.Random.float(0.05, 0.3);
    const actualMolesC2 = requiredMolesC2 * adjustmentFactor;
    const c2Mass = actualMolesC2 * cp.compoundUtils.getCompoundMass(c2);
    const answer =
      actualMolesC2 > requiredMolesC2
        ? reaction.left[0].formula.toLowerCase()
        : reaction.left[1].formula.toLowerCase();
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

    const header = `<h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>`;
    const question = `If <span class="parameter">${c1Mass.toFixed(
      2
    )} grams</span> of <span class="parameter">${cp.compoundUtils.getHtml(
      c1
    )}</span> are reacted with <span class="parameter">${c2Mass.toFixed(
      2
    )} grams</span> of <span class="parameter">${cp.compoundUtils.getHtml(
      c2
    )}</span>, what is the limiting reagent?`;

    const answerPayload = [
      {
        answer,
        type: "string",
      },
    ];

    $("#question").html(header + question);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
