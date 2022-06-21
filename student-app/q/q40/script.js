(function (cp) {
  cp.generateNewQuestion = () => {
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function redox(first, second, pot, num, m1, m2) {
      this.first = first;
      this.second = second;
      this.pot = pot;
      this.num = num;
      this.m1 = m1;
      this.m2 = m2;
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }

    let quest = new question(
      "If the process below is driven electrolytically, how many ",
      " of material will be produced at the ",
      " by a current of ",
      " amps flowing for "
    );

    let halfrxn = new MakeArray(100);
    halfrxn[1] = new redox("Li<sup>+</sup>(aq)", "Li(s)", -3.04, 1, 6.94, 6.94);
    halfrxn[2] = new redox("K<sup>+</sup>(aq)", "K(s)", -2.92, 1, 39.1, 39.1);
    halfrxn[3] = new redox(
      "Ca<sup>2+</sup>(aq)",
      "Ca(s)",
      -2.76,
      2,
      40.1,
      40.1
    );
    halfrxn[4] = new redox("Na<sup>+</sup>(aq)", "Na(s)", -2.71, 1, 23, 23);
    halfrxn[5] = new redox(
      "Mg<sup>2+</sup>(aq)",
      "Mg(s)",
      -2.38,
      2,
      24.3,
      24.3
    );
    halfrxn[6] = new redox("Al<sup>3+</sup>(aq)", "Al(s)", -1.66, 3, 27, 27);
    halfrxn[7] = new redox(
      "MnO<sub>4</sub><sup>-</sup>(aq)",
      "Mn<sup>2+</sup>(aq)",
      1.49,
      5,
      118.9,
      54.9
    );
    halfrxn[8] = new redox(
      "Zn<sup>2+</sup>(aq)",
      "Zn(s)",
      -0.76,
      2,
      65.4,
      65.4
    );
    halfrxn[9] = new redox(
      "Cd<sup>2+</sup>(aq)",
      "Cd(s)",
      -0.4,
      2,
      112.4,
      112.4
    );
    halfrxn[10] = new redox(
      "Ni<sup>2+</sup>(aq)",
      "Ni(s)",
      -0.23,
      2,
      58.7,
      58.7
    );
    halfrxn[11] = new redox(
      "Sn<sup>2+</sup>(aq)",
      "Sn(s)",
      -0.14,
      2,
      118.7,
      118.7
    );
    halfrxn[12] = new redox(
      "Pb<sup>2+</sup>(aq)",
      "Pb(s)",
      -0.13,
      2,
      207.2,
      207.2
    );
    halfrxn[13] = new redox(
      "Fe<sup>3+</sup>(aq)",
      "Fe(s)",
      -0.04,
      3,
      55.85,
      55.85
    );
    halfrxn[14] = new redox(
      "Fe<sup>2+</sup>(aq)",
      "Fe(s)",
      -0.41,
      2,
      55.85,
      55.85
    );
    halfrxn[15] = new redox(
      "AgBr(s)",
      "Ag  +  Br<SUP>-</sup>(aq) ",
      0.071,
      1,
      187.8,
      187.8
    );
    halfrxn[16] = new redox(
      "Sn<sup>4+</sup>(aq)",
      "Sn<sup>2+</sup>(aq)",
      0.15,
      2,
      118.7,
      118.7
    );
    halfrxn[17] = new redox(
      "Cu<sup>2+</sup>(aq)",
      "Cu<sup>+</sup>(aq)",
      0.16,
      1,
      63.55,
      63.55
    );
    halfrxn[18] = new redox(
      "AgCl(s)",
      "Ag  +  Cl<sup>-</sup>(aq)",
      0.22,
      1,
      143.32,
      143.32
    );
    halfrxn[19] = new redox(
      "Cu<SUP>2+</sup>(aq)",
      "Cu(s)",
      0.34,
      2,
      63.55,
      63.55
    );
    halfrxn[20] = new redox("S(s)", "H<SUB>2</SUB>S(g)", 0.14, 2, 32, 34);
    halfrxn[21] = new redox(
      "Cu<sup>+</sup>(aq)",
      "Cu(s)",
      0.52,
      1,
      63.55,
      63.55
    );
    halfrxn[22] = new redox(
      "Fe<sup>3+</sup>(aq)",
      "Fe<SUP>2+</sup>(aq)",
      0.77,
      1,
      55.85,
      55.85
    );
    halfrxn[23] = new redox(
      "Ag<sup>+</sup>(aq)",
      "Ag(s)",
      0.8,
      1,
      107.9,
      107.9
    );
    halfrxn[24] = new redox(
      "Co<sup>3+</sup>(aq)",
      "Co<SUP>2+</sup>(aq)",
      1.82,
      1,
      58.93,
      58.93
    );
    halfrxn[25] = new redox(
      "La<SUP>3+</sup>(aq)",
      "La(s)",
      -2.38,
      3,
      138.9,
      138.9
    );
    halfrxn[26] = new redox("U<SUP>3+</sup>(aq)", "U(s)", -1.66, 3, 238, 238);
    halfrxn[27] = new redox("Cr<SUP>2+</sup>(aq)", "Cr(s)", -0.9, 2, 52, 52);
    halfrxn[28] = new redox(
      "Ce<sup>4+</sup>(aq)",
      "Ce<SUP>3+</sup>(aq)",
      1.44,
      1,
      140.1,
      140.1
    );
    halfrxn[29] = new redox(
      "Hg<sup>2+</sup>(aq)",
      "Hg(l)",
      0.85,
      2,
      200.6,
      200.6
    );
    halfrxn[30] = new redox(
      "ClO<SUB>2</SUB><sup>-</sup>(aq)",
      "ClO<SUp>-</sup>(aq)",
      -0.13,
      2,
      67.45,
      51.45
    );
    halfrxn[31] = new redox(
      "ClO<SUB>4</SUB><SUP>-</sup>(aq)",
      "Cl<SUP>-</sup>(aq)",
      1.37,
      8,
      99.45,
      35.45
    );
    halfrxn[32] = new redox(
      "Ag<SUP>2+</sup>(aq)",
      "Ag<SUP>+</sup>(aq)",
      1.98,
      1,
      108.7,
      108.7
    );
    halfrxn[33] = new redox(
      "Cu<SUP>2+</sup>(aq)  +  I<SUP>-</sup>(aq)",
      "CuI(s)",
      0.86,
      1,
      190.5,
      190.5
    );
    halfrxn[34] = new redox(
      "ClO<SUB>3</SUB><SUP>-</sup>(aq)",
      "ClO<SUB>2</SUB>(g)",
      1.175,
      1,
      83.45,
      67.45
    );
    halfrxn[35] = new redox(
      "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
      "MnO<SUB>4</SUB><SUP>2-</sup>(aq)",
      0.56,
      1,
      118.9,
      118.9
    );
    halfrxn[36] = new redox(
      "MnO<SUB>2</SUB>(s)",
      "Mn<SUP>2+</sup>(aq)",
      1.23,
      2,
      86.94,
      54.94
    );
    halfrxn[37] = new redox(
      "PbO<SUB>2</SUB>(s)",
      "PbO(s)",
      0.28,
      2,
      239.2,
      223.2
    );
    halfrxn[38] = new redox(
      "Au<SUP>3+</sup>(aq)",
      "Au<SUP>+</sup>(aq)",
      1.36,
      2,
      197,
      197
    );
    halfrxn[39] = new redox(
      "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
      "MnO<SUb>2</SUb>(s)",
      1.7,
      3,
      118.9,
      86.94
    );
    halfrxn[40] = new redox(
      "H<SUB>2</SUB>SO<SUB>3</SUB>(aq)",
      "S(s)",
      0.45,
      4,
      82,
      32
    );
    halfrxn[41] = new redox(
      "HAsO<SUB>2</SUB>(aq)",
      "As(s)",
      0.24,
      3,
      107.9,
      74.9
    );
    halfrxn[42] = new redox(
      "Sr<SUP>2+</sup>(aq)",
      "Sr(s)",
      -2.89,
      2,
      87.6,
      87.6
    );
    halfrxn[43] = new redox(
      "Ti<SUP>2+</sup>(aq)",
      "Ti(s)",
      -1.63,
      2,
      47.9,
      87.6
    );
    halfrxn[44] = new redox(
      "V<SUP>3+</sup>(aq)",
      "V<SUP>2+</sup>(aq)",
      -0.255,
      1,
      50.94,
      50.94
    );
    halfrxn[45] = new redox(
      "In<SUP>3+</sup>(aq)",
      "In(s)",
      -0.338,
      3,
      114.8,
      114.8
    );
    halfrxn[46] = new redox(
      "Rb<SUP>+</sup>(aq)",
      "Rb(s)",
      -2.924,
      1,
      85.5,
      85.5
    );

    function choose() {
      //first get current and time
      var secs = Math.round(250 * Math.random()) * 100;
      var mintes = Math.round((10 * secs) / 60) / 10;
      var hrs = Math.round((10 * secs) / 3600) / 10;
      var current = Math.round(100 * Math.pow(100, Math.random())) / 100;
      var faradays = (secs * current) / 9.65e4;
      let g, h, i, j, z, u, tme, t;
      //then get reactions
      g = Math.round(0.5 + 46 * Math.random());
      let oxy1 = halfrxn[g]["first"];
      let red1 = halfrxn[g]["second"];
      for (let i = 1; i < 100; i++) {
        h = Math.round(0.5 + 35 * Math.random());
        if (h !== g) {
          break;
        }
      }
      let oxy2 = halfrxn[h]["second"];
      let red2 = halfrxn[h]["first"];
      //calculate moles and grams of all materials
      let molesoxy1 = faradays / halfrxn[g]["num"];
      let molesred1 = faradays / halfrxn[g]["num"];
      let massoxy1 = molesoxy1 * halfrxn[g]["m1"];
      let massred1 = molesred1 * halfrxn[g]["m2"];
      let molesoxy2 = faradays / halfrxn[h]["num"];
      let molesred2 = faradays / halfrxn[h]["num"];
      let massoxy2 = molesoxy2 * halfrxn[h]["m1"];
      let massred2 = molesred2 * halfrxn[h]["m2"];
      //get the voltage
      var volt = halfrxn[g]["pot"] - halfrxn[h]["pot"];
      volt = Math.round(100 * volt) / 100;
      //load the question
      g = quest["p1"];
      h = quest["p2"];
      i = quest["p3"];
      j = quest["p4"];
      //choose the time measure
      var p = Math.round(0.5 + 3 * Math.random());
      if (p === 1) {
        tme = secs;
        u = " seconds";
      }
      if (p === 2) {
        tme = mintes;
        u = " minutes";
      }
      if (p === 3) {
        tme = hrs;
        u = " hours";
      }
      //finish the answer
      var m = Math.random();
      if (m > 0.5) {
        z = "cathode";
      } else {
        z = "anode";
      }
      //decide on amount in moles or grams
      var y = Math.random();
      if (y < 0.5) {
        t = "grams";
        if (volt < 0.0) {
          if (m > 0.5) {
            theanswer = massred1;
          } else {
            theanswer = massred2;
          }
        } else {
          if (m > 0.5) {
            theanswer = massoxy2;
          } else {
            theanswer = massoxy1;
          }
        }
      } else {
        t = "moles";
        if (volt < 0.0) {
          if (m > 0.5) {
            theanswer = molesred1;
          } else {
            theanswer = molesred2;
          }
        } else {
          if (m > 0.5) {
            theanswer = molesoxy2;
          } else {
            theanswer = molesoxy1;
          }
        }
      }
      tryit(oxy1, oxy2, red1, red2, g, h, i, j, z, current, u, tme, t);
    }
    function tryit(a, b, c, d, g, h, i, j, z, current, u, tme, t) {
      let html = "<h6>" + g + t + h + z + i + current + j + tme + u + "?</h6>";
      html += `${a} + ${b} => ${c} + ${d}`;
      $("#question").html(html);
      // parent.frames[0].document.clear();
      // parent.frames[0].document.open();
      // parent.frames[0].document.writeln ("<html>");
      // parent.frames[0].document.writeln ("<head>");
      // parent.frames[0].document.writeln ("</head>");
      // parent.frames[0].document.writeln ("<body bgcolor = FFFFFF ");
      // parent.frames[0].document.writeln ("<pre>");
      // parent.frames[0].document.writeln ("");
      // parent.frames[0].document.writeln (g,t,h,z,i,current,j,tme,u,"?","<br><center>")
      // parent.frames[0].document.write (a," + ")
      // parent.frames[0].document.write(b," => ")
      // parent.frames[0].document.write(c," + ")
      // parent.frames[0].document.writeln (d,"<br>")
      // parent.frames[0].document.writeln ("</font>");
      // parent.frames[0].document.close();
    }
    // function answer(form){
    //   if(tried==1){
    //     alert("Sorry, you've already submitted this problem! We'll get you a new one!")
    //     choose()}
    //   else{
    //     if(tried==2){totl++;document.forms[0].total.value=totl}
    //     if (theanswer>.95*form.ans.value & theanswer<1.05*form.ans.value ){
    //       document.forms[0].results.value="correct"
    //       corrt++
    //       document.forms[0].correct.value=corrt
    //       tried=1
    //     }
    //     else {
    //       document.forms[0].results.value="incorrect"
    //       tried=2}
    //   }}
    // function timer(z){
    //   tt=z
    //   var b=Math.floor(tt/60)
    //   var j = (tt % 60)
    //   if (j<10){c="0"}
    //   else {c=""}
    //   howlong=b + ":" + c + j
    //   running=setTimeout("timer(tt+1)",1000)
    // }
    // function update(){
    //   document.forms[0].total.value=totl
    //   document.forms[0].correct.value=corrt
    //   document.forms[0].time.value=howlong
    //   document.forms[0].page.value=thepage
    //   document.forms[0].verify.value=Math.round(10000*Math.random())
    // }

    // const halfrxns = [
    //   {
    //     left: "Li<sup>+</sup>(aq)",
    //     right: "Li(s)",
    //     potential: -3.04,
    //     num: 1,
    //     m1: 6.94,
    //     m2: 6.94,
    //   },
    //   {
    //     left: "K<sup>+</sup>(aq)",
    //     right: "K(s)",
    //     potential: -2.92,
    //     num: 1,
    //     m1: 39.1,
    //     m2: 39.1,
    //   },
    //   {
    //     left: "Ca<sup>2+</sup>(aq)",
    //     right: "Ca(s)",
    //     potential: -2.76,
    //     num: 2,
    //     m1: 40.1,
    //     m2: 40.1,
    //   },
    //   {
    //     left: "Na<sup>+</sup>(aq)",
    //     right: "Na(s)",
    //     potential: -2.71,
    //     num: 1,
    //     m1: 23,
    //     m2: 23,
    //   },
    //   {
    //     left: "Mg<sup>2+</sup>(aq)",
    //     right: "Mg(s)",
    //     potential: -2.38,
    //     num: 2,
    //     m1: 24.3,
    //     m2: 24.3,
    //   },
    //   {
    //     left: "Al<sup>3+</sup>(aq)",
    //     right: "Al(s)",
    //     potential: -1.66,
    //     num: 3,
    //     m1: 27,
    //     m2: 27,
    //   },
    //   {
    //     left: "MnO<sub>4</sub><sup>-</sup>(aq)",
    //     right: "Mn<sup>2+</sup>(aq)",
    //     potential: 1.49,
    //     num: 5,
    //     m1: 118.9,
    //     m2: 54.9,
    //   },
    //   {
    //     left: "Zn<sup>2+</sup>(aq)",
    //     right: "Zn(s)",
    //     potential: -0.76,
    //     num: 2,
    //     m1: 65.4,
    //     m2: 65.4,
    //   },
    //   {
    //     left: "Cd<sup>2+</sup>(aq)",
    //     right: "Cd(s)",
    //     potential: -0.4,
    //     num: 2,
    //     m1: 112.4,
    //     m2: 112.4,
    //   },
    //   {
    //     left: "Ni<sup>2+</sup>(aq)",
    //     right: "Ni(s)",
    //     potential: -0.23,
    //     num: 2,
    //     m1: 58.7,
    //     m2: 58.7,
    //   },
    //   {
    //     left: "Sn<sup>2+</sup>(aq)",
    //     right: "Sn(s)",
    //     potential: -0.14,
    //     num: 2,
    //     m1: 118.7,
    //     m2: 118.7,
    //   },
    //   {
    //     left: "Pb<sup>2+</sup>(aq)",
    //     right: "Pb(s)",
    //     potential: -0.13,
    //     num: 2,
    //     m1: 207.2,
    //     m2: 207.2,
    //   },
    //   {
    //     left: "Fe<sup>3+</sup>(aq)",
    //     right: "Fe(s)",
    //     potential: -0.04,
    //     num: 3,
    //     m1: 55.85,
    //     m2: 55.85,
    //   },
    //   {
    //     left: "Fe<sup>2+</sup>(aq)",
    //     right: "Fe(s)",
    //     potential: -0.41,
    //     num: 2,
    //     m1: 55.85,
    //     m2: 55.85,
    //   },
    //   {
    //     left: "AgBr(s)",
    //     right: "Ag  +  Br<SUP>-</sup>(aq) ",
    //     potential: 0.071,
    //     num: 1,
    //     m1: 187.8,
    //     m2: 187.8,
    //   },
    //   {
    //     left: "Sn<sup>4+</sup>(aq)",
    //     right: "Sn<sup>2+</sup>(aq)",
    //     potential: 0.15,
    //     num: 2,
    //     m1: 118.7,
    //     m2: 118.7,
    //   },
    //   {
    //     left: "Cu<sup>2+</sup>(aq)",
    //     right: "Cu<sup>+</sup>(aq)",
    //     potential: 0.16,
    //     num: 1,
    //     m1: 63.55,
    //     m2: 63.55,
    //   },
    //   {
    //     left: "AgCl(s)",
    //     right: "Ag  +  Cl<sup>-</sup>(aq)",
    //     potential: 0.22,
    //     num: 1,
    //     m1: 143.32,
    //     m2: 143.32,
    //   },
    //   {
    //     left: "Cu<SUP>2+</sup>(aq)",
    //     right: "Cu(s)",
    //     potential: 0.34,
    //     num: 2,
    //     m1: 63.55,
    //     m2: 63.55,
    //   },
    //   {
    //     left: "S(s)",
    //     right: "H<SUB>2</SUB>S(g)",
    //     potential: 0.14,
    //     num: 2,
    //     m1: 32,
    //     m2: 34,
    //   },
    //   {
    //     left: "Cu<sup>+</sup>(aq)",
    //     right: "Cu(s)",
    //     potential: 0.52,
    //     num: 1,
    //     m1: 63.55,
    //     m2: 63.55,
    //   },
    //   {
    //     left: "Fe<sup>3+</sup>(aq)",
    //     right: "Fe<SUP>2+</sup>(aq)",
    //     potential: 0.77,
    //     num: 1,
    //     m1: 55.85,
    //     m2: 55.85,
    //   },
    //   {
    //     left: "Ag<sup>+</sup>(aq)",
    //     right: "Ag(s)",
    //     potential: 0.8,
    //     num: 1,
    //     m1: 107.9,
    //     m2: 107.9,
    //   },
    //   {
    //     left: "Co<sup>3+</sup>(aq)",
    //     right: "Co<SUP>2+</sup>(aq)",
    //     potential: 1.82,
    //     num: 1,
    //     m1: 58.93,
    //     m2: 58.93,
    //   },
    //   {
    //     left: "La<SUP>3+</sup>(aq)",
    //     right: "La(s)",
    //     potential: -2.38,
    //     num: 3,
    //     m1: 138.9,
    //     m2: 138.9,
    //   },
    //   {
    //     left: "U<SUP>3+</sup>(aq)",
    //     right: "U(s)",
    //     potential: -1.66,
    //     num: 3,
    //     m1: 238,
    //     m2: 238,
    //   },
    //   {
    //     left: "Cr<SUP>2+</sup>(aq)",
    //     right: "Cr(s)",
    //     potential: -0.9,
    //     num: 2,
    //     m1: 52,
    //     m2: 52,
    //   },
    //   {
    //     left: "Ce<sup>4+</sup>(aq)",
    //     right: "Ce<SUP>3+</sup>(aq)",
    //     potential: 1.44,
    //     num: 1,
    //     m1: 140.1,
    //     m2: 140.1,
    //   },
    //   {
    //     left: "Hg<sup>2+</sup>(aq)",
    //     right: "Hg(l)",
    //     potential: 0.85,
    //     num: 2,
    //     m1: 200.6,
    //     m2: 200.6,
    //   },
    //   {
    //     left: "ClO<SUB>2</SUB><sup>-</sup>(aq)",
    //     right: "ClO<SUp>-</sup>(aq)",
    //     potential: -0.13,
    //     num: 2,
    //     m1: 67.45,
    //     m2: 51.45,
    //   },
    //   {
    //     left: "ClO<SUB>4</SUB><SUP>-</sup>(aq)",
    //     right: "Cl<SUP>-</sup>(aq)",
    //     potential: 1.37,
    //     num: 8,
    //     m1: 99.45,
    //     m2: 35.45,
    //   },
    //   {
    //     left: "Ag<SUP>2+</sup>(aq)",
    //     right: "Ag<SUP>+</sup>(aq)",
    //     potential: 1.98,
    //     num: 1,
    //     m1: 108.7,
    //     m2: 108.7,
    //   },
    //   {
    //     left: "Cu<SUP>2+</sup>(aq)  +  I<SUP>-</sup>(aq)",
    //     right: "CuI(s)",
    //     potential: 0.86,
    //     num: 1,
    //     m1: 190.5,
    //     m2: 190.5,
    //   },
    //   {
    //     left: "ClO<SUB>3</SUB><SUP>-</sup>(aq)",
    //     right: "ClO<SUB>2</SUB>(g)",
    //     potential: 1.175,
    //     num: 1,
    //     m1: 83.45,
    //     m2: 67.45,
    //   },
    //   {
    //     left: "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
    //     right: "MnO<SUB>4</SUB><SUP>2-</sup>(aq)",
    //     potential: 0.56,
    //     num: 1,
    //     m1: 118.9,
    //     m2: 118.9,
    //   },
    //   {
    //     left: "MnO<SUB>2</SUB>(s)",
    //     right: "Mn<SUP>2+</sup>(aq)",
    //     potential: 1.23,
    //     num: 2,
    //     m1: 86.94,
    //     m2: 54.94,
    //   },
    //   {
    //     left: "PbO<SUB>2</SUB>(s)",
    //     right: "PbO(s)",
    //     potential: 0.28,
    //     num: 2,
    //     m1: 239.2,
    //     m2: 223.2,
    //   },
    //   {
    //     left: "Au<SUP>3+</sup>(aq)",
    //     right: "Au<SUP>+</sup>(aq)",
    //     potential: 1.36,
    //     num: 2,
    //     m1: 197,
    //     m2: 197,
    //   },
    //   {
    //     left: "MnO<SUB>4</SUB><SUP>-</sup>(aq)",
    //     right: "MnO<SUb>2</SUb>(s)",
    //     potential: 1.7,
    //     num: 3,
    //     m1: 118.9,
    //     m2: 86.94,
    //   },
    //   {
    //     left: "H<SUB>2</SUB>SO<SUB>3</SUB>(aq)",
    //     right: "S(s)",
    //     potential: 0.45,
    //     num: 4,
    //     m1: 82,
    //     m2: 32,
    //   },
    //   {
    //     left: "HAsO<SUB>2</SUB>(aq)",
    //     right: "As(s)",
    //     potential: 0.24,
    //     num: 3,
    //     m1: 107.9,
    //     m2: 74.9,
    //   },
    //   {
    //     left: "Sr<SUP>2+</sup>(aq)",
    //     right: "Sr(s)",
    //     potential: -2.89,
    //     num: 2,
    //     m1: 87.6,
    //     m2: 87.6,
    //   },
    //   {
    //     left: "Ti<SUP>2+</sup>(aq)",
    //     right: "Ti(s)",
    //     potential: -1.63,
    //     num: 2,
    //     m1: 47.9,
    //     m2: 87.6,
    //   },
    //   {
    //     left: "V<SUP>3+</sup>(aq)",
    //     right: "V<SUP>2+</sup>(aq)",
    //     potential: -0.255,
    //     num: 1,
    //     m1: 50.94,
    //     m2: 50.94,
    //   },
    //   {
    //     left: "In<SUP>3+</sup>(aq)",
    //     right: "In(s)",
    //     potential: -0.338,
    //     num: 3,
    //     m1: 114.8,
    //     m2: 114.8,
    //   },
    //   {
    //     left: "Rb<SUP>+</sup>(aq)",
    //     right: "Rb(s)",
    //     potential: -2.924,
    //     num: 1,
    //     m1: 85.5,
    //     m2: 85.5,
    //   },
    // ];
    //
    // const secs = cp.Random.float(3000, 25000);
    // const minutes = secs / 60;
    // const hrs = secs / 3600;
    // const current = Math.pow(100, cp.Random.float());
    // const faradays = (secs * current) / 96500;
    // const [r1, r2] = cp.library.chooseN(halfrxns, 2);
    //
    // const molesoxy1 = faradays / r1.num;
    // const molesred1 = faradays / r1.num;
    // const massoxy1 = molesoxy1 * r1.m1;
    // const massred1 = molesred1 * r1.m2;
    //
    // const molesoxy2 = faradays / r2.num;
    // const molesred2 = faradays / r2.num;
    // const massoxy2 = molesoxy2 * r2.m1;
    // const massred2 = molesred2 * r2.m2;
    //
    // const volt = r1.pot + r2.pot;
    // const tmes = [secs, minutes, hrs];
    // const us = [" seconds", " minutes", " hours"];
    // const timeChoice = cp.Random.int(0, 2);
    // const tme = tmes[timeChoice];
    // const u = us[timeChoice];
    // const z = cp.Random.boolean() ? "cathode" : "anode";
    //
    // let t, answer;
    // if (cp.Random.boolean()) {
    //   t = "grams";
    //   if (volt < 0) {
    //     answer = z === "cathode" ? massred1 : massred2;
    //   } else {
    //     answer = z === "cathode" ? massoxy2 : massoxy1;
    //   }
    // } else {
    //   t = "moles";
    //   if (volt < 0) {
    //     answer = z === "cathode" ? massred1 : massred2;
    //   } else {
    //     answer = z === "cathode" ? massoxy2 : massoxy1;
    //   }
    // }
    //
    // const question = `<div class="description">If the process below is driven electrolytically, how many <span class="parameter">${t}</span> of material will be produced at the ${z} by a current of <span class="parameter">${current.toFixed(
    //   2
    // )}</span> amps flowing for <span class="parameter">${tme.toFixed(
    //   2
    // )}</span> ${u}</div>`;
    // const rxn = `<div class="rxn"><span class="parameter">${r1.left}</span> + <span class="parameter">${r2.left}</span> => <span class="parameter">${r1.right}</span> + <span class="parameter">${r2.right}</div></span>`;
    //

    // $("#q").html(question + rxn);
    choose();
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
