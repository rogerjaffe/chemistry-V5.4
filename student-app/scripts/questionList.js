(function (cp) {
  const questionMetadata = [
    { seq: "0", text: "Test Function", enabled: true },
    { seq: "1", text: "Significant Digits", enabled: true },
    { seq: "2", text: "Converting Densities", enabled: true },
    { seq: "3", text: "Converting Distances", enabled: true },
    { seq: "4", text: "Converting Mass", enabled: true },
    { seq: "5", text: "Converting Volume", enabled: true },
    { seq: "6", text: "Density", enabled: true },
    { seq: "7", text: "Density Word Problem", enabled: true },
    { seq: "8", text: "Mass, Moles, GFW", enabled: true },
    { seq: "9", text: "Elements, Moles, and Mass", enabled: true },
    { seq: "10", text: "Moles word problems", enabled: true },
    { seq: "11", text: "Protons, Electrons, and Neutrons", enabled: true },
    { seq: "12", text: "Quantum Numbers Word Problems", enabled: true },
    { seq: "13", text: "Molarity", enabled: true },
    {
      seq: "14",
      text: "Mass, Volume, and Molarity word problem",
      enabled: true,
    },
    { seq: "15", text: "Osomotic Pressure", enabled: true },
    {
      seq: "16",
      text: "Freezing and Boiling Points of Aqueous Solutions",
      enabled: true,
    },
    {
      seq: "17",
      text: "Chemical Formulas and Mass Calculations",
      enabled: true,
    },
    {
      seq: "18",
      text: "Mass and Mole Relationships in Chemical Formulas",
      enabled: true,
    },
    { seq: "19", text: "Balancing Reactions", enabled: true },
    { seq: "20", text: "Stoichiometry - Mass Relationships", enabled: true },
    { seq: "21", text: "Stoichiometry - Percent Yield", enabled: true },
    { seq: "22", text: "Limiting reagents", enabled: true },
    {
      seq: "23",
      text: "Combining limiting reagents and percentage yield",
      enabled: true,
    },
    { seq: "24", text: "Avogadro's Law", enabled: true },
    { seq: "25", text: "Boyle's Law", enabled: true },
    { seq: "26", text: "Charles's Law", enabled: true },
    { seq: "27", text: "Combined Gas Law", enabled: true },
    { seq: "28", text: "Ideal Gas Equation", enabled: true },
    { seq: "29", text: "Converting temperature", enabled: true },
    { seq: "30", text: "Temperature changes and heat", enabled: true },
    { seq: "31", text: "Heat Transfer - Water", enabled: true },
    {
      seq: "32",
      text: "Heat Transfer - Water and another substance",
      enabled: true,
    },
    {
      seq: "33",
      text: "pH, pOH, [H<sup>+</sup>] and [OH<sup>-</sup>]",
      enabled: true,
    },
    { seq: "34", text: "Solutions of Acids and Bases", enabled: true },
    {
      seq: "35",
      text: "Solutions of acids and bases word problems",
      enabled: true,
    },
    { seq: "36", text: "Titrations of Weak Acids", enabled: true },
    { seq: "37", text: "Solutions of Slightly Soluble Salts", enabled: true },
    {
      seq: "38",
      text: "Balancing Oxidation Reduction Reactions",
      enabled: true,
    },
    { seq: "39", text: "Calculating E<sub>o</sub>", enabled: true },
    { seq: "40", text: "Faraday's Laws", enabled: true },
    { seq: "41", text: "Using the Nernst Equation", enabled: true },
    { seq: "42", text: "Scenario Analysis", enabled: true },
    { seq: "43", text: "Wavelength, frequency and energy", enabled: true },
    { seq: "44", text: "Kinetics", enabled: false },
    { seq: "45", text: "Converting Binary Numbers", enabled: false },
    { seq: "46", text: "Adding Binary Numbers", enabled: false },
    { seq: "47", text: "Subtracting Binary Numbers", enabled: false },
    { seq: "48", text: "Multiplying Binary Numbers", enabled: false },
    { seq: "49", text: "Percentages", enabled: false },
    { seq: "50", text: "Smaller, larger, or the same?", enabled: true },
    { seq: "51", text: "Density, elements, mass and moles", enabled: true },
    { seq: "52", text: "Make a Guess #1", enabled: false },
    { seq: "53", text: "Make a Guess #2", enabled: false },
    { seq: "54", text: "Make a Better Guess #1", enabled: false },
    { seq: "55", text: "Make a Better Guess #2", enabled: false },
    { seq: "56", text: "Simple Mixtures", enabled: false },
    { seq: "57", text: "Special Quadratic", enabled: false },
    { seq: "58", text: "Exponents", enabled: true },
    { seq: "59", text: "Simple Nomenclature", enabled: true },
    {
      seq: "60",
      text: "Nomenclature of Simple Binary Compounds",
      enabled: true,
    },
    {
      seq: "61",
      text: "Volume, mass and moles-relating two elements",
      enabled: true,
    },
    { seq: "62", text: "Hess' Law", enabled: true },
    { seq: "63", text: "Atomic Spectrum of Hydrogen", enabled: true },
    { seq: "64", text: "Scientific Notation", enabled: true },
    { seq: "65", text: "Slater's Rules", enabled: false },
    { seq: "66", text: "Reducible Representations", enabled: false },
    { seq: "67", text: "Symmetry Point Groups", enabled: false },
    { seq: "68", text: "Hybridization", enabled: true },
    { seq: "69", text: "Born-Haber Cycles", enabled: true },
    { seq: "70", text: "Direct or Inverse", enabled: true },
    { seq: "71", text: "Using Rate Laws", enabled: true },
    { seq: "72", text: "First Order Processes", enabled: true },
    { seq: "73", text: "Generating Reducible Representations", enabled: false },
    {
      seq: "74",
      text: "Determining the Value of the Equilibrium Constant",
      enabled: true,
    },
    {
      seq: "75",
      text: "Calculating Equilibrium Concentrations",
      enabled: true,
    },
    { seq: "76", text: "The LeChatelier Effect", enabled: true },
    { seq: "77", text: "Hybrid Orbitals", enabled: false },
    { seq: "78", text: "Combining Equilibria", enabled: true },
    { seq: "79", text: "Q vs K", enabled: true },
    { seq: "80", text: "Using Drago-Wayland Parameters #1", enabled: false },
    { seq: "81", text: "The Arrhenius Equation", enabled: false },
    { seq: "82", text: "Using Drago Wayland Parameters #2", enabled: false },
    { seq: "83", text: "The deBroglie Equation", enabled: false },
    {
      seq: "84",
      text: "Nomenclature of Simple Binary Compounds-Names to Formulas",
      enabled: true,
    },
    { seq: "85", text: "The Composition of Buffer Solutions", enabled: true },
    { seq: "86", text: "Properties of Buffer Solutions", enabled: true },
  ];

  cp.findQuestion = function (seq) {
    return questionMetadata.find((q) => q.seq === seq);
  };

  cp.injectQuestionList = function (seq = null) {
    let htmls = questionMetadata.map((q) => {
      if (q.enabled) {
        return `
          <div class="list-group-item ${
            q.seq === seq ? "active" : ""
          }" name="item" onclick="window.cp.onClickQuestion(this)" data-url="question.html?seq=${
          q.seq
        }">
            <div class="seq-list-item sequence">${q.seq}: </div>
            <div class="seq-list-item">${q.text}</div>
          </div>
        `;
      } else {
        return `
          <div class="list-group-item disabled-question name="item">
            <div class="seq-list-item sequence">${q.seq}: </div>
            <div class="seq-list-item">${q.text}</div>
          </div>
        `;
      }
    });
    if (!document.location.host.includes("localhost")) {
      htmls.shift();
    }
    $("#question-list").html(htmls.join(""));
  };
})((window.cp = window.cp || {}));
