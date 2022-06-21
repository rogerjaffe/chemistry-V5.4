(function (cp) {
  cp.generateNewQuestion = () => {
    const halfrxns = [
      { left: "Li<sup>+</sup>(aq)", right: "Li(s)", pot: -3.04 },
      { left: "K<sup>+</sup>(aq)", right: "K(s)", pot: -2.92 },
      { left: "Ca<sup>2+</sup>(aq)", right: "Ca(s)", pot: -2.76 },
      { left: "Na<sup>+</sup>(aq)", right: "Na(s)", pot: -2.71 },
      { left: "Mg<sup>2+</sup>(aq)", right: "Mg(s)", pot: -2.38 },
      { left: "Al<sup>3+</sup>(aq)", right: "Al(s)", pot: -1.66 },
      {
        left: "2H<sub>2</sub>O(l)",
        right: "H<sub>2</sub>(g)  +  2OH<SUP>-</sup>(aq)",
        pot: -0.83,
      },
      { left: "Zn<sup>2+</sup>(aq)", right: "Zn(s)", pot: -0.76 },
      { left: "Cd<sup>2+</sup>(aq)", right: "Cd(s)", pot: -0.4 },
      { left: "Ni<sup>2+</sup>(aq)", right: "Ni(s)", pot: -0.23 },
      { left: "Sn<sup>2+</sup>(aq)", right: "Sn(s)", pot: -0.14 },
      { left: "Pb<sup>2+</sup>(aq)", right: "Pb(s)", pot: -0.13 },
      { left: "Fe<sup>3+</sup>(aq)", right: "Fe(s)", pot: -0.04 },
      { left: "Fe<sup>2+</sup>(aq)", right: "Fe(s)", pot: -0.44 },
      { left: "H<sup>+</sup>(aq)", right: "H<sub>2</sub>(g)", pot: 0 },
      { left: "Sn<sup>4+</sup>(aq)", right: "Sn<sup>2+</sup>(aq)", pot: 0.15 },
      { left: "Cu<sup>2+</sup>(aq)", right: "Cu<sup>+</sup>(aq)", pot: 0.16 },
      { left: "AgCl(s)", right: "Ag  +  Cl<sup>-</sup>(aq)", pot: 0.22 },
      { left: "Cu<SUP>2+</sup>(aq)", right: "Cu(s)", pot: 0.34 },
      { left: "I<sub>2</sub>(s)", right: "I<SUP>-</sup>(aq)", pot: 0.54 },
      { left: "Cu<sup>+</sup>(aq)", right: "Cu(s)", pot: 0.52 },
      { left: "Fe<sup>3+</sup>(aq)", right: "Fe<SUP>2+</sup>(aq)", pot: 0.77 },
      { left: "Ag<sup>+</sup>(aq)", right: "Ag(s)", pot: 0.8 },
      { left: "Co<sup>3+</sup>(aq)", right: "Co<SUP>2+</sup>(aq)", pot: 1.82 },
      { left: "Br<sub>2</sub>(l)", right: "Br<SUP>-</sup>(aq)", pot: 1.07 },
      { left: "F<sub>2</sub>(g)", right: "F<SUP>-</sup>(aq)", pot: 2.87 },
      { left: "Cl<sub>2</sub>(g)", right: "Cl<SUP>-</sup>(aq)", pot: 1.36 },
      {
        left: "MnO<sub>4</sub><sup>-</sup>(aq)",
        right: "Mn<sup>2+</sup>(aq)",
        pot: 1.49,
      },
      {
        left: "S<SUB>2</SUB>O<SUB>8</SUB><sup>2-</sup>(aq)",
        right: "SO<SUB>4</SUB><SUP>2-</sup>(aq)",
        pot: 2.01,
      },
      { left: "O<sub>3</sub>(g)", right: "O<SUB>2</SUB>(g)", pot: 2.07 },
      {
        left: "Cr<sub>2</sub>O<SUB>7</SUB><SUP>2-</sup>(aq)",
        right: "Cr<SUP>3+</sup>(aq)",
        pot: 1.33,
      },
      { left: "Ce<sup>4+</sup>(aq)", right: "Ce<SUP>3+</sup>(aq)", pot: 1.44 },
      { left: "Hg<sup>2+</sup>(aq)", right: "Hg(l)", pot: 0.85 },
      {
        left: "H<sub>2</sub>O<SUB>2</SUB>(aq)",
        right: "H<SUB>2</SUB>O(l)",
        pot: 1.78,
      },
      {
        left: "ClO<SUB>2</SUB><sup>-</sup>(aq)",
        right: "ClO<SUp>-</sup>(aq)",
        pot: -0.13,
      },
      {
        left: "ClO<SUB>4</SUB><SUP>-</sup>(aq)",
        right: "Cl<SUP>-</sup>(aq)",
        pot: 1.37,
      },
      { left: "Ag<SUP>2+</sup>(aq)", right: "Ag<SUP>+</sup>(aq)", pot: 1.98 },
      {
        left: "Cu<SUP>2+</sup>(aq)  +  I<SUP>-</sup>(aq)",
        right: "CuI(s)",
        pot: 0.86,
      },
      { left: "O<SUB>2</SUB>(g)", right: "H<SUB>2</SUB>O(l)", pot: 1.23 },
      {
        left: "ClO<SUB>3</SUB><SUP>-</sup>(aq)",
        right: "ClO<SUB>2</SUB>(g)",
        pot: 1.175,
      },
      {
        left: "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
        right: "MnO<SUB>4</SUB><SUP>2-</sup>(aq)",
        pot: 0.56,
      },
      { left: "MnO<SUB>2</SUB>(s)", right: "Mn<SUP>2+</sup>(aq)", pot: 1.23 },
      { left: "PbO<SUB>2</SUB>(s)", right: "PbO(s)", pot: 0.28 },
      { left: "Au<SUP>3+</sup>(aq)", right: "Au<SUP>+</sup>(aq)", pot: 1.36 },
      {
        left: "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
        right: "MnO<SUb>2</SUb>(s)",
        pot: 1.7,
      },
      {
        left: "IO<SUB>3</SUB><SUP>-</sup>(aq)",
        right: "I<SUB>2</SUB>",
        pot: 1.2,
      },
      { left: "H<SUB>2</SUB>SO<SUB>3</SUB>(aq)", right: "S(s)", pot: 0.45 },
      {
        left: "BrO<SUB>3</SUB><SUP>-</sup>(aq)",
        right: "Br<SUB>2</SUB>",
        pot: 1.478,
      },
      {
        left: "PbO2(s)  +  SO<SUB>4</SUB><SUP>-</sup>(aq)",
        right: "PbSO<SUB>4</SUB>(s)",
        pot: 1.69,
      },
      { left: "HAsO<SUB>2</SUB>(aq)", right: "As(s)", pot: 0.24 },
      { left: "Sr<SUP>2+</sup>(aq)", right: "Sr(s)", pot: -2.89 },
      { left: "Ti<SUP>2+</sup>(aq)", right: "Ti(s)", pot: -1.63 },
      { left: "V<SUP>3+</sup>(aq)", right: "V<SUP>2+</sup>(aq)", pot: -0.255 },
      { left: "In<SUP>3+</sup>(aq)", right: "In(s)", pot: -0.338 },
      { left: "Rb<SUP>+</sup>(aq)", right: "Rb(s)", pot: -2.924 },
      { left: "La<SUP>3+</sup>(aq)", right: "La(s)", pot: -2.38 },
      { left: "U<SUP>3+</sup>(aq)", right: "U(s)", pot: -1.66 },
      { left: "Cr<SUP>2+</sup>(aq)", right: "Cr(s)", pot: -0.9 },
      { left: "S(s)", right: "H<SUB>2</SUB>S(g)", pot: 0.14 },
      { left: "AgBr(s)", right: "Ag  +  Br<SUP>-</sup>(aq) ", pot: 0.071 },
    ];
    halfrxns.sort((a, b) => (a.left < b.left ? -1 : 1));
    const halfrxnContent = halfrxns.map(
      (e) =>
        `<tr><td>${e.left}</td><td>=></td><td>${e.right}</td><td>${e.pot}</td></tr>`
    );
    $("#halfrxn-content").html(halfrxnContent.join(""));

    const [
      { left: oxy1, right: red1, pot: pot1 },
      { left: oxy2, right: red2, pot: pot2 },
    ] = cp.library.chooseN(halfrxns, 2);
    const volt = pot1 + pot2;

    const question = `<span class="parameter">${oxy1}</span> + <span class="parameter">${oxy2}</span> => <span class="parameter">${red1}</span> + <span class="parameter">${red2}</span>`;
    $("#q").html(question);
    const answerPayload = [
      {
        answer: volt,
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
