(function (cp) {
  cp.generateNewQuestion = () => {
    let atom = cp.periodicTable.getRandomElement();
    let mass = cp.Random.float(1, 1000);
    let moles = mass / atom.atomic_mass;

    const units = {
      mass: [
        { units: "grams", factor: 1 },
        { units: "kg", factor: 0.001 },
        { units: "mg", factor: 1000 },
      ],
      moles: [
        { units: "moles", factor: 1 },
        { units: "mmoles", factor: 1000 },
      ],
    };
    let rn = cp.Random.int(0, 2);
    const massUnit = units.mass[rn].units;
    mass = mass * units.mass[rn].factor;
    rn = cp.Random.int(0, 1);
    const moleUnit = units.moles[rn].units;
    moles = moles * units.moles[rn].factor;

    let htmls = [
      `How many <span class="parameter">${moleUnit}</span> is <span class="parameter">${mass.toFixed(
        2
      )}</span> <span class="parameter">${massUnit}</span> of <span class="parameter">${
        atom.symbol
      }</span>?`,
      `What is the mass in <span class="parameter">${massUnit}</span> of <span class="parameter">${moles.toFixed(
        2
      )}</span> <span class="parameter">${moleUnit}</span> of <span class="parameter">${
        atom.symbol
      }</span>?`,
      `What is the element if <span class="parameter">${moles.toFixed(
        2
      )}</span> <span class="parameter">${moleUnit}</span> has a mass of <span class="parameter">${mass.toFixed(
        2
      )}</span> <span class="parameter">${massUnit}</span>?`,
    ];
    let answerPayload = [
      { answer: moles + "", tolerance: 0.05, type: "number" },
      { answer: mass + "", tolerance: 0.05, type: "number" },
      { answer: atom.symbol.toLowerCase(), type: "string" },
    ];

    const choice = cp.Random.int(0, htmls.length - 1);

    $("#question").html(htmls[choice]);
    window.cp.setAnswerPayload([answerPayload[choice]]);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
