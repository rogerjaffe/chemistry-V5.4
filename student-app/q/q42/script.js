(function (cp) {
  cp.generateNewQuestion = () => {
    const feMass = 6.3 * cp.Random.float() + 5.0;
    const crMass = 4.8 * cp.Random.float() + 6;
    const feChg = cp.Random.boolean() ? -1 : 1;
    const crChg = cp.Random.boolean() ? -1 : 1;
    const relRates = [1, 2, 3, 0.5, 0.3333];
    const relRateTexts = [
      'the <span class="parameter">same</span> as <span class="parameter">Cr</span>',
      '<span class="parameter">twice that</span> of <span class="parameter">Cr</span>',
      '<span class="parameter">three times</span> that of <span class="parameter">Cr</span>',
      '<span class="parameter">half that</span> of <span class="parameter">Cr</span>',
      '<span class="parameter">one-third that</span> of <span class="parameter">Cr</span>',
    ];
    const relRateIdx = cp.Random.int(0, relRates.length - 1);
    const relRateText = relRateTexts[relRateIdx];
    let n, feFinal, crFinal, feDelta, crDelta;
    do {
      n = cp.Random.float(0.2, 4);
      feDelta = feChg * n * relRates[relRateIdx];
      crDelta = crChg * n;
      feFinal = feMass + feDelta;
      crFinal = crMass + crDelta;
    } while (feFinal < 0 || crFinal < 0);

    const finalValueTexts = [
      "sum of the masses",
      "product of the masses",
      "mass of Fe minus the mass of Cr",
      "mass of Cr minus the mass of Fe",
    ];
    const finalValueIdx = cp.Random.int(0, finalValueTexts.length - 1);
    const finalValueText = finalValueTexts[finalValueIdx];
    const finalValues = [
      feFinal + crFinal,
      feFinal * crFinal,
      feFinal - crFinal,
      crFinal - feFinal,
    ];
    const finalValue = finalValues[finalValueIdx];

    const finaleTexts = [
      "were in the final mixture?",
      "were removed?",
      "were added?",
    ];
    const finaleIdx = cp.Random.int(0, finaleTexts.length - 1);
    const finaleText = finaleTexts[finaleIdx];
    const finaleElement = cp.Random.boolean() ? "Fe" : "Cr";
    const finaleValues = {
      Fe: [feFinal, -feDelta, feDelta],
      Cr: [crFinal, -crDelta, crDelta],
    };

    const question = `A mixture initially contains <span class="parameter">${feMass.toFixed(
      2
    )}</span> of <span class="parameter">Fe</span> and <span class="parameter">${crMass.toFixed(
      2
    )}</span> of <span class="parameter">Cr</span>.  <span class="parameter">Fe</span> is ${
      feChg < 0 ? " removed " : " added"
    } and <span class="parameter">Cr</span> ${
      crChg < 0 ? " removed" : " added"
    } with the rate of change for <span class="parameter">Fe</span> being ${relRateText}.  When the changes are stopped, the ${finalValueText} is <span class="parameter">${finalValue.toFixed(
      2
    )}</span>. How many grams of <span class="parameter">${finaleElement}</span> ${finaleText}`;

    $("#q").html(question);
    const answerPayload = [
      {
        answer: finaleValues[finaleElement][finaleIdx],
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
