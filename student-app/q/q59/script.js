(function (cp) {
  cp.generateNewQuestion = () => {
    const cations = [
      { name: "lithium", formula: "Li", charge: 1 },
      { name: "beryllium", formula: "Be", charge: 2 },
      { name: "potassium", formula: "K", charge: 1 },
      { name: "calcium", formula: "Ca", charge: 2 },
      { name: "sodium", formula: "Na", charge: 1 },
      { name: "magnesium", formula: "Mg", charge: 2 },
      { name: "cesium", formula: "Cs", charge: 1 },
      { name: "barium", formula: "Ba", charge: 2 },
      { name: "rubidium", formula: "Rb", charge: 1 },
      { name: "strontium", formula: "Sr", charge: 2 },
      { name: "aluminum", formula: "Al", charge: 3 },
      { name: "ammonium", formula: "NH<sub>4</sub>", charge: 1 },
      { name: "carbon", formula: "C", charge: 4 },
      { name: "silicon", formula: "Si", charge: 4 },
      { name: "phosphorus", formula: "P", charge: 3 },
      { name: "phosphorus", formula: "P", charge: 5 },
      { name: "boron", formula: "B", charge: 3 },
      { name: "sulfur", formula: "S", charge: 4 },
      { name: "sulfur", formula: "S", charge: 6 },
      { name: "nitrogen", formula: "N", charge: 3 },
    ];
    const anions = [
      { name: "oxide", formula: "O", charge: 2 },
      { name: "fluoride", formula: "F", charge: 1 },
      { name: "sulfide", formula: "S", charge: 2 },
      { name: "chloride", formula: "Cl", charge: 1 },
      { name: "selenide", formula: "Se", charge: 2 },
      { name: "bromide", formula: "Br", charge: 1 },
      { name: "iodide", formula: "I", charge: 1 },
      { name: "carbonate", formula: "CO<sub>3</sub>", charge: 2 },
      { name: "hydroxide", formula: "OH", charge: 1 },
      { name: "nitrate", formula: "NO<sub>3</sub>", charge: 1 },
      { name: "nitrite", formula: "NO<sub>2</sub>", charge: 1 },
      { name: "sulfate", formula: "SO<sub>4</sub>", charge: 2 },
      { name: "sulfite", formula: "SO<sub>3</sub>", charge: 2 },
      { name: "cyanide", formula: "CN", charge: 1 },
      { name: "permanganate", formula: "MnO<sub>4</sub>", charge: 1 },
      { name: "dichromate", formula: "Cr<sub>2</sub>O<sub>7</sub>", charge: 2 },
      { name: "phosphate", formula: "PO<sub>4</sub>", charge: 3 },
      { name: "perchlorate", formula: "ClO<sub>4</sub>", charge: 1 },
      { name: "bicarbonate", formula: "HCO<sub>3</sub>", charge: 1 },
      { name: "chlorite", formula: "ClO<sub>2</sub>", charge: 1 },
      { name: "thiosulfate", formula: "S<sub>2</sub>O<sub>3</sub>", charge: 2 },
      { name: "hypochlorite", formula: "ClO", charge: 1 },
      { name: "chlorate", formula: "ClO<sub>3</sub>", charge: 1 },
      { name: "phosphite", formula: "PO<sub>3</sub>", charge: 3 },
      { name: "chromate", formula: "CrO<sub>4</sub>", charge: 2 },
    ];
    let catpre = "";
    let anpre = "";
    let csub = "";
    let asub = "";
    let catsub = "";
    let ansub = "";
    let cat, ani;
    do {
      cat = cp.Random.int(0, 19);
      if (cat > 12) {
        ani = cp.Random.int(0, 6);
      } else {
        ani = cp.Random.int(0, 24);
      }
    } while ((cat === 18 || cat === 19) && ani === 3);
    const cation = cations[cat];
    const anion = anions[ani];
    let x = cation.charge;
    let y = anion.charge;
    if (x === y) {
      csub = 1;
      asub = 1;
    }
    if (x > y) {
      if (x % y === 0) {
        csub = 1;
        asub = Math.ceil(x / y);
      } else {
        csub = y;
        asub = x;
      }
    }
    if (y > x) {
      if (y % x === 0) {
        csub = Math.ceil(y / x);
        asub = 1;
      } else {
        csub = y;
        asub = x;
      }
    }
    if (csub === 1) {
      catsub = "";
    } else {
      catsub = "<sub>" + csub + "</sub>";
    }
    if (asub === 1) {
      ansub = "";
    } else {
      ansub = "<sub>" + asub + "</sub>";
    }
    if (catsub === "") {
      catsym = cation.formula;
    } else {
      if (cat === 12) {
        catsym = "(" + cation.formula + ")" + catsub;
      } else {
        catsym = cation.formula + catsub;
      }
    }
    if (ansub === "") {
      ansym = anion.formula;
    } else {
      if (ani > 7) {
        ansym = "(" + anion.formula + ")" + ansub;
      } else {
        ansym = anion.formula + ansub;
      }
    }
    theformula = `<span class="parameter">${catsym}${ansym}</span>`;
    if (cat > 12) {
      if (csub === 2) {
        catpre = "di";
      }
      if (csub === 3) {
        catpre = "tri";
      }
      if (csub === 4) {
        catpre = "tetra";
      }
      if (csub === 5) {
        catpre = "penta";
      }
      if (asub === 1 && ani === 1) {
        anpre = "mon";
      }
      if (asub === 2) {
        anpre = "di";
      }
      if (asub === 3) {
        anpre = "tri";
      }
      if (asub === 4) {
        anpre = "tetra";
      }
      if (asub === 5) {
        anpre = "penta";
      }
      if (asub === 6) {
        anpre = "hexa";
      }
    }
    thename = catpre + cation.name + "  " + anpre + anion.name;
    firstpart = catpre + cation.name;
    secpart = anpre + anion.name;
    const answerPayload = [
      {
        answer: thename.replace(/\s/g, ""),
        type: "string",
      },
    ];
    $("#question").html(theformula);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
