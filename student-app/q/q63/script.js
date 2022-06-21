(function (cp) {
  cp.generateNewQuestion = () => {
    // thepage = "Hydrogen Spectrum(63)";
    let n1 = 0;
    let n2 = 0;
    let energy = 0;
    let frequency = 0;
    let wavelength = 0;
    // let theanswer = 0;
    let penergy = 0;
    // tried = 0;
    // totl = 0;
    // corrt = 0;
    // howlong = "";
    // type = 0;
    // instruct = 0;
    // function clear() {
    //   document.forms[0].elements[5].value = "";
    //   document.forms[0].results.value = "";
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    // }
    // function cleanse() {
    //   clear();
    //   instruct = 0;
    // }
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function quest(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    question = new MakeArray(20);
    question[1] = new quest(
      "What is the energy change in Joules which accompanies the transition of the electron in a hydrogen atoms undergoes a transition from n = ",
      " to n = ",
      "?"
    );
    question[2] = new quest(
      "The electron in a hydrogen atoms undergoes a transition from n = ",
      " to n = ",
      " with the emission of a photon. What is the frequency of the photon?"
    );
    question[3] = new quest(
      "The electron in a hydrogen atoms undergoes a transition from n =",
      " to n = ",
      " with the emission of a photon. What is the wavelength of the photon?"
    );
    question[4] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and a photon with energy = ",
      "Joules is absorbed, to what new quantum level is the electron promoted?"
    );
    question[5] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and a photon with frequency = ",
      "sec<sup>-1</sup> is absorbed, to what new quantum level is the electron promoted?"
    );
    question[6] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and a photon with wavelength = ",
      "meters is absorbed, to what new quantum level is the electron promoted?"
    );
    question[7] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and falls to a lower level with the emission of a photon with energy = ",
      "Joules, what is the new quantum level for the electron?"
    );
    question[8] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and falls to a lower level with the emission of a photon with frequency = ",
      "sec<sup>-1</sup>, what is the new quantum level for the electron?"
    );
    question[9] = new quest(
      "If the electron in a hydrogen atoms in initially at principal quantum level n = ",
      " and falls to a lower level with the emission of a photon with wavelength = ",
      "meters, what is the new quantum level for the electron?"
    );

    function begin() {
      // totl++;
      // document.forms[0].total.value = totl;
      // tried = 0;
      n1 = Math.ceil(10 * Math.random());
      n2 = Math.ceil(10 * Math.random());
      if (n1 === n2) {
        return begin();
      } else {
        let diffterm = 1 / (n1 * n1) - 1 / (n2 * n2);
        energy = sigfigs(2.179e-18 * diffterm);
        penergy = sigfigs(Math.abs(energy));
        frequency = sigfigs(Math.abs(energy / 6.626e-34));
        wavelength = sigfigs(Math.abs(3e8 / frequency));
        if (Math.random() > 0.7) {
          return choose(Math.ceil(3 * Math.random()));
        } else {
          if (n1 > n2) {
            return tolower();
          } else {
            return tohigher();
          }
        }
      }
    }
    function tolower() {
      return choose(6 + Math.ceil(3 * Math.random()));
    }
    function tohigher() {
      return choose(3 + Math.ceil(3 * Math.random()));
    }

    function choose(x) {
      let type = 0;
      let ask = "";
      let which = x;
      let theanswer;
      if (which === 1) {
        type = 1;
        ask =
          question[1]["p1"] + n1 + question[1]["p2"] + n2 + question[1]["p3"];
        theanswer = energy;
      }
      if (which === 2) {
        ask =
          question[2]["p1"] + n1 + question[2]["p2"] + n2 + question[2]["p3"];
        theanswer = frequency;
      }
      if (which === 3) {
        ask =
          question[3]["p1"] + n1 + question[3]["p2"] + n2 + question[3]["p3"];
        theanswer = wavelength;
      }
      if (which === 4) {
        ask =
          question[4]["p1"] +
          n1 +
          question[4]["p2"] +
          penergy +
          question[4]["p3"];
        theanswer = n2;
      }
      if (which === 5) {
        ask =
          question[5]["p1"] +
          n1 +
          question[5]["p2"] +
          frequency +
          question[5]["p3"];
        theanswer = n2;
      }
      if (which === 6) {
        ask =
          question[6]["p1"] +
          n1 +
          question[6]["p2"] +
          wavelength +
          question[6]["p3"];
        theanswer = n2;
      }
      if (which === 7) {
        ask =
          question[7]["p1"] +
          n1 +
          question[7]["p2"] +
          penergy +
          question[7]["p3"];
        theanswer = n2;
      }
      if (which === 8) {
        ask =
          question[8]["p1"] +
          n1 +
          question[8]["p2"] +
          frequency +
          question[8]["p3"];
        theanswer = n2;
      }
      if (which === 9) {
        ask =
          question[9]["p1"] +
          n1 +
          question[9]["p2"] +
          wavelength +
          question[9]["p3"];
        theanswer = n2;
      }
      $("#question").html(ask);

      return { ask, theanswer };
      // display(ask);
    }
    // function answer(ans) {
    //   if (tried === 1) {
    //     alert("You've already done this one. Get a new problem");
    //   } else {
    //     kk = 0;
    //     if (tried === 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if ((type === 1) && (n1 > n2)) {
    //       if ((ans > 1.05 * theanswer) && (ans < 0.95 * theanswer)) {
    //         kk = 1;
    //       }
    //     } else {
    //       if ((ans < 1.05 * theanswer) && (ans > 0.95 * theanswer)) {
    //         kk = 1;
    //       }
    //     }
    //     if (kk === 1) {
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
    // function display(ask) {
    //   var newone = window.open("", "newone", "scrollbars=yes,width=500,height=200");
    //   newone.document.clear();
    //   newone.document.writeln("<html>");
    //   newone.document.writeln("<head><title>newone</title>");
    //   newone.document.writeln("</head>");
    //   newone.document.writeln("<body bgcolor = FFFFFF");
    //   newone.document.writeln("<font size = +1>");
    //   newone.document.writeln(ask, "<br>");
    //   //,n1,"<br>",n2,"<br>",energy,"<br>",frequency,"<br>",wavelength,"<br><b>",theanswer);
    //   newone.document.writeln("<form method='post'>");
    //   newone.document.writeln(
    //     "<input type='text' name='second' size=18></td></tr>"
    //   );
    //   newone.document.writeln(
    //     "<TD><input type='button' value='Check Answer' onClick='opener.answer(this.form.second.value)'></TD></tr>"
    //   );
    //   newone.document.writeln("</form>");
    //   newone.document.writeln("</font>");
    //   newone.document.writeln("</html>");
    //   newone.document.close();
    //   newone.focus();
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
    //
    function sigfigs(f) {
      ex = 0;
      if (Math.abs(f) > 1000) {
        while (Math.abs(f) > 1000) {
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
        if (Math.abs(f) < 100) {
          while (Math.abs(f) < 100) {
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
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }

    const { ask, theanswer } = begin();
    $("#question").html(ask);
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
