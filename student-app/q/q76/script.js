(function (cp) {
  cp.setAnswers = (_this) => {
    const selected = $("input[type='radio'][name='answer']:checked");
    $("input[name='input']").val(selected.val());
    let isValid = selected.val().length > 0;
    document.getElementById("check-answer-button").disabled = !isValid;
  };

  cp.generateNewQuestion = () => {
    // tried=0
    // totl=0
    let theanswer = 0;
    // corrt=0
    // howlong=""
    let plusheat = "q>0";
    let negheat = "q<0";
    let theheat = "";
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(rxn) {
      this.rxn = rxn;
    }
    function compound(n, c1, c2, c3, c4) {
      this.n = n;
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    function dataset(l1, d1, d2, d3, d4, d5, d6) {
      this.l1 = l1;
      this.d1 = d1;
      this.d2 = d2;
      this.d3 = d3;
      this.d4 = d4;
      this.d5 = d5;
      this.d6 = d6;
    }
    function solve(f1, f2, f3) {
      this.f1 = f1;
      this.f2 = f2;
      this.f3 = f3;
    }
    let react = new MakeArray(100);
    let reactconc = new MakeArray(3);
    let prodconc = new MakeArray(3);
    let reaction = new MakeArray(100);
    let products = new MakeArray(100);
    let cmpd = new MakeArray(100);
    let factors = new MakeArray(100);
    reaction[1] = "2H<SUB>2</SUB>(g) + O<SUB>2</SUB>(g) <=> 2H<SUB>2</SUB>O(g)";
    factors[1] = new dataset(1, 2, 1, 2);
    react[1] = new compound(2, "H<SUB>2</SUB>", "O<SUB>2</SUB>");
    products[1] = new compound(1, "H<SUB>2</SUB>O");
    reaction[2] = "N<SUB>2</SUB>(g) + 3H<SUB>2</SUB>(g) <=> 2NH<SUB>3</SUB>(g)";
    factors[2] = new dataset(1, 1, 3, 2);
    react[2] = new compound(2, "N<SUB>2</SUB>", "H<SUB>2</SUB>");
    products[2] = new compound(1, "NH<SUB>3</SUB>");
    reaction[3] = "CH<SUB>3</SUB>OH(g) <=> CO(g) + 2H<SUB>2</SUB>(g)";
    factors[3] = new dataset(2, 1, 1, 2);
    react[3] = new compound(1, "CH<SUB>3</SUB>OH");
    products[3] = new compound(2, "CO", "H<SUB>2</SUB>");
    reaction[4] = "CO(g) + 2H<SUB>2</SUB>(g) <=> CH<SUB>3</SUB>OH(g)";
    factors[4] = new dataset(1, 1, 2, 1);
    react[4] = new compound(2, "CO", "H<SUB>2</SUB>");
    products[4] = new compound(1, "CH<SUB>3</SUB>OH");
    reaction[5] = "NO(g) +  O<SUB>2</SUB>(g) <=> NO<SUB>3</SUB>(g)";
    factors[5] = new dataset(1, 1, 1, 1);
    react[5] = new compound(2, "NO(g)", "O<SUB>2</SUB>");
    products[5] = new compound(1, "NO<SUB>3</SUB>");
    reaction[6] = "NO<SUB>3</SUB>(g) <=> NO(g) +  O<SUB>2</SUB>(g)";
    factors[6] = new dataset(2, 1, 1, 1);
    react[6] = new compound(1, "NO<SUB>3</SUB>");
    products[6] = new compound(2, "NO(g)", "O<SUB>2</SUB>");
    reaction[7] = "NO<SUB>3</SUB>(g) +  NO(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[7] = new dataset(0, 1, 1, 2);
    react[7] = new compound(2, "NO<SUB>3</SUB>", "NO");
    products[7] = new compound(1, "NO<SUB>2</SUB>");
    reaction[8] = "2NO<SUB>2</SUB>(g) <=> NO<SUB>3</SUB>(g) +  NO(g)";
    factors[8] = new dataset(0, 2, 1, 1);
    react[8] = new compound(1, "NO<SUB>2</SUB>");
    products[8] = new compound(2, "NO<SUB>3</SUB>", "NO");
    reaction[9] = "2NO(g) + O<SUB>2</SUB>(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[9] = new dataset(1, 2, 1, 2);
    react[9] = new compound(2, "NO", "O<SUB>2</SUB>");
    products[9] = new compound(1, "NO<SUB>2</SUB>");
    reaction[10] = "H<SUB>2</SUB>(g) + 2ICl(g) <=> I<SUB>2</SUB>(g) + 2HCl(g)";
    factors[10] = new dataset(0, 1, 2, 1, 2);
    react[10] = new compound(2, "H<SUB>2</SUB>", "ICl");
    products[10] = new compound(2, "I<SUB>2</SUB>", "HCl");
    reaction[11] = "I<SUB>2</SUB>(g) + 2HCl(g) <=> H<SUB>2</SUB>(g) + 2ICl(g)";
    factors[11] = new dataset(0, 1, 2, 1, 2);
    react[11] = new compound(2, "I<SUB>2</SUB>", "HCl");
    products[11] = new compound(2, "H<SUB>2</SUB>", "ICl");
    reaction[12] = "2CO(g) + 2NO(g) <=> 2CO<SUB>2</SUB>(g) + N<SUB>2</SUB>(g)";
    factors[12] = new dataset(1, 2, 2, 2, 1);
    react[12] = new compound(2, "CO", "NO");
    products[12] = new compound(2, "CO<SUB>2</SUB>", "N<SUB>2</SUB>");
    reaction[13] = "2CO<SUB>2</SUB>(g) + N<SUB>2</SUB>(g) <=> 2CO(g) + 2NO(g)";
    factors[13] = new dataset(2, 2, 1, 2, 2);
    react[13] = new compound(2, "CO<SUB>2</SUB>", "N<SUB>2</SUB>");
    products[13] = new compound(2, "CO", "NO");
    reaction[14] =
      "2SO<SUB>2</SUB>(g) + O<SUB>2</SUB>(g) ,<=> 2SO<SUB>3</SUB>(g)";
    factors[14] = new dataset(1, 2, 1, 2);
    react[14] = new compound(2, "SO<SUB>2</SUB>", "O<SUB>2</SUB>");
    products[14] = new compound(1, "SO<SUB>3</SUB>");
    reaction[15] =
      "2SO<SUB>3</SUB>(g) <=> 2SO<SUB>2</SUB>(g) + O<SUB>2</SUB>(g)";
    factors[15] = new dataset(2, 2, 2, 1);
    react[15] = new compound(1, "SO<SUB>3</SUB>");
    products[15] = new compound(2, "SO<SUB>2</SUB>", "O<SUB>2</SUB>");
    reaction[16] = "CaCO<SUB>3</SUB>(s) <=> CaO(s) + CO<SUB>2</SUB>(g)";
    factors[16] = new dataset(2, 1);
    react[16] = new compound(0);
    products[16] = new compound(1, "CO<SUB>2</SUB>");
    reaction[17] = "CaO(s) + CO<SUB>2</SUB>(g) <=> CaCO<SUB>3</SUB>(s)";
    factors[17] = new dataset(1, 1);
    react[17] = new compound(1, "CO<SUB>2</SUB>");
    products[17] = new compound(0);
    reaction[18] = "C(s) + H<SUB>2</SUB>O(g) <=> CO(g) + H<SUB>2</SUB>(g)";
    factors[18] = new dataset(2, 1, 1, 1);
    react[18] = new compound(1, "H<SUB>2</SUB>O");
    products[18] = new compound(2, "CO", "H<SUB>2</SUB>");
    reaction[19] = "N<SUB>2</SUB>O<SUB>4</SUB>(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[19] = new dataset(2, 1, 2);
    react[19] = new compound(1, "N<SUB>2</SUB>O<SUB>4</SUB>");
    products[19] = new compound(1, "NO<SUB>2</SUB>");
    reaction[20] = "2NO<SUB>2</SUB>(g) <=> N<SUB>2</SUB>O<SUB>4</SUB>(g) ";
    factors[20] = new dataset(1, 2, 1);
    react[20] = new compound(1, "NO<SUB>2</SUB>");
    products[20] = new compound(1, "N<SUB>2</SUB>O<SUB>4</SUB>");
    reaction[21] =
      "Ag<sup>+</sup>(aq) + Fe<sup>2+</sup>(aq) <=> Fe<sup>3+</sup>(aq) + Ag(s)";
    factors[21] = new dataset(1, 1, 1, 1);
    react[21] = new compound(2, "Ag<sup>+</sup>", "Fe<sup>2+</sup>");
    products[21] = new compound(1, "Fe<sup>3+</sup>");
    reaction[22] =
      "Fe<sup>3+</sup>(aq) + Ag(s) <=> Ag<sup>+</sup>(aq) + Fe<sup>2+</sup>(aq)";
    factors[22] = new dataset(2, 1, 1, 1);
    react[22] = new compound(1, "Fe<sup>3+</sup>");
    products[22] = new compound(2, "Ag<sup>+</sup>", "Fe<sup>2+</sup>");
    reaction[23] =
      "CS<SUB>2</SUB>(g) + 4H<SUB>2</SUB>(g) <=> CH<SUB>4</SUB>(g) + 2H<SUB>2</SUB>S(g) ";
    factors[23] = new dataset(1, 1, 4, 1, 2);
    react[23] = new compound(2, "CS<SUB>2</SUB>", "H<SUB>2</SUB>");
    products[23] = new compound(2, "CH<SUB>4</SUB>", "H<SUB>2</SUB>S");
    reaction[24] =
      "CH<SUB>4</SUB>(g) + 2H<SUB>2</SUB>S(g) <=> CS<SUB>2</SUB>(g) + 4H<SUB>2</SUB>(g) ";
    factors[24] = new dataset(2, 1, 2, 1, 4);
    react[24] = new compound(2, "CH<SUB>4</SUB>", "H<SUB>2</SUB>S");
    products[24] = new compound(2, "CS<SUB>2</SUB>", "H<SUB>2</SUB>");
    reaction[25] = "2P(s) + 3Cl<SUB>2</SUB>(g) <=> 2PCl<SUB>3</SUB>(g)";
    factors[25] = new dataset(1, 3, 2);
    react[25] = new compound(1, "Cl<SUB>2</SUB>");
    products[25] = new compound(1, "PCl<SUB>3</SUB>");
    reaction[26] = "2PCl<SUB>3</SUB>(g) <=> 2P(s) + 3Cl<SUB>2</SUB>(g)";
    factors[26] = new dataset(2, 2, 3);
    react[26] = new compound(1, "PCl<SUB>3</SUB>");
    products[26] = new compound(1, "Cl<SUB>2</SUB>");
    reaction[27] =
      "Cl<SUB>2</SUB>(g) + 3F<SUB>2</SUB>(g) <=> 2ClF<SUB>3</SUB>(g)";
    factors[27] = new dataset(1, 1, 3, 2);
    react[27] = new compound(2, "Cl<SUB>2</SUB>", "F<SUB>2</SUB>");
    products[27] = new compound(1, "ClF<SUB>3</SUB>");
    reaction[28] =
      "2ClF<SUB>3</SUB>(g) <=> Cl<SUB>2</SUB>(g) + 3F<SUB>2</SUB>(g)";
    factors[28] = new dataset(2, 2, 1, 3);
    react[28] = new compound(1, "ClF<SUB>3</SUB>");
    products[28] = new compound(2, "Cl<SUB>2</SUB>", "F<SUB>2</SUB>");
    reaction[29] =
      "2COF<SUB>2</SUB>(g) <=> CO<SUB>2</SUB>(g) + CF<SUB>4</SUB>(g)";
    factors[29] = new dataset(0, 2, 1, 1);
    react[29] = new compound(1, "COF<SUB>2</SUB>");
    products[29] = new compound(2, "CO<SUB>2</SUB>", "CF<SUB>4</SUB>");
    reaction[30] =
      "CO<SUB>2</SUB>(g) + CF<SUB>4</SUB>(g) <=> 2COF<SUB>2</SUB>(g)";
    factors[30] = new dataset(0, 1, 1, 2);
    react[30] = new compound(2, "CO<SUB>2</SUB>", "CF<SUB>4</SUB>");
    products[30] = new compound(1, "COF<SUB>2</SUB>");
    reaction[31] = "CO(g) + Cl<SUB>2</SUB>(g) <=> COCl<SUB>2</SUB>(g)";
    factors[31] = new dataset(1, 1, 1, 1);
    react[31] = new compound(2, "CO", "Cl<SUB>2</SUB>");
    products[31] = new compound(1, "COCl<SUB>2</SUB>");
    reaction[32] = "COCl<SUB>2</SUB>(g) <=> CO(g) + Cl<SUB>2</SUB>(g)";
    factors[32] = new dataset(2, 1, 1, 1);
    react[32] = new compound(1, "COCl<SUB>2</SUB>");
    products[32] = new compound(2, "CO", "Cl<SUB>2</SUB>");
    reaction[33] =
      "PCl<SUB>5</SUB>(g) <=> PCl<SUB>3</SUB>(g) + Cl<SUB>2</SUB>(g)";
    factors[33] = new dataset(2, 1, 1, 1);
    react[33] = new compound(1, "PCl<SUB>5</SUB>");
    products[33] = new compound(2, "PCl<SUB>3</SUB>", "Cl<SUB>2</SUB>");
    reaction[34] =
      "PCl<SUB>3</SUB>(g) + Cl<SUB>2</SUB>(g) <=> PCl<SUB>5</SUB>(g) ";
    factors[34] = new dataset(1, 1, 1, 1);
    react[34] = new compound(2, "PCl<SUB>3</SUB>", "Cl<SUB>2</SUB>");
    products[34] = new compound(1, "PCl<SUB>5</SUB>");
    reaction[35] = "C(s) + CO<SUB>2</SUB>(g) <=> 2CO(g)";
    factors[35] = new dataset(2, 1, 2);
    react[35] = new compound(1, "CO<SUB>2</SUB>");
    products[35] = new compound(1, "CO");
    reaction[36] = "2CO(g) <=> C(s) + CO<SUB>2</SUB>(g)";
    factors[36] = new dataset(1, 2, 1);
    react[36] = new compound(1, "CO");
    products[36] = new compound(1, "CO<SUB>2</SUB>");
    reaction[37] =
      "2N<SUB>2</SUB>O(g) + 3O<SUB>2</SUB>(g) <=> 2N<SUB>2</SUB>O<SUB>4</SUB>(g)";
    factors[37] = new dataset(1, 2, 3, 2);
    react[37] = new compound(2, "2N<SUB>2</SUB>O", "O<SUB>2</SUB>");
    products[37] = new compound(1, "N<SUB>2</SUB>O<SUB>4</SUB>");
    reaction[38] =
      "2N<SUB>2</SUB>O<SUB>4</SUB>(g) <=> 2N<SUB>2</SUB>O(g) + 3O<SUB>2</SUB>(g)";
    factors[38] = new dataset(2, 2, 2, 3);
    react[38] = new compound(1, "N<SUB>2</SUB>O<SUB>4</SUB>");
    products[38] = new compound(2, "2N<SUB>2</SUB>O", "O<SUB>2</SUB>");
    reaction[39] =
      "CO(g) + H<SUB>2</SUB>O(g) <=> CO<SUB>2</SUB>(g) + H<SUB>2</SUB>(g)";
    factors[39] = new dataset(0, 1, 1, 1, 1);
    react[39] = new compound(2, "CO", "H<SUB>2</SUB>O");
    products[39] = new compound(2, "CO<SUB>2</SUB>", "H<SUB>2</SUB>");
    reaction[40] =
      "CO<SUB>2</SUB>(g) + H<SUB>2</SUB>(g) <=> CO(g) + H<SUB>2</SUB>O(g) ";
    factors[40] = new dataset(0, 1, 1, 1, 1);
    react[40] = new compound(2, "CO<SUB>2</SUB>", "H<SUB>2</SUB>");
    products[40] = new compound(2, "CO", "H<SUB>2</SUB>O");
    reaction[41] =
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>(g) <=> SO<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g)";
    factors[41] = new dataset(2, 1, 1, 1);
    react[41] = new compound(1, "SO<SUB>2</SUB>Cl<SUB>2</SUB>");
    products[41] = new compound(2, "SO<SUB>2</SUB>", "Cl<SUB>2</SUB>");
    reaction[42] =
      "SO<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g) <=> SO<SUB>2</SUB>Cl<SUB>2</SUB>(g) ";
    factors[42] = new dataset(1, 1, 1, 1);
    react[42] = new compound(2, "SO<SUB>2</SUB>", "Cl<SUB>2</SUB>");
    products[42] = new compound(1, "SO<SUB>2</SUB>Cl<SUB>2</SUB>");
    reaction[43] = "2NO(g) +  Br<SUB>2</SUB>(g) <=> 2NOBr(g)";
    factors[43] = new dataset(1, 2, 1, 2);
    react[43] = new compound(2, "NO", "Br<SUB>2</SUB>");
    products[43] = new compound(1, "NOBr");
    reaction[44] = "2NOBr(g) <=> 2NO(g) +  Br<SUB>2</SUB>(g)";
    factors[44] = new dataset(2, 2, 1, 2);
    react[44] = new compound(1, "NOBr");
    products[44] = new compound(2, "NO", "Br<SUB>2</SUB>");
    reaction[45] =
      "CH<SUB>4</SUB>(g) +  O<SUB>2</SUB>(g) <=> H<SUB>2</SUB>CO(g) + H<SUB>2</SUB>O(g)";
    factors[45] = new dataset(0, 1, 1, 1, 1);
    react[45] = new compound(2, "CH<SUB>4</SUB>", "O<SUB>2</SUB>");
    products[45] = new compound(2, "H<SUB>2</SUB>CO", "H<SUB>2</SUB>O");
    reaction[46] =
      "H<SUB>2</SUB>CO(g) + H<SUB>2</SUB>O(g) <=> CH<SUB>4</SUB>(g) +  O<SUB>2</SUB>(g) ";
    factors[46] = new dataset(0, 1, 1, 1, 1);
    react[46] = new compound(2, "H<SUB>2</SUB>CO", "H<SUB>2</SUB>O");
    products[46] = new compound(2, "CH<SUB>4</SUB>", "O<SUB>2</SUB>");
    let basequest =
      "Assume that the reaction below is at equilibrium. Note that the sign of the reaction heat is provided. A stress is then applied as described. Click on the appropriate circle to indicate how the system will respond to the stress.<br>";

    //begin programs
    function begin() {
      let stress = "";
      // tried=0
      // totl++
      // document.forms[0].results.value=""
      // document.forms[0].total.value=totl
      let which = Math.ceil(46 * Math.random());
      let reactnum = react[which]["n"];
      let prodnum = products[which]["n"];
      let thereaction = reaction[which];
      let heatterm = Math.ceil(2 * Math.random());
      if (heatterm === 1) {
        theheat = plusheat;
      } else {
        theheat = negheat;
      }
      //choose stress
      let type = Math.ceil(9 * Math.random());
      if (type === 1) {
        stress = addreact(which);
        theanswer = "2";
      }
      if (type === 2) {
        stress = removereact(which);
        theanswer = "1";
      }
      if (type === 3) {
        stress = addprod(which);
        theanswer = "1";
      }
      if (type === 4) {
        stress = removeprod(which);
        theanswer = "2";
      }
      if (type === 5) {
        stress = "The volume is increased.";
        if (factors[which]["l1"] === 0) {
          theanswer = "3";
        }
        if (factors[which]["l1"] === 2) {
          theanswer = "2";
        }
        if (factors[which]["l1"] === 1) {
          theanswer = "1";
        }
      }
      if (type === 6) {
        stress = "The volume is decreased.";
        if (factors[which]["l1"] === 0) {
          theanswer = "3";
        }
        if (factors[which]["l1"] === 2) {
          theanswer = "1";
        }
        if (factors[which]["l1"] === 1) {
          theanswer = "2";
        }
      }
      if (type === 7) {
        stress = "A catalyst is added.";
        theanswer = "3";
      }
      if (type === 8) {
        stress = "Temperature is increased.";
        if (heatterm === 1) {
          theanswer = "2";
        } else {
          theanswer = "1";
        }
      }
      if (type === 9) {
        stress = "Temperature is decreased.";
        if (heatterm === 1) {
          theanswer = "1";
        } else {
          theanswer = "2";
        }
      }
      if (stress === "") {
        // totl--;
        begin();
      } else {
        display(thereaction, stress, theheat);
      }
    }
    function addreact(which) {
      let unk = Math.ceil(react[which]["n"] * Math.random());
      let s = "c" + unk;
      let unknown = react[which][s];
      let choice = unknown + " is added.";
      return choice;
    }
    function removereact(which) {
      let unk = Math.ceil(react[which]["n"] * Math.random());
      let s = "c" + unk;
      let unknown = react[which][s];
      let choice = unknown + " is removed.";
      return choice;
    }

    function addprod(which) {
      let unk = Math.ceil(products[which]["n"] * Math.random());
      let s = "c" + unk;
      let unknown = products[which][s];
      let choice = unknown + " is added.";
      return choice;
    }
    function removeprod(which) {
      let unk = Math.ceil(products[which]["n"] * Math.random());
      let s = "c" + unk;
      let unknown = products[which][s];
      let choice = unknown + " is removed.";
      return choice;
    }
    function getconc() {
      let theconc = 10;
      while (theconc > 1) {
        theconc = 1 / (10 * Math.random());
      }
      return sigfigs(theconc);
    }

    function sigfigs(f) {
      let ex = 0;
      if (f > 1000) {
        while (f > 1000) {
          ex++;
          f = f / 10;
        }
        f = Math.round(f) / 100;
        ex = ex + 2;
        f = "" + f;
        if (f.length === 1) {
          f = f + ".";
        }
        while (f.length < 4) {
          f = f + "0";
        }
        f = f + "e" + ex;
        return f;
      } else {
        if (f < 100) {
          while (f < 100) {
            ex++;
            f = f * 10;
          }
          f = Math.round(f) / 100;
          ex = 2 - ex;
          f = "" + f;
          if (f.length === 1) {
            f = f + ".";
          }
          while (f.length < 4) {
            f = f + "0";
          }
          if (ex !== 0) {
            f = f + "e" + ex;
          }
          return f;
        } else {
          f = Math.round(f) / 100 + "e" + 2;
          f = "" + f;
          if (f.length === 1) {
            f = f + ".";
          }
          while (f.length < 4) {
            f = f + "0";
          }
          return f;
        }
      }
    }
    function display(quest, stress, theheat) {
      let html = `<div>${basequest}</div><div><span>${quest}</span><span class="heat-gap">${theheat}</span></div><div>${stress}</div>`;
      // basequest +
      // "<table class='question-table'><tr><td>" +
      // quest +
      // "</td><td></td><td>" +
      // theheat +
      // "</td></tr></table><hr>" +
      // stress;
      $("#question").html(html);
      //
      // var newone = window.open(
      //   "",
      //   "newone",
      //   "scrollbars=yes,width=400,height=250"
      // );
      // newone.document.clear();
      // newone.document.writeln("<html>");
      // newone.document.writeln("<head><title>newone</title>");
      // newone.document.writeln("</head>");
      // newone.document.writeln("<body bgcolor = FFFFFF");
      // newone.document.writeln("<font size = +1>");
      // newone.document.writeln(
      //   basequest,
      //   "<table><tr><td>",
      //   quest,
      //   "</td><td></td><td>",
      //   theheat,
      //   "</td></tr></table><hr>",
      //   stress
      // );
      // newone.document.writeln("<form method='post'>");
      // newone.document.writeln(
      //   "<input type='radio' name='lechat' onClick='opener.answer(1)'>Shifts to Left"
      // );
      // newone.document.writeln(
      //   "<input type='radio' name='lechat' onClick='opener.answer(2)'>Shifts to Right"
      // );
      // newone.document.writeln(
      //   "<input type='radio' name='lechat' onClick='opener.answer(3)'>No Change"
      // );
      // newone.document.writeln("</form>");
      // newone.document.writeln("</font>");
      // newone.document.writeln("</html>");
      // newone.document.close();
      // newone.focus();
    }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }

    begin();
    const answerPayload = [
      {
        answer: theanswer,
        type: "string",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
