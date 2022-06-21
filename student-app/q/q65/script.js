(function (cp) {
  cp.generateNewQuestion = () => {
    // thepage = "Slater's Rules(65)";
    // ncharge = 0;
    // whiche = 0;
    // ntop = 0;
    // theorbital = "";
    // shield = 0;
    // theanswer = 0;
    // totl = 0;
    // corrt = 0;
    // tried = 0;
    // howlong = "";
    // function clear() {
    //   document.forms[0].results.value = "";
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    // }
    function distribute(a, b) {
      left = a;
      for (j = 1; j < b; j++) {
        n[j] = cap[j];
        left = left - cap[j];
      }
      n[b] = left;
    }
    function calccharge(electron) {
      s = 0;
      if ((whiche > 18) & (whiche <= 28)) {
        s = 0.35 * (n[4] - 1) + 18;
      } else {
        for (j = electron; j >= 1; j--) {
          if (j == electron) {
            s = s + 0.35 * (n[j] - 1);
          } else {
            if (j == electron - 1) {
              s = s + 0.85 * n[j];
            } else {
              s = s + n[j];
            }
          }
        }
      }
      return Math.round(100 * s) / 100;
    }
    function orbital(a) {
      if (a <= 2) {
        orb = "1s";
      } else {
        if (a <= 4) {
          orb = "2s";
        } else {
          if (a <= 10) {
            orb = "2p";
          } else {
            if (a <= 12) {
              orb = "3s";
            } else {
              if (a <= 18) {
                orb = "3p";
              } else {
                if (a <= 28) {
                  orb = "3d";
                } else {
                  if (a <= 30) {
                    orb = "4s";
                  } else {
                    orb = "4p";
                  }
                }
              }
            }
          }
        }
      }
      return orb;
    }
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function atom(name, sym, an) {
      this.name = name;
      this.sym = sym;
      this.an = an;
    }
    function question(p1, p2, p3, p4, p5, p6) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
      this.p6 = p6;
    }
    let cap = new MakeArray(10);
    cap[1] = 2;
    cap[2] = 8;
    cap[3] = 8;
    cap[4] = 10;
    cap[5] = 8;
    let n = new MakeArray(10);
    let a = new MakeArray(107);
    a[1] = new atom("hydrogen", "H", 1);
    a[2] = new atom("helium", "He", 2);
    a[3] = new atom("lithium", "Li", 3);
    a[4] = new atom("beryllium", "Be", 4);
    a[5] = new atom("boron", "B", 5);
    a[6] = new atom("carbon", "C", 6);
    a[7] = new atom("nitrogen", "N", 7);
    a[8] = new atom("oxygen", "O", 8);
    a[9] = new atom("fluorine", "F", 9);
    a[10] = new atom("neon", "Ne", 10);
    a[11] = new atom("sodium", "Na", 11);
    a[12] = new atom("magnesium", "Mg", 12);
    a[13] = new atom("aluminum", "Al", 13);
    a[14] = new atom("silicon", "Si", 14);
    a[15] = new atom("phosphorous", "P", 15);
    a[16] = new atom("sulfur", "S", 16);
    a[17] = new atom("chlorine", "Cl", 17);
    a[18] = new atom("argon", "Ar", 18);
    a[19] = new atom("potassium", "K", 19);
    a[20] = new atom("calcium", "Ca", 20);
    a[21] = new atom("scandium", "Sc", 21);
    a[22] = new atom("titanium", "Ti", 22);
    a[23] = new atom("vanadium", "V", 23);
    a[24] = new atom("chromium", "Cr", 24);
    a[25] = new atom("manganese", "Mn", 25);
    a[26] = new atom("iron", "Fe", 26);
    a[27] = new atom("cobalt", "Co", 27);
    a[28] = new atom("nickel", "Ni", 28);
    a[29] = new atom("copper", "Cu", 29);
    a[30] = new atom("zinc", "Zn", 30);
    a[31] = new atom("gallium", "Ga", 31);
    a[32] = new atom("germanium", "Ge", 32);
    a[33] = new atom("arsenic", "As", 33);
    a[34] = new atom("selenium", "Se", 34);
    a[35] = new atom("bromine", "Br", 35);
    a[36] = new atom("krypton", "Kr", 36);
    let quest = new MakeArray(10);
    quest[1] = new question(
      "Use Slater's rules to calculate the effective nuclear charge, <b>Z<sup>*</sup></b>, for a ",
      " electron from ",
      "."
    );
    quest[2] = new question(
      "Use Slater's rules to calculate the shielding constant, <b>S</b>, for a ",
      " electron from ",
      "."
    );

    // tried = 0;
    // totl++;
    // document.forms[0].results.value = "";
    // document.forms[0].total.value = totl;
    let ncharge = Math.ceil(36 * Math.random());
    let whiche = Math.ceil(ncharge * Math.random());
    let etop = toplevel(whiche);
    let theorbital = orbital(whiche);
    let atop = toplevel(ncharge);
    distribute(ncharge, atop);
    let shield = calccharge(etop);

    let option = 1;
    if (Math.random() > 0.5) {
      option = 2;
    }
    let ask =
      quest[option]["p1"] +
      theorbital +
      quest[option]["p2"] +
      a[ncharge]["sym"] +
      quest[option]["p3"];
    if (option === 1) {
      theanswer = ncharge - shield;
    } else {
      theanswer = shield;
    }
    // // parent.frames[0].document.clear();
    // // parent.frames[0].document.open();
    // // parent.frames[0].document.writeln("<html>");
    // // parent.frames[0].document.writeln("<head>");
    // // parent.frames[0].document.writeln("</head>");
    // // parent.frames[0].document.writeln("<body bgcolor = FFFFFF >");
    // // parent.frames[0].document.write(qust);
    // // parent.frames[0].document.writeln("<form>");
    // // parent.frames[0].document.writeln("<input type=text name=ans size=5>");
    // // parent.frames[0].document.writeln(
    // //   "<input type=button value='Check Answer' onClick='parent.frames[1].answer(this.form.ans.value)'>"
    // // );
    // // parent.frames[0].document.writeln("<form>");
    // // parent.frames[0].document.close();
    // // showit(ask);
    // //
    // // makequestion();
    // }
    // function toplevel(z) {
    //   topl = 0;
    //   left = z;
    //   while (left > 0) {
    //     topl++;
    //     left = left - cap[topl];
    //   }
    //   return topl;
    // }
    // function makequestion() {
    //   option = 1;
    //   if (Math.random() > 0.5) {
    //     option = 2;
    //   }
    //   ask =
    //     quest[option]["p1"] +
    //     theorbital +
    //     quest[option]["p2"] +
    //     a[ncharge]["sym"] +
    //     quest[option]["p3"];
    //   if (option == 1) {
    //     theanswer = ncharge - shield;
    //   } else {
    //     theanswer = shield;
    //   }
    //   showit(ask);
    //   //document.forms[0].results.value=theanswer
    // }
    // function showit(qust) {
    //   parent.frames[0].document.clear();
    //   parent.frames[0].document.open();
    //   parent.frames[0].document.writeln("<html>");
    //   parent.frames[0].document.writeln("<head>");
    //   parent.frames[0].document.writeln("</head>");
    //   parent.frames[0].document.writeln("<body bgcolor = FFFFFF >");
    //   parent.frames[0].document.write(qust);
    //   parent.frames[0].document.writeln("<form>");
    //   parent.frames[0].document.writeln("<input type=text name=ans size=5>");
    //   parent.frames[0].document.writeln(
    //     "<input type=button value='Check Answer' onClick='parent.frames[1].answer(this.form.ans.value)'>"
    //   );
    //   parent.frames[0].document.writeln("<form>");
    //   parent.frames[0].document.close();
    // }
    // function answer(ans) {
    //   if (tried == 1) {
    //     alert("You already answered this one. Get a new question.");
    //   } else {
    //     if ((ans < 1.05 * theanswer) & (ans > 0.95 * theanswer)) {
    //       document.forms[0].results.value = "correct";
    //       corrt++;
    //       document.forms[0].correct.value = corrt;
    //       tried = 1;
    //     } else {
    //       if (tried == 2) {
    //         totl++;
    //         document.forms[0].total.value = totl;
    //       }
    //       document.forms[0].results.value = "incorrect";
    //       tried = 2;
    //     }
    //   }
    // }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }

    const answerPayload = [
      {
        answer: theanswer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    $("#question").html(ask);
    window.cp.setAnswerPayload([answerPayload[choice]]);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
