(function (cp) {
  cp.generateNewQuestion = () => {
    const cations = [
      { name: "titanium", symbol: "Ti", charge1: 4, charge2: 4 },
      { name: "vanadium", symbol: "V", charge1: 5, charge2: 4 },
      { name: "chromium", symbol: "Cr", charge1: 6, charge2: 3 },
      { name: "manganese", symbol: "Mn", charge1: 4, charge2: 2 },
      { name: "iron", symbol: "Fe", charge1: 3, charge2: 2 },
      { name: "cobalt", symbol: "Co", charge1: 3, charge2: 2 },
      { name: "nickel", symbol: "Ni", charge1: 2, charge2: 2 },
      { name: "copper", symbol: "Cu", charge1: 2, charge2: 1 },
      { name: "zinc", symbol: "Zn", charge1: 2, charge2: 2 },
      { name: "ruthenium", symbol: "Ru", charge1: 3, charge2: 4 },
      { name: "molybdenum", symbol: "Mo", charge1: 6, charge2: 4 },
      { name: "tantalum", symbol: "Ta", charge1: 5, charge2: 5 },
      { name: "rhodium", symbol: "Rh", charge1: 2, charge2: 3 },
      { name: "palladium", symbol: "Pd", charge1: 4, charge2: 2 },
      { name: "silver", symbol: "Ag", charge1: 1, charge2: 1 },
      { name: "gold", symbol: "Au", charge1: 1, charge2: 3 },
      { name: "niobium", symbol: "Nb", charge1: 3, charge2: 5 },
      { name: "tungsten", symbol: "W", charge1: 6, charge2: 4 },
      { name: "osmium", symbol: "Os", charge1: 3, charge2: 4 },
      { name: "mercury", symbol: "Hg", charge1: 2, charge2: 1 },
      { name: "platinum", symbol: "Pt", charge1: 4, charge2: 2 },
      { name: "zirconium", symbol: "Zr", charge1: 4, charge2: 4 },
      { name: "tungsten", symbol: "W", charge1: 5, charge2: 3 },
      { name: "molybdenum", symbol: "Mo", charge1: 5, charge2: 3 },
      { name: "iridium", symbol: "Ir", charge1: 2, charge2: 3 },
      { name: "iridium", symbol: "Ir", charge1: 4, charge2: 6 },
      { name: "manganese", symbol: "Mn", charge1: 6, charge2: 3 },
      { name: "thallium", symbol: "Tl", charge1: 3, charge2: 1 },
      { name: "tin", symbol: "Sn", charge1: 4, charge2: 2 },
      { name: "lead", symbol: "Pb", charge1: 4, charge2: 2 },
    ];
    const anions = [
      { name: "oxide", symbol: "O", charge1: 2 },
      { name: "fluoride", symbol: "F", charge1: 1 },
      { name: "sulfide", symbol: "S", charge1: 2 },
      { name: "chloride", symbol: "Cl", charge1: 1 },
      { name: "selenide", symbol: "Se", charge1: 2 },
      { name: "bromide", symbol: "Br", charge1: 1 },
      { name: "iodide", symbol: "I", charge1: 1 },
      { name: "carbonate", symbol: "CO<sub>3</sub>", charge1: 2 },
      { name: "hydroxide", symbol: "OH", charge1: 1 },
      { name: "nitrate", symbol: "NO<sub>3</sub>", charge1: 1 },
      { name: "nitrite", symbol: "NO<sub>2</sub>", charge1: 1 },
      { name: "sulfate", symbol: "SO<sub>4</sub>", charge1: 2 },
      { name: "sulfite", symbol: "SO<sub>3</sub>", charge1: 2 },
      { name: "cyanide", symbol: "CN", charge1: 1 },
      { name: "phosphate", symbol: "PO<sub>4</sub>", charge1: 3 },
      { name: "bicarbonate", symbol: "HCO<sub>3</sub>", charge1: 1 },
      { name: "chlorite", symbol: "ClO<sub>2</sub>", charge1: 1 },
      { name: "thiosulfate", symbol: "S<sub>2</sub>O<sub>3</sub>", charge1: 2 },
      { name: "hypochlorite", symbol: "ClO", charge1: 1 },
      { name: "chlorate", symbol: "ClO<sub>3</sub>", charge1: 1 },
      { name: "phosphite", symbol: "PO<sub>3</sub>", charge1: 3 },
    ];

    catpre = "";
    anpre = "";
    csub = "";
    asub = "";
    catsub = "";
    ansub = "";
    cat = cp.Random.int(0, 29);
    ani = cp.Random.int(0, 20);
    let cation = cations[cat];
    let anion = anions[ani];
    let x = cp.Random.boolean() ? cation.charge1 : cation.charge2;
    let y = anion.charge1;
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
      catsym = cation.symbol;
    } else {
      if (cat === 12) {
        catsym = "(" + cation.symbol + ")" + catsub;
      } else {
        catsym = cation.symbol + catsub;
      }
    }
    if (ansub === "") {
      ansym = anion.symbol;
    } else {
      if (ani > 7) {
        ansym = "(" + anion.symbol + ")" + ansub;
      } else {
        ansym = anion.symbol + ansub;
      }
    }
    theformula = `<span class="parameter">${catsym}${ansym}</span>`;
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
    if (asub === 6) {
      anpre = "hexa";
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
    firstpart = cation.name;
    secpart = anion.name;
    if (x === 1) {
      stock = "I";
    }
    if (x === 2) {
      stock = "II";
    }
    if (x === 3) {
      stock = "III";
    }
    if (x === 4) {
      stock = "IV";
    }
    if (x === 5) {
      stock = "V";
    }
    if (x === 6) {
      stock = "VI";
    }
    if (x === 7) {
      stock = "VII";
    }
    if (x === 8) {
      stock = "VIII";
    }
    thename = cation.name + "  (" + stock + ")  " + anion.name;
    // var newone = window.open("", "newone", "scrollbars=yes,width=450,height=150");
    // newone.document.clear();
    // newone.document.writeln("<html>");
    // newone.document.writeln("<head><title>newone</title>");
    // newone.document.writeln("</head>");
    // newone.document.writeln("<body bgcolor = FFFFFF");
    // newone.document.writeln("<font size = +1>");
    // newone.document.writeln("<b>", theformula, "</b><br>");
    // newone.document.writeln("<form>");
    // newone.document.writeln(
    //   "<tr><TD><b>Name</b><input type='text' name='ident' size=40>"
    // );
    // newone.document.writeln(
    //   "<TD><input type='button' value='Check Answer' onClick='opener.splitit(this.form.ident.value)'></TD></tr>"
    // );
    // newone.document.writeln("</form>");
    // newone.document.writeln("</font>");
    // newone.document.writeln("</html>");
    // document.forms[0].elements[0].focus();
    // document.forms[0].elements[0].select();
    // newone.document.close();
    // newone.focus();
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
