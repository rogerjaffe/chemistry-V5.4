(function (cp) {
  cp.generateNewQuestion = () => {
    const elements = [
      3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
      48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85,
      87, 88, 89, 90, 91, 92, 93, 94,
    ];
    const [an1, an2] = cp.library.chooseN(elements, 2);
    // const an1 = elements[e1Idx];
    // const an2 = elements[e2Idx];
    const {
      symbol: symbol1,
      atomic_mass: atomic_mass1,
      density: density1,
    } = cp.periodicTable.findByNumber(an1);
    const {
      symbol: symbol2,
      atomic_mass: atomic_mass2,
      density: density2,
    } = cp.periodicTable.findByNumber(an2);

    const mass1 = 1000 * Math.random();
    const moles1 = mass1 / atomic_mass1;
    const vol1 = mass1 / density1;
    const mass2 = (mass1 * density2) / density1;
    const moles2 = mass1 / atomic_mass2;
    const moles2a = mass2 / atomic_mass2;
    // const moles2b = (vol1 * density2) / mass2;
    const vol2 = (vol1 * density1) / density2;
    console.log(
      symbol1,
      atomic_mass1,
      density1,
      symbol2,
      atomic_mass2,
      density2
    );
    console.log(mass1, moles1, vol1, mass2, moles2, moles2a, vol2);

    const displayValues = [
      [moles1.toFixed(2), symbol1],
      [vol1.toFixed(2), symbol1],
      [symbol1, moles2.toFixed(2), symbol2],
      [symbol1, moles2a.toFixed(2), symbol2],
      [symbol1, moles2.toFixed(2), symbol2],
      [symbol1, mass2.toFixed(2), symbol2],
    ];
    const qIdx = cp.Random.int(0, displayValues.length - 1);
    const questions = [
      `What is the volume in <span class="parameter">cm<sup>3</sup></span> of <span class="parameter">${displayValues[qIdx][0]}</span> moles of <span class="parameter">${displayValues[qIdx][1]}</span>?`,
      `How many moles is <span class="parameter">${displayValues[qIdx][0]}</span> <span class="parameter">cm<sup>3</sup></span> of <span class="parameter">${displayValues[qIdx][1]}</span>`,
      `What volume in <span class="parameter">cm<sup>3</sup></span> of <span class="parameter">${displayValues[qIdx][0]}</span> has the same mass as <span class="parameter">${displayValues[qIdx][1]}</span> moles of <span class="parameter">${displayValues[qIdx][2]}</span>`,
      `What mass of <span class="parameter">${displayValues[qIdx][0]}</span> has the same volume as <span class="parameter">${displayValues[qIdx][1]}</span> moles of <span class="parameter">${displayValues[qIdx][2]}</span>`,
      `How many moles of <span class="parameter">${displayValues[qIdx][0]}</span> has the same mass as <span class="parameter">${displayValues[qIdx][1]}</span> moles of <span class="parameter">${displayValues[qIdx][2]}</span>`,
      `How many moles of <span class="parameter">${displayValues[qIdx][0]}</span> has the same volume as <span class="parameter">${displayValues[qIdx][1]}</span> moles of <span class="parameter">${displayValues[qIdx][2]}</span>`,
    ];
    const answers = [vol1, moles1, vol2, mass2, moles2, moles2];
    const answerPayload = [
      {
        answer: answers[qIdx],
        type: "number",
        tolerance: 0.05,
      },
    ];
    $("#question").html(questions[qIdx]);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
