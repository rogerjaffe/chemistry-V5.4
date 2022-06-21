(function (cp) {
  cp.generateNewQuestion = () => {
    let instruct = 0;
    let enth = "  H=";
    let acount = 0;
    let ccount = 0;
    let formula = "";
    let frxn = "";
    let formheat = 0;
    let elem = `<input class="input-small" type="number" name="input" idx="0" onkeyup="window.cp.onAnswerChange(this)")`;
    let theanswer = 0;
    let lattice = "";
    let lheat = 0;
    let cation;
    let anion;
    let heatindex;

    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(eqn, heat, sym, sym2, sym3) {
      this.eqn = eqn;
      this.heat = heat;
      this.sym = sym;
      this.sym2 = sym2;
      this.sym3 = sym3;
    }
    function eset(p1, p2, p3, p4, p5, p6) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
      this.p6 = p6;
    }

    rxn = new MakeArray(10);
    hot = new MakeArray(10);
    for (j = 1; j <= 10; j++) {
      rxn[j] = 0;
      hot[j] = 0;
    }
    cdataset = new MakeArray(100);
    adataset = new MakeArray(100);
    //begin cation data
    cdataset[1] = new equation(
      "Li(g) => Li<SUP>+</SUP>(g) + e<SUP>-</SUP>",
      540,
      "Li",
      "Li<SUP>+</SUP>(g)",
      "Li(s)"
    );
    cdataset[2] = new equation(
      "Na(g) => Na<SUP>+</SUP>(g) + e<SUP>-</SUP>",
      486,
      "Na",
      "Na<SUP>+</SUP>(g)",
      "Na(s)"
    );
    cdataset[3] = new equation(
      "K(g) => K<SUP>+</SUP>(g) + e<SUP>-</SUP>",
      410,
      "K",
      "K<SUP>+</SUP>(g)",
      "K(s)"
    );
    cdataset[4] = new equation(
      "Cs(g) => Cs<SUP>+</SUP>(g) + e<SUP>-</SUP>",
      386,
      "Cs",
      "Cs<SUP>+</SUP>(g)",
      "Cs(s)"
    );
    cdataset[5] = new equation(
      "Rb(g) => Rb<SUP>+</SUP>(g) + e<SUP>-</SUP>",
      400,
      "Rb",
      "Rb<SUP>+</SUP>(g)",
      "Rb(s)"
    );
    cdataset[6] = new equation(
      "Mg(g) => Mg<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2170,
      "Mg",
      "Mg<SUP>2+</SUP>(g)",
      "Mg(s)"
    );
    cdataset[7] = new equation(
      "Ca(g) => Ca<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      1700,
      "Ca",
      "Ca<SUP>2+</SUP>(g)",
      "Ca(s)"
    );
    cdataset[8] = new equation(
      "Sr(g) => Sr<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      1580,
      "Sr",
      "Sr<SUP>2+</SUP>(g)",
      "Sr(s)"
    );
    cdataset[9] = new equation(
      "Ba(g) => Ba<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      1440,
      "Ba",
      "Ba<SUP>2+</SUP>(g)",
      "Ba(s)"
    );
    cdataset[10] = new equation(
      "Zn(g) => Zn<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2680,
      "Zn",
      "Zn<SUP>2+</SUP>(g)",
      "Zn(s)"
    );
    cdataset[11] = new equation(
      "Cd(g) => Cd<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2490,
      "Cd",
      "Cd<SUP>2+</SUP>(g)",
      "Cd(s)"
    );
    cdataset[12] = new equation(
      "Mn(g) => Mn<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2230,
      "Mn",
      "Mn<SUP>2+</SUP>(g)",
      "Mn(s)"
    );
    cdataset[13] = new equation(
      "Pb(g) => Pb<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2160,
      "Pb",
      "Pb<SUP>2+</SUP>(g)",
      "Pb(s)"
    );
    cdataset[14] = new equation(
      "Be(g) => Be<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2660,
      "Be",
      "Be<SUP>2+</SUP>(g)",
      "Be(s)"
    );
    cdataset[15] = new equation(
      "Co(g) => Co<SUP>2+</SUP>(g) + 2e<SUP>-</SUP>",
      2400,
      "Co",
      "Co<SUP>2+</SUP>(g)",
      "Co(s)"
    );
    cdataset[21] = new equation("Li(s) => Li(g)", 146);
    cdataset[22] = new equation("Na(s) => Na(g)", 98);
    cdataset[23] = new equation("K(s) => K(g)", 78);
    cdataset[24] = new equation("Cs(s) => Cs(g)", 72);
    cdataset[25] = new equation("Rb(s) => Rb(g)", 68);
    cdataset[26] = new equation("Mg(s) => Mg(g)", 132);
    cdataset[27] = new equation("Ca(s) => Ca(g)", 158);
    cdataset[28] = new equation("Sr(s) => Sr(g)", 144);
    cdataset[29] = new equation("Ba(s) => Ba(g)", 142);
    cdataset[30] = new equation("Zn(s) => Zn(g)", 116);
    cdataset[31] = new equation("Cd(s) => Cd(g)", 102);
    cdataset[32] = new equation("Mn(s) => Mn(g)", 224);
    cdataset[33] = new equation("Pb(s) => Pb(g)", 178);
    cdataset[34] = new equation("Be(s) => Be(g)", 302);
    cdataset[35] = new equation("Co(s) => Co(g)", 382);
    //begin anion data
    adataset[1] = new equation(
      "F<SUB>2</SUB>(g) => 2F(g)",
      152,
      "F",
      "F<SUP>-</SUP>(g)",
      "F<SUB>2</SUB>(g)"
    );
    adataset[2] = new equation(
      "Cl<SUB>2</SUB>(g) => 2Cl(g)",
      236,
      "Cl",
      "Cl<SUP>-</SUP>(g)",
      "Cl<SUB>2</SUB>(g)"
    );
    adataset[3] = new equation(
      "Br<SUB>2</SUB>(g) => 2Br(g)",
      186,
      "Br",
      "Br<SUP>-</SUP>(g)",
      "Br<SUB>2</SUB>(l)"
    );
    adataset[4] = new equation(
      "I<SUB>2</SUB>(g) => 2I(g)",
      144,
      "I",
      "I<SUP>-</SUP>(g)",
      "I<SUB>2</SUB>(s)"
    );
    adataset[5] = new equation(
      "O<sub>2</sub>(s) => 2O(g)",
      488,
      "O",
      "O<SUP>2-</SUP>(g)",
      "O<SUB>2</SUB>(g)"
    );
    adataset[6] = new equation(
      "S(s) =>S(g)",
      264,
      "S",
      "S<SUP>2-</SUP>(g)",
      "S(s)"
    );
    adataset[11] = new equation(
      "F(g) + e<SUP>-</SUP> => F<SUP>-</SUP>(g)",
      -318
    );
    adataset[12] = new equation(
      "Cl(g) + e<SUP>-</SUP> => Cl<SUP>-</SUP>(g)",
      -342
    );
    adataset[13] = new equation(
      "Br(g) + e<SUP>-</SUP> => Br<SUP>-</SUP>(g)",
      -322
    );
    adataset[14] = new equation(
      "I(g) + e<SUP>-</SUP> => I<SUP>-</SUP>(g)",
      -288
    );
    adataset[15] = new equation(
      "O(g) + 2e<SUP>-</SUP> => O<SUP>2-</SUP>(g)",
      598
    );
    adataset[16] = new equation(
      "S(g) + 2e<SUP>-</SUP> => S<SUP>2-</SUP>(g)",
      246
    );
    adataset[21] = new equation("x", 0);
    adataset[22] = new equation("x", 0);
    adataset[23] = new equation("Br<sub>2</sub>(l) => Br<sub>2</sub>(g)", 18);
    adataset[24] = new equation("I<sub>2</sub>(s) => I<sub>2</sub>(g)", 38);
    adataset[25] = new equation("x", 0);
    adataset[26] = new equation("x", 0);
    ceqset = new MakeArray(30);
    ceqset[1] = new eset(1, 21);
    ceqset[2] = new eset(2, 22);
    ceqset[3] = new eset(3, 23);
    ceqset[4] = new eset(4, 24);
    ceqset[5] = new eset(5, 25);
    ceqset[6] = new eset(6, 26);
    ceqset[7] = new eset(7, 27);
    ceqset[8] = new eset(8, 28);
    ceqset[9] = new eset(9, 29);
    ceqset[10] = new eset(10, 30);
    ceqset[11] = new eset(11, 31);
    ceqset[12] = new eset(12, 32);
    ceqset[13] = new eset(13, 33);
    ceqset[14] = new eset(14, 34);
    ceqset[15] = new eset(15, 35);
    aeqset = new MakeArray(30);
    aeqset[1] = new eset(1, 11, 21);
    aeqset[2] = new eset(2, 12, 22);
    aeqset[3] = new eset(3, 13, 23);
    aeqset[4] = new eset(4, 14, 24);
    aeqset[5] = new eset(5, 15, 25);
    aeqset[6] = new eset(6, 16, 26);
    fheat = new MakeArray(100);
    fheat[11] = -608;
    fheat[12] = -404;
    fheat[13] = -168;
    fheat[14] = -264;
    fheat[15] = -586;
    fheat[16] = 999;
    fheat[21] = -564;
    fheat[22] = -404;
    fheat[23] = -356;
    fheat[24] = -278;
    fheat[25] = -508;
    fheat[26] = -368;
    fheat[31] = -556;
    fheat[32] = -428;
    fheat[33] = -384;
    fheat[34] = -322;
    fheat[35] = -358;
    fheat[36] = -378;
    fheat[41] = -528;
    fheat[42] = -426;
    fheat[43] = -388;
    fheat[44] = -332;
    fheat[45] = -312;
    fheat[46] = -344;
    fheat[51] = -552;
    fheat[52] = -428;
    fheat[53] = -382;
    fheat[54] = -324;
    fheat[55] = -338;
    fheat[56] = -352;
    fheat[61] = -1114;
    fheat[62] = -652;
    fheat[63] = -524;
    fheat[64] = -368;
    fheat[65] = -612;
    fheat[66] = -342;
    fheat[71] = -1214;
    fheat[72] = -806;
    fheat[73] = -694;
    fheat[74] = -532;
    fheat[75] = -628;
    fheat[76] = -492;
    fheat[81] = -1204;
    fheat[82] = -812;
    fheat[83] = -704;
    fheat[84] = -562;
    fheat[85] = -584;
    fheat[86] = -432;
    fheat[91] = -1216;
    fheat[92] = -848;
    fheat[93] = -752;
    fheat[94] = -608;
    fheat[95] = -562;
    fheat[96] = -438;
    fheat[101] = 999;
    fheat[102] = -412;
    fheat[103] = -332;
    fheat[104] = -204;
    fheat[105] = -342;
    fheat[106] = -182;
    fheat[111] = -694;
    fheat[112] = -396;
    fheat[113] = -308;
    fheat[114] = -204;
    fheat[115] = -254;
    fheat[116] = -142;
    fheat[121] = -788;
    fheat[122] = -486;
    fheat[123] = -372;
    fheat[124] = -242;
    fheat[125] = -382;
    fheat[126] = -212;
    fheat[131] = -672;
    fheat[132] = -352;
    fheat[133] = -282;
    fheat[134] = -178;
    fheat[135] = -224;
    fheat[136] = -98;
    fheat[141] = 999;
    fheat[142] = -518;
    fheat[143] = -372;
    fheat[144] = -208;
    fheat[145] = -614;
    fheat[146] = -238;
    fheat[151] = -668;
    fheat[152] = -328;
    fheat[153] = -238;
    fheat[154] = -106;
    fheat[155] = -242;
    fheat[156] = -88;
    //program starts here
    function begin() {
      cation = Math.ceil(15 * Math.random());
      anion = Math.ceil(6 * Math.random());
      heatindex = "" + cation + anion;
      let formheat = fheat[heatindex];
      if (formheat == 999) {
        begin();
      } else {
        if (anion == 3 || anion == 4) {
          acount = 3;
        } else {
          acount = 2;
        }
        if (cation <= 5) {
          pcharge = 1;
        } else {
          pcharge = 2;
        }
        if (anion > 4) {
          acharge = 2;
        } else {
          acharge = 1;
        }
        if (pcharge === acharge) {
          formula = cdataset[cation]["sym"] + adataset[anion]["sym"];
          lattice =
            cdataset[cation]["sym2"] +
            "+" +
            adataset[anion]["sym2"] +
            "=>" +
            formula +
            "(s)";
          frxn =
            cdataset[cation]["sym3"] +
            "+1/2" +
            adataset[anion]["sym3"] +
            "=>" +
            formula +
            "(s)";
          if (anion == 6) {
            frxn =
              cdataset[cation]["sym3"] +
              "+" +
              adataset[anion]["sym3"] +
              "=>" +
              formula +
              "(s)";
          }
          lheat = getheat(1);
        }
        if (pcharge < acharge) {
          formula =
            cdataset[cation]["sym"] + "<sub>2</sub>" + adataset[anion]["sym"];
          lattice =
            "2" +
            cdataset[cation]["sym2"] +
            "+" +
            adataset[anion]["sym2"] +
            "=>" +
            formula +
            "(s)";
          frxn =
            "2" +
            cdataset[cation]["sym3"] +
            "+1/2" +
            adataset[anion]["sym3"] +
            "=>" +
            formula +
            "(s)";
          if (anion === 6) {
            frxn =
              "2" +
              cdataset[cation]["sym3"] +
              "+" +
              adataset[anion]["sym3"] +
              "=>" +
              formula +
              "(s)";
          }
          lheat = getheat(2);
        }
        if (pcharge > acharge) {
          formula =
            cdataset[cation]["sym"] + adataset[anion]["sym"] + "<sub>2</sub>";
          lattice =
            cdataset[cation]["sym2"] +
            "+ 2" +
            adataset[anion]["sym2"] +
            "=>" +
            formula +
            "(s)";
          frxn =
            cdataset[cation]["sym3"] +
            "+" +
            adataset[anion]["sym3"] +
            "=>" +
            formula +
            "(s)";
          lheat = getheat(3);
        }
        fillarray(cation, anion);
      }
    }
    function getheat(w) {
      catheat = 0;
      anheat = 0;
      for (j = 1; j <= 2; j++) {
        k = ceqset[cation]["p" + j];
        catheat = catheat + cdataset[k]["heat"];
      }
      if (anion === 6) {
        anheat =
          adataset[aeqset[anion]["p1"]]["heat"] +
          adataset[aeqset[anion]["p2"]]["heat"] +
          0.5 * adataset[aeqset[anion]["p3"]]["heat"];
      } else {
        anheat =
          0.5 * adataset[aeqset[anion]["p1"]]["heat"] +
          adataset[aeqset[anion]["p2"]]["heat"] +
          0.5 * adataset[aeqset[anion]["p3"]]["heat"];
      }
      if (w === 1) {
        lheat = catheat + anheat;
      }
      if (w === 2) {
        lheat = 2 * catheat + anheat;
      }
      if (w === 3) {
        lheat = catheat + 2 * anheat;
      }
      lheat = formheat - lheat;
      lheat = Math.round(lheat);
      return lheat;
    }
    function fillarray(cation, anion) {
      for (j = 1; j <= 2; j++) {
        k = ceqset[cation]["p" + j];
        rxn[j] = cdataset[k]["eqn"];
        hot[j] = cdataset[k]["heat"];
      }
      for (j = 3; j <= acount + 2; j++) {
        k = aeqset[anion]["p" + (j - 2)];
        rxn[j] = adataset[k]["eqn"];
        hot[j] = adataset[k]["heat"];
      }
      rxn[acount + 3] = lattice;
      hot[acount + 3] = lheat;
      rxn[acount + 4] = frxn;
      hot[acount + 4] = formheat;
      if (Math.random() > 0.2) {
        blank = acount + 3;
      } else {
        blank = Math.ceil((2 + acount) * Math.random());
      }
      theanswer = hot[blank];
      hot[blank] = elem;
      display();
    }
    function display() {
      let html = `<table class="eqn-table"><thead></thead><tbody>`;
      for (j = 1; j <= acount + 4; j++) {
        html += `<tr><td>${rxn[j]}</td><td class="right">H = </td><td>${hot[j]} <b>KJ</b></td></tr>`;
        // elects.document.writeln("<tr><td width=200>", rxn[j], "</td><td>H=</td>");
        // elects.document.writeln("<td>", hot[j], "<b>KJ</b></td></tr>");
      }
      html += `</tbody></table>`;
      $("#question").html(html);
      // html += `input.input-small(type="number" name="input" idx="0" onkeyup="window.cp.onAnswerChange(this)")`;
      // elects = window.open("", "elects", "scrollbars=yes,width=350,height=350");
      // elects.document.clear();
      // elects.document.writeln("<html>");
      // elects.document.writeln("<head><title>Haber Cycle</title>");
      // elects.document.writeln("</head>");
      // elects.document.writeln("<body bgcolor = FFFFFF>");
      // elects.document.writeln(formula, "<br><form><table>");
      // for (j = 1; j <= acount + 4; j++) {
      //   elects.document.writeln(
      //     "<tr><td width=200>",
      //     rxn[j],
      //     "</td><td>H=</td>"
      //   );
      //   elects.document.writeln("<td>", hot[j], "<b>KJ</b></td></tr>");
      // }
      // elects.document.writeln("</table>");
      // elects.document.writeln(
      //   "<input type=button value='Submit' onClick='opener.answer(this.form.ans.value)'></form>"
      // );
      // elects.document.writeln("</body>");
      // elects.document.writeln("</html>");
      // elects.document.close();
      // elects.document.forms[0].ans.focus();
      // elects.document.forms[0].ans.select();
    }
    // function answer(f) {
    //   if (tried == 1) {
    //     alert("You've already done this one. Get a new Problem!");
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if (theanswer == f) {
    //       document.forms[0].results.value = "correct";
    //       corrt++;
    //       document.forms[0].correct.value = corrt;
    //       tried = 1;
    //     } else {
    //       document.forms[0].results.value = "incorrect";
    //       tried = 2;
    //     }
    //   }
    // }
    //
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }
    //
    begin();

    const answerPayload = [
      {
        answer: theanswer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
