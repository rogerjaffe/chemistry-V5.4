(function (cp) {
  cp.generateNewQuestion = () => {
    let which = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(c1, c2, c3, c4, c5, c6, c7, c8, n) {
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
      this.c5 = c5;
      this.c6 = c6;
      this.c7 = c7;
      this.c8 = c8;
      this.n = n;
    }
    let ansr = [];
    // let ansr = new MakeArray(8);
    let rxn = new MakeArray(33);
    let coeffs = new MakeArray(33);
    rxn[1] = new equation(
      "H<sub>2</sub>S + ",
      "MnO<sub>4</sub><sup>-</sup> + ",
      "H<sup>+</sup> => ",
      "S + ",
      "Mn<sup>2</sup><sup>+</sup>+ ",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[1] = new equation(5, 2, 6, 5, 2, 8, "", "");
    rxn[2] = new equation(
      "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> +",
      "Br<sup>-</sup> + ",
      "H<sup>+</sup> => ",
      "Cr<sup>3+</sup> +",
      "Br<sub>2</sub> + ",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[2] = new equation(1, 6, 14, 2, 3, 7, "", "");
    rxn[3] = new equation(
      "MnO<sub>4</sub><sup>-</sup> +",
      "AsO<sub>3</sub><sup>3-</sup> + ",
      "H<sub>2</sub>O =>",
      "MnO<sub>2</sub> + ",
      "AsO<sub>4</sub><sup>3-</sup> +",
      "OH<sup>-</sup>",
      "",
      "",
      6
    );
    coeffs[3] = new equation(2, 3, 1, 2, 3, 2, "", "");
    rxn[4] = new equation(
      "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> +",
      "C<sub>2</sub>H<sub>3</sub>OCl + ",
      "H<sup>+</sup> =>",
      "Cr<sup>3+</sup> + ",
      "CO<sub>2</sub> + ",
      "Cl<sub>2</sub> +",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[4] = new equation(3, 2, 24, 6, 4, 1, 15, "");
    rxn[5] = new equation(
      "Cu + ",
      "HNO<sub>3</sub> <=>",
      "Cu(NO<sub>3</sub>)<sub>2</sub> + ",
      "NO + ",
      "H<sub>2</sub>O",
      "",
      "",
      "",
      5
    );
    coeffs[5] = new equation(3, 8, 3, 2, 4, "", "", "");
    rxn[6] = new equation(
      "Zn + ",
      "CuSO<sub>4</sub> =>",
      "ZnSO<sub>4</sub> +",
      " Cu",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[6] = new equation(1, 1, 1, 1, "", "", "", "");
    rxn[7] = new equation(
      "Zn + ",
      "H<sub>2</sub>SO<sub>4</sub> =>",
      "ZnSO<sub>4</sub> + ",
      "H<sub>2</sub>",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[7] = new equation(1, 1, 1, 1, "", "", "", "");
    rxn[8] = new equation(
      "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> +",
      "KI + ",
      "H<sub>2</sub>SO<sub>4</sub> =>",
      "Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + ",
      "I<sub>2</sub>+ ",
      "K<sub>2</sub>SO<sub>4</sub> + ",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[8] = new equation(1, 6, 7, 1, 3, 4, 7, "");
    rxn[9] = new equation(
      "KMnO<sub>4</sub> + ",
      "KCl +",
      "H<sub>2</sub>SO<sub>4</sub> => ",
      "MnSO<sub>4</sub> + ",
      "Cl<sub>2</sub>+ ",
      "K<sub>2</sub>SO<sub>4</sub> +",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[9] = new equation(2, 10, 8, 2, 5, 6, 8, "");
    rxn[10] = new equation(
      "KClO<sub>3</sub> + ",
      "KBr +",
      "H<sub>2</sub>SO<sub>4</sub> => ",
      "KCl + ",
      " Br<sub>2</sub> +",
      "K<sub>2</sub>SO<sub>4</sub> + ",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[10] = new equation(1, 6, 3, 1, 3, 3, 3, "");
    rxn[11] = new equation(
      "KMnO<sub>4</sub> +",
      "H<sub>2</sub>O<sub>2</sub> + ",
      "H<sub>2</sub>SO<sub>4</sub> =>",
      "MnSO<sub>4</sub> + ",
      "O<sub>2</sub> +",
      "K<sub>2</sub>SO<sub>4</sub> + ",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[11] = new equation(2, 1, 3, 2, 3, 1, 4, "");
    rxn[12] = new equation(
      "MnO<sub>2</sub> + ",
      "KCl +",
      "H<sub>2</sub>SO<sub>4</sub> => ",
      "MnSO<sub>4</sub> +",
      "Cl<sub>2</sub> + ",
      "K<sub>2</sub>SO<sub>4</sub> +",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[12] = new equation(1, 2, 2, 1, 1, 1, 2, "");
    rxn[13] = new equation(
      "Ag + ",
      "HNO<sub>3</sub> =>",
      "AgNO<sub>3</sub> + ",
      "NO + ",
      "H<sub>2</sub>O",
      "",
      "",
      "",
      5
    );
    coeffs[13] = new equation(3, 4, 3, 1, 2, "", "", "");
    rxn[14] = new equation(
      "PbO<sub>2</sub> + ",
      "SnSO<sub>4</sub> +",
      "H<sub>2</sub>SO<sub>4</sub> => ",
      "PbSO<sub>4</sub> +",
      "Sn(SO<sub>4</sub>)<sub>2</sub> + ",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[14] = new equation(1, 1, 2, 1, 1, 2, "", "");
    rxn[15] = new equation(
      "KMnO<sub>4</sub> + ",
      "H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + ",
      "H<sub>2</sub>SO<sub>4</sub> => ",
      " MnSO<sub>4</sub> +",
      "CO<sub>2</sub> + ",
      " K<sub>2</sub>SO<sub>4</sub> + ",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[15] = new equation(2, 5, 3, 2, 10, 1, 8, "");
    rxn[16] = new equation(
      "H<sub>2</sub>O<sub>2</sub> +",
      "HNO<sub>2</sub> => ",
      "HNO<sub>3</sub> + ",
      " H<sub>2</sub>O",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[16] = new equation(1, 1, 1, 1, "", "", "", "");
    rxn[17] = new equation(
      "Fe + ",
      "CuSO<sub>4</sub> =>",
      "FeSO<sub>4</sub> + ",
      "Cu",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[17] = new equation(1, 1, 1, 1, "", "", "", "");
    rxn[18] = new equation(
      "Fe(SO<sub>4</sub>)<sub>3</sub> + ",
      "KI =>",
      "FeSO<sub>4</sub> + ",
      " I<sub>2</sub> +",
      "K<sub>2</sub>SO<sub>4</sub>",
      "",
      "",
      "",
      5
    );
    coeffs[18] = new equation(1, 4, 1, 2, 2, "", "", "");
    rxn[19] = new equation(
      "KClO<sub>4</sub> +",
      "H<sub>3</sub>ASO<sub>3</sub> => ",
      "KCl +",
      "H<sub>3</sub>AsO<sub>4</sub>",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[19] = new equation(1, 4, 1, 4, "", "", "", "");
    rxn[20] = new equation(
      "H<sub>2</sub>S + ",
      "KClO => ",
      "S + ",
      "KCl +",
      "H<sub>2</sub>O",
      "",
      "",
      "",
      5
    );
    coeffs[20] = new equation(1, 1, 1, 1, 1, "", "", "");
    rxn[21] = new equation(
      "CH<sub>2</sub>O + ",
      "Ag<sub>2</sub>O +",
      "OH<sup>-</sup> => ",
      "Ag + ",
      "HCO<sub>2</sub><sup>-</sup> +",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[21] = new equation(1, 1, 1, 2, 1, 1, "", "");
    rxn[22] = new equation(
      "C<sub>2</sub>H<sub>2</sub> + ",
      "MnO<sub>4</sub><sup>-</sup> + ",
      "H<sup>+</sup> =>",
      "CO<sub>2</sub> + ",
      "Mn<sup>2+</sup> +",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[22] = new equation(1, 2, 6, 2, 2, 4, "", "");
    rxn[23] = new equation(
      "C<sub>2</sub>H<sub>3</sub>OCl +",
      "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + ",
      "H<sup>+</sup> =>",
      "CO<sub>2</sub> + ",
      "Cl<sub>2</sub> + ",
      "Cr<sup>3+</sup> +",
      "H<sub>2</sub>O",
      "",
      7
    );
    coeffs[23] = new equation(2, 3, 24, 4, 1, 6, 15, "");
    rxn[24] = new equation(
      "Ag<sup>+</sup> + ",
      "AsH<sub>3</sub> +",
      "H<sub>2</sub>O => ",
      "Ag +",
      " H<sub>3</sub>AsO<sub>3</sub> +",
      "H<sup>+</sup>",
      "",
      "",
      6
    );
    coeffs[24] = new equation(1, 1, 3, 1, 1, 6, "", "");
    rxn[25] = new equation(
      "OH<sup>-</sup> + ",
      "CN<sup>-</sup> +",
      "Fe(CN)<sub>6</sub><sup>3-</sup> => ",
      "CNO<sup>-</sup> +",
      "Fe(CN)<sub>6</sub><sup>4-</sup> + ",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[25] = new equation(2, 1, 1, 1, 1, 1, "", "");
    rxn[26] = new equation(
      "C<sub>2</sub>H<sub>4</sub>O +",
      "NO<sub>3</sub><sup>-</sup> +",
      "H<sup>+</sup> => ",
      "NO +",
      "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> +",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[26] = new equation(1, 1, 2, 1, 1, 1, "", "");
    rxn[27] = new equation(
      "Zn + ",
      "H<sup>+</sup> + ",
      "NO<sub>3</sub>=> ",
      "Zn<sup>2+</sup> + ",
      "NH<sub>4</sub><sup>+</sup> +",
      "H<sub>2</sub>O",
      "",
      "",
      6
    );
    coeffs[27] = new equation(1, 10, 1, 1, 1, 3, "", "");
    rxn[28] = new equation(
      "S<sub>2</sub>O<sub>3</sub><sup>2-</sup> +",
      "I<sub>2</sub> =>",
      "S<sub>4</sub>O<sub>6</sub><sup>2</sup><sup>-</sup> +",
      "I<sup>-</sup>",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[28] = new equation(2, 1, 1, 2, "", "", "", "");
    rxn[29] = new equation(
      "IO<sub>3</sub><sup>-</sup> + ",
      "I<sup>-</sup> + ",
      "H<sup>+</sup> => ",
      "I<sub>2</sub>+ ",
      "H<sub>2</sub>O",
      "",
      "",
      "",
      5
    );
    coeffs[29] = new equation(1, 1, 6, 1, 3, "", "", "");
    rxn[30] = new equation(
      "Cu + ",
      "H<sub>2</sub>SO<sub>4</sub> =>",
      "CuSO<sub>4</sub> + ",
      "SO<sub>2</sub> + ",
      "H<sub>2</sub>O",
      "",
      "",
      "",
      5
    );
    coeffs[30] = new equation(1, 2, 1, 1, 2, "", "", "");
    rxn[31] = new equation(
      "Zn + ",
      "Fe<sup>3+</sup> =>",
      "Fe<sup>2+</sup> + ",
      "Zn<sup>2+</sup>",
      "",
      "",
      "",
      "",
      4
    );
    coeffs[31] = new equation(1, 2, 2, 1, "", "", "", "");
    rxn[32] = new equation(
      "ClO<sup>-</sup> => ",
      "Cl<sup>-</sup> + ",
      "ClO<sub>3</sub>",
      "",
      "",
      "",
      "",
      "",
      3
    );
    coeffs[32] = new equation(3, 2, 1, "", "", "", "", "");

    for (let i = 1; i < 32; i++) {
      const props = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
      let divider = 0;
      const r = props.reduce((r, prop) => {
        let t = rxn[i][prop];
        if (t.indexOf("=>")) {
          divider = i;
        }
        t = t.replace(/\+ /g, "");
        console.log(t);
        r.push(t);
        return r;
      }, []);
    }

    function start() {
      i = Math.trunc(Math.random() * 32) + 1;
      if (coeffs[i]["c1"] !== "")
        ansr.push({ answer: coeffs[i]["c1"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c2"] !== "")
        ansr.push({ answer: coeffs[i]["c2"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c3"] !== "")
        ansr.push({ answer: coeffs[i]["c3"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c4"] !== "")
        ansr.push({ answer: coeffs[i]["c4"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c5"] !== "")
        ansr.push({ answer: coeffs[i]["c5"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c6"] !== "")
        ansr.push({ answer: coeffs[i]["c6"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c7"] !== "")
        ansr.push({ answer: coeffs[i]["c7"], tolerance: 0.05, type: "number" });
      if (coeffs[i]["c8"] !== "")
        ansr.push({ answer: coeffs[i]["c8"], tolerance: 0.05, type: "number" });
      // ansr[0] = { answer: coeffs[i]["c1"], tolerance: 0.05, type: "number" };
      // ansr[1] = { answer: coeffs[i]["c2"], tolerance: 0.05, type: "number" };
      // ansr[2] = { answer: coeffs[i]["c3"], tolerance: 0.05, type: "number" };
      // ansr[3] = { answer: coeffs[i]["c4"], tolerance: 0.05, type: "number" };
      // ansr[4] = { answer: coeffs[i]["c5"], tolerance: 0.05, type: "number" };
      // ansr[5] = { answer: coeffs[i]["c6"], tolerance: 0.05, type: "number" };
      // ansr[6] = { answer: coeffs[i]["c7"], tolerance: 0.05, type: "number" };
      // ansr[7] = { answer: coeffs[i]["c8"], tolerance: 0.05, type: "number" };
      // ansr = ansr.filter((a) => a.answer !== "");
      let count = rxn[i]["n"];
      tryit(i, count);
    }
    function tryit(which, count) {
      let html = "";
      // parent.frames[0].document.clear();
      // parent.frames[0].document.open();
      // parent.frames[0].document.writeln("<html>");
      // parent.frames[0].document.writeln("<head>");
      // parent.frames[0].document.writeln("</head>");
      // parent.frames[0].document.writeln("<body bgcolor = FFFFFF ");
      // parent.frames[0].document.writeln("<font size=+1><b>");
      // parent.frames[0].document.writeln("<form>");
      // parent.frames[0].document.writeln("<table>");
      for (var i = 0; i < count; i++) {
        z = i + 1;
        html += `<input type="number" name="input" idx=${i} class="single-digit-input" onkeyup="window.cp.onAnswerChange(this)" />`;
        html += `<span class="parameter">${rxn[which]["c" + z]}`;
        // parent.frames[0].document.write("<input type=text size=2>");
        // parent.frames[0].document.write(rxn[which]["c" + z]);
      }
      $("#question").html(html);
      // parent.frames[0].document.writeln("</table>");
      // parent.frames[0].document.writeln("</form>");
      // parent.frames[0].document.forms[0].elements[0].focus();
      // parent.frames[0].document.forms[0].elements[0].select();
      // parent.frames[0].document.writeln("<br>");
      // parent.frames[0].document.writeln("</font>");
      // parent.frames[0].document.close();
    }
    // function answer() {
    //   if (tried == 1) {
    //     alert(
    //       "Sorry, you've already submitted this problem! We'll get you a new one!"
    //     );
    //     start();
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     var tally = 0;
    //     for (var f = 0; f < count; f++) {
    //       if (parent.frames[0].document.forms[0].elements[f].value == ansr[f]) {
    //         tally++;
    //       }
    //     }
    //     if (tally == count) {
    //       document.forms[0].results.value = "correct";
    //       corrt++;
    //       tried = 1;
    //       document.forms[0].correct.value = corrt;
    //     } else {
    //       tried = 2;
    //       document.forms[0].results.value = "incorrect";
    //     }
    //   }
    // }
    // function timer(z) {
    //   tt = z;
    //   var b = Math.floor(tt / 60);
    //   var j = tt % 60;
    //   if (j < 10) {
    //     c = "0";
    //   } else {
    //     c = "";
    //   }
    //   howlong = b + ":" + c + j;
    //   running = setTimeout("timer(tt+1)", 1000);
    // }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }

    // const equations = [
    //   {
    //     left: [
    //       { formula: "H<sub>2</sub>S", coefficient: 5 },
    //       { formula: "MnO<sub>4</sub><sup>-</sup>", coefficient: 2 },
    //       { formula: "H<sup>+</sup>", coefficient: 6 },
    //     ],
    //     right: [
    //       { formula: "S", coefficient: 5 },
    //       { formula: "Mn<sup>2</sup><sup>+</sup>", coefficient: 2 },
    //       { formula: "H<sub>2</sub>O", coefficient: 8 },
    //     ],
    //   },
    //   {
    //     left: [
    //       {
    //         formula: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",
    //         coefficient: 1,
    //       },
    //       { formula: "Br<sup>-</sup>", coefficient: 6 },
    //       { formula: "H<sup>+</sup>", coefficient: 14 },
    //     ],
    //     right: [
    //       { formula: "Cr<sup>3+</sup>", coefficient: 2 },
    //       { formula: "Br<sub>2</sub>", coefficient: 3 },
    //       { formula: "H<sub>2</sub>O", coefficient: 7 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "MnO<sub>4</sub><sup>-</sup>", coefficient: 2 },
    //       { formula: "AsO<sub>3</sub><sup>3-</sup>", coefficient: 3 },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "MnO<sub>2</sub>", coefficient: 2 },
    //       { formula: "AsO<sub>4</sub><sup>3-</sup>", coefficient: 3 },
    //       { formula: "OH<sup>-</sup>", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       {
    //         formula: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",
    //         coefficient: 3,
    //       },
    //       { formula: "C<sub>2</sub>H<sub>3</sub>OCl", coefficient: 2 },
    //       { formula: "H<sup>+</sup>", coefficient: 24 },
    //     ],
    //     right: [
    //       { formula: "Cr<sup>3+</sup>", coefficient: 6 },
    //       { formula: "CO<sub>2</sub>", coefficient: 4 },
    //       { formula: "Cl<sub>2</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 15 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Cu", coefficient: 3 },
    //       { formula: "HNO<sub>3</sub><", coefficient: 8 },
    //     ],
    //     right: [
    //       { formula: "Cu(NO<sub>3</sub>)<sub>2</sub>", coefficient: 3 },
    //       { formula: "NO", coefficient: 2 },
    //       { formula: "H<sub>2</sub>O", coefficient: 4 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Zn", coefficient: 1 },
    //       { formula: "CuSO<sub>4</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "ZnSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "Cu", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Zn", coefficient: 1 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "ZnSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       {
    //         formula: "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>",
    //         coefficient: 1,
    //       },
    //       { formula: "KI", coefficient: 6 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 7 },
    //     ],
    //     right: [
    //       {
    //         formula: "Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>",
    //         coefficient: 1,
    //       },
    //       { formula: "I<sub>2</sub>", coefficient: 3 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 4 },
    //       { formula: "H<sub>2</sub>O", coefficient: 7 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "KMnO<sub>4</sub>", coefficient: 2 },
    //       { formula: "KCl", coefficient: 10 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 8 },
    //     ],
    //     right: [
    //       { formula: "MnSO<sub>4</sub>", coefficient: 2 },
    //       { formula: "Cl<sub>2</sub>", coefficient: 5 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 6 },
    //       { formula: "H<sub>2</sub>O", coefficient: 8 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "KClO<sub>3</sub>", coefficient: 1 },
    //       { formula: "KBr", coefficient: 6 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 3 },
    //     ],
    //     right: [
    //       { formula: "KCl", coefficient: 1 },
    //       { formula: "Br<sub>2</sub>", coefficient: 3 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 3 },
    //       { formula: "H<sub>2</sub>O", coefficient: 3 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "KMnO<sub>4</sub>", coefficient: 2 },
    //       { formula: "H<sub>2</sub>O<sub>2</sub>", coefficient: 5 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 3 },
    //     ],
    //     right: [
    //       { formula: "MnSO<sub>4</sub>", coefficient: 2 },
    //       { formula: "O<sub>2</sub>", coefficient: 5 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 8 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "MnO<sub>2</sub>", coefficient: 1 },
    //       { formula: "KCl", coefficient: 2 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "MnSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "Cl<sub>2</sub>", coefficient: 1 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Ag", coefficient: 3 },
    //       { formula: "HNO<sub>3</sub>", coefficient: 4 },
    //     ],
    //     right: [
    //       { formula: "AgNO<sub>3</sub>", coefficient: 3 },
    //       { formula: "NO", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "PbO<sub>2</sub>", coefficient: 1 },
    //       { formula: "SnSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "PbSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "Sn(SO<sub>4</sub>)<sub>2</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "KMnO<sub>4</sub>", coefficient: 2 },
    //       {
    //         formula: "H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>",
    //         coefficient: 5,
    //       },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 3 },
    //     ],
    //     right: [
    //       { formula: "MnSO<sub>4</sub>", coefficient: 2 },
    //       { formula: "CO<sub>2</sub>", coefficient: 10 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 8 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "H<sub>2</sub>O<sub>2</sub>", coefficient: 1 },
    //       { formula: "HNO<sub>2</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "HNO<sub>3</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Fe", coefficient: 1 },
    //       { formula: "CuSO<sub>4</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "FeSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "Cu", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Fe(SO<sub>4</sub>)<sub>3</sub>", coefficient: 2 },
    //       { formula: "KI", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "FeSO<sub>4</sub>", coefficient: 2 },
    //       { formula: "I<sub>2</sub>", coefficient: 1 },
    //       { formula: "K<sub>2</sub>SO<sub>4</sub>", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "KClO<sub>4</sub>", coefficient: 1 },
    //       { formula: "H<sub>3</sub>ASO<sub>3</sub>", coefficient: 4 },
    //     ],
    //     right: [
    //       { formula: "KCl", coefficient: 1 },
    //       { formula: "H<sub>3</sub>AsO<sub>4</sub>", coefficient: 4 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "H<sub>2</sub>S", coefficient: 1 },
    //       { formula: "KClO", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "S", coefficient: 1 },
    //       { formula: "KCl", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "CH<sub>2</sub>O", coefficient: 1 },
    //       { formula: "Ag<sub>2</sub>O", coefficient: 1 },
    //       { formula: "OH<sup>-</sup>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "Ag", coefficient: 2 },
    //       { formula: "HCO<sub>2</sub><sup>-</sup>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "C<sub>2</sub>H<sub>2</sub>", coefficient: 1 },
    //       { formula: "MnO<sub>4</sub><sup>-</sup>", coefficient: 2 },
    //       { formula: "H<sup>+</sup>", coefficient: 6 },
    //     ],
    //     right: [
    //       { formula: "CO<sub>2</sub>", coefficient: 2 },
    //       { formula: "Mn<sub>2</sub><sup>+</sup>", coefficient: 2 },
    //       { formula: "H<sub>2</sub>O", coefficient: 4 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "C<sub>2</sub>H<sub>3</sub>OCl", coefficient: 2 },
    //       {
    //         formula: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",
    //         coefficient: 3,
    //       },
    //       { formula: "H<sup>+</sup>", coefficient: 24 },
    //     ],
    //     right: [
    //       { formula: "CO<sub>2</sub>", coefficient: 4 },
    //       { formula: "Cl<sub>2</sub>", coefficient: 1 },
    //       { formula: "Cr<sup>3+</sup>", coefficient: 6 },
    //       { formula: "H<sub>2</sub>O", coefficient: 15 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Ag<sup>+</sup>", coefficient: 6 },
    //       { formula: "AsH<sub>3</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 3 },
    //     ],
    //     right: [
    //       { formula: "Ag", coefficient: 6 },
    //       { formula: "H<sub>3</sub>AgO<sub>3</sub>", coefficient: 1 },
    //       { formula: "H<sup>+</sup>", coefficient: 6 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "OH<sup>-</sup>", coefficient: 2 },
    //       { formula: "CN<sup>-</sup>", coefficient: 1 },
    //       { formula: "Fe(CN)<sub>6</sub><sup>3-</sup>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "CNO<sup>-</sup>", coefficient: 1 },
    //       { formula: "Fe(CN)<sub>6</sub><sup>4-</sup>", coefficient: 2 },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "C<sub>2</sub>H<sub>4</sub>O", coefficient: 3 },
    //       { formula: "NO<sub>3</sub><sup>-</sup>", coefficient: 2 },
    //       { formula: "H<sup>+</sup>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "NO", coefficient: 2 },
    //       {
    //         formula: "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>",
    //         coefficient: 3,
    //       },
    //       { formula: "H<sub>2</sub>O", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Zn", coefficient: 4 },
    //       { formula: "H<sup>+</sup>", coefficient: 10 },
    //       { formula: "NO<sub>3</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       { formula: "Zn<sup>2+</sup>", coefficient: 4 },
    //       { formula: "NH<sub>4</sub><sup>+</sup>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 3 },
    //     ],
    //   },
    //   {
    //     left: [
    //       {
    //         formula: "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",
    //         coefficient: 2,
    //       },
    //       { formula: "I<sub>2</sub>", coefficient: 1 },
    //     ],
    //     right: [
    //       {
    //         formula: "S<sub>4</sub>O<sub>6</sub><sup>2</sup><sup>-</sup>",
    //         coefficient: 1,
    //       },
    //       { formula: "I<sup>-</sup>", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "IO<sub>3</sub><sup>-</sup>", coefficient: 1 },
    //       { formula: "I<sup>-</sup>", coefficient: 5 },
    //       { formula: "H<sup>+</sup>", coefficient: 6 },
    //     ],
    //     right: [
    //       { formula: "I<sub>2</sub>", coefficient: 3 },
    //       { formula: "H<sub>2</sub>O", coefficient: 3 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Cu", coefficient: 1 },
    //       { formula: "H<sub>2</sub>SO<sub>4</sub>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "CuSO<sub>4</sub>", coefficient: 1 },
    //       { formula: "SO<sub>2</sub>", coefficient: 1 },
    //       { formula: "H<sub>2</sub>O", coefficient: 2 },
    //     ],
    //   },
    //   {
    //     left: [
    //       { formula: "Zn", coefficient: 1 },
    //       { formula: "Fe<sup>3+</sup>", coefficient: 2 },
    //     ],
    //     right: [
    //       { formula: "Fe<sup>2+</sup>", coefficient: 2 },
    //       { formula: "Zn<sup>2+</sup>", coefficient: 1 },
    //     ],
    //   },
    //   {
    //     left: [{ formula: "ClO<sup>-</sup>", coefficient: 3 }],
    //     right: [
    //       { formula: "Cl<sup>-</sup>", coefficient: 2 },
    //       { formula: "ClO<sub>3</sub>", coefficient: 1 },
    //     ],
    //   },
    // ];
    // const equation = equations[cp.Random.int(0, equations.length - 1)];
    // const size = equation.left.length + equation.right.length;
    // const type = "number";
    // const className = "single-digit-input";
    // const inputFactory = (idx) =>
    //   `<input type="${type}" name="input" idx="${idx}" class="${className}" onkeyup="window.cp.onAnswerChange(this)" />`;
    // let answers = [];
    // equation.left = equation.left.map((e, idx) => {
    //   answers.push({ answer: e.coefficient, type: "number" });
    //   return inputFactory(idx) + `<span class="parameter">${e.formula}</span>`;
    // });
    // equation.right = equation.right.map((e, idx) => {
    //   answers.push({ answer: e.coefficient, type: "number" });
    //   return (
    //     inputFactory(equation.left.length + idx) +
    //     `<span class="parameter">${e.formula}</span>`
    //   );
    // });
    // let html;
    // if (size >= 5) {
    //   html =
    //     `<div class="top-row">` +
    //     equation.left.join(" + ") +
    //     ' =></div><div class="bottom-row">' +
    //     equation.right.join(" + ") +
    //     "</div>";
    // } else {
    //   html = equation.left.join(" + ") + " => " + equation.right.join(" + ");
    // }

    start();
    // $("#question").html(html);
    window.cp.setAnswerPayload(ansr);
    // window.cp.setAnswerPayload(answers);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
