(function (cp) {
  cp.generateNewQuestion = () => {
    thepage = "First Order Processes(72)";
    time = 0;
    dim = "";
    theanswer = 0;
    startmass = 0;
    left = 0;
    lost = 0;
    pleft = 0;
    plost = 0;
    cpd = "";
    option = 0;
    which = 0;
    totl = 0;
    corrt = 0;
    howlong = "";
    tried = 0;

    function nuclides(sym, halflife, unit) {
      this.sym = sym;
      this.halflife = halflife;
      this.unit = unit;
    }

    function reactionset(react, cmpd, kconst) {
      this.react = react;
      this.cmpd = cmpd;
      this.kconst = kconst;
    }
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function question(p1, p2, p3, p4, p5) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
    }

    quest = new MakeArray(20);
    quest[1] = new question(
      "If the sample originally contains ",
      " grams of the isotope, how many ",
      " will it take until only ",
      " grams remain?"
    );
    quest[2] = new question(
      "A sample with an unknown mass of isotope is allowed to decay for ",
      " After that time ",
      " grams remain.",
      " What was the mass of the original sample?"
    );
    quest[3] = new question(
      "If the sample originally has ",
      " grams of isotope, what mass will remain after ",
      " ?"
    );
    quest[4] = new question(
      "If the sample originally contains ",
      " grams of the isotope, how much will be consumed in ",
      " ?"
    );
    quest[5] = new question(
      "A sample containing an unknown mass of isotope is allowed to decay for ",
      " During that time ",
      "grams decay. How many grams of isotope were in the original sample?"
    );
    quest[6] = new question(
      "How long will it take, in<b> ",
      "</b>, until only ",
      "% of the original isotope mass remains?"
    );
    quest[7] = new question(
      "How long will it take, in<b> ",
      "</b>, for ",
      "% of the original isotope to decay?"
    );
    quest[8] = new question(
      "What percentage of the original sample will remain after ",
      "?"
    );
    quest[9] = new question(
      "What percentage of the original sample will be consumed in ",
      "?"
    );
    quest[11] = new question(
      "If the sample originally contains ",
      " grams of ",
      ", how many ",
      " will it take until only ",
      " grams remain?"
    );
    quest[12] = new question(
      "An unknown mass of ",
      ", is allowed to react for ",
      " After that time ",
      " grams remain.",
      " What was the mass of the original sample?"
    );
    quest[13] = new question(
      "If the sample originally contains ",
      " grams of ",
      ", what mass will remain after ",
      " ?"
    );
    quest[14] = new question(
      "If the sample originally contains ",
      " grams of ",
      ", how much will be consumed in ",
      " ?"
    );
    quest[15] = new question(
      "An unknown mass of ",
      ", is allowed to react for ",
      ". During that time ",
      "grams react. How many grams of compound were in the original sample?"
    );
    quest[16] = new question(
      "How long will it take, in<b> ",
      "</b>, until only ",
      "% of the original  mass remains?"
    );
    quest[17] = new question(
      "How long will it take, in<b> ",
      "</b>, for ",
      "% of the original sample to react?"
    );
    quest[18] = new question(
      "What percentage of the original sample will remain after ",
      "?"
    );
    quest[19] = new question(
      "What percentage of the original sample will be consumed in ",
      "?"
    );
    basequest = new MakeArray(5);
    basequest[1] = new question("The nuclide ", " has a half-life of ");
    basequest[2] = new question(
      "The reaction below is first order in ",
      " with a rate constant of ",
      "."
    );
    nuke = new MakeArray(30);
    nuke[1] = new nuclides("<sup>238</sup>U", 4.5e9, " years");
    nuke[2] = new nuclides("<sup>235</sup>U", 7.1e8, " years");
    nuke[3] = new nuclides("<sup>232</sup>Th", 1.4e10, " years");
    nuke[4] = new nuclides("<sup>40</sup>K", 1.3e9, " years");
    nuke[5] = new nuclides("<sup>14</sup>C", 5730, " years");
    nuke[6] = new nuclides("<sup>239</sup>Pu", 24000, " years");
    nuke[7] = new nuclides("<sup>137</sup>Cs", 30, " years");
    nuke[8] = new nuclides("<sup>90</sup>Sr", 28.8, " years");
    nuke[9] = new nuclides("<sup>8</sup>Li", 0.841, " seconds");
    nuke[10] = new nuclides("<sup>11</sup>Be", 13.6, " seconds");
    nuke[11] = new nuclides("<sup>65</sup>Ge", 1.5, " minutes");
    nuke[12] = new nuclides("<sup>13</sup>N", 9.96, " minutes");
    nuke[13] = new nuclides("<sup>24</sup>Na", 14.96, " hours");
    nuke[14] = new nuclides("<sup>23</sup>Mg", 9.46, " minutes");
    nuke[15] = new nuclides("<sup>25</sup>Al", 7.24, " seconds");
    nuke[16] = new nuclides("<sup>45</sup>Ca", 165, " days");
    nuke[17] = new nuclides("<sup>51</sup>Ti", 5.79, " minutes");
    nuke[18] = new nuclides("<sup>59</sup>Fe", 45.6, " days");
    nuke[19] = new nuclides("<sup>62</sup>Zn", 9.13, " hours");
    nuke[20] = new nuclides("<sup>63</sup>Ga", 33, " seconds");
    nuke[21] = new nuclides("<sup>73</sup>Se", 7.1, " hours");
    nuke[22] = new nuclides("<sup>77</sup>Br", 57, " hours");
    nuke[23] = new nuclides("<sup>90</sup>Kr", 33, " seconds");
    nuke[24] = new nuclides("<sup>84</sup>Rb", 33, " days");
    nuke[25] = new nuclides("<sup>89</sup>Zr", 4.18, " minutes");
    nuke[26] = new nuclides("<sup>96</sup>Tc", 4.35, " days");
    nuke[27] = new nuclides("<sup>93</sup>Ru", 50, " seconds");
    nuke[28] = new nuclides("<sup>100</sup>Rh", 20.8, " hours");
    nuke[29] = new nuclides("<sup>100</sup>Pd", 4.0, " days");
    nuke[30] = new nuclides("<sup>106</sup>Ag", 24, " minutes");
    reaction = new MakeArray(30);
    reaction[1] = new reactionset(
      "2N<SUB>2</SUB>O<SUB>5</SUB>(g) => 4NO<SUB>2</SUB>(g)  +  O<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>5</SUB>",
      8.5e-3
    );
    reaction[2] = new reactionset(
      "CH<SUB>3</SUB>NC(g) => CH<SUB>3</SUB>CN(g)",
      "CH<SUB>3</SUB>NC",
      5.1e-5
    );
    reaction[3] = new reactionset(
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>  =>  SO<SUB>2</SUB>(g) +  Cl2(g)",
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>",
      150
    );
    reaction[4] = new reactionset(
      "2H<SUB>2</SUB>O<SUB>2</SUB>(aq) + H<SUB>2</SUB>O(l) +  O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O<SUB>2</SUB>",
      6.3e-4
    );
    reaction[5] = new reactionset(
      "N<SUB>2</SUB>O<SUB>4</SUB>(g) => 2NO<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>4</SUB>",
      0.25
    );
    reaction[6] = new reactionset(
      "2HCl(g) => H<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g)",
      "HCl",
      0.084
    );
    reaction[7] = new reactionset(
      "C<SUB>8</SUB>H<SUB>18</SUB>O<SUB>2</SUB>(g)  =>  2C<SUB>3</SUB>H<SUB>6</SUB>O(g) +  C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      "C<SUB>8</SUB>H<SUB>18</SUB>O<SUB>2</SUB>",
      1.92e3
    );
    reaction[8] = new reactionset(
      "C<SUB>2</SUB>H<SUB>4</SUB>O(g) => CH<SUB>4</SUB>(g) + CO(g)",
      "C<SUB>2</SUB>H<SUB>4</SUB>O",
      2.05e-4
    );
    reaction[9] = new reactionset(
      "2N<SUB>2</SUB>O<SUB>5</SUB>(g) => 2N<SUB>2</SUB>O<SUB>4</SUB>(g) + O<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>5</SUB>",
      6.21e-4
    );
    reaction[10] = new reactionset(
      "C<SUB>12</SUB>H<SUB>22</SUB>O<SUB>11</SUB>(aq) + H<SUB>2</SUB>O  => 2C<SUB>6</SUB>H<SUB>12</SUB>O<SUB>6</SUB> ",
      "C<SUB>12</SUB>H<SUB>22</SUB>O<SUB>11</SUB>",
      2.3e-5
    );
    reaction[11] = new reactionset(
      "C<SUB>2</SUB>H<SUB>6</SUB>N<SUB>2</SUB>(g) => N<SUB>2</SUB>(g)  +  C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      "C<SUB>2</SUB>H<SUB>6</SUB>N<SUB>2</SUB>",
      2.55e-3
    );
    reaction[12] = new reactionset(
      "COCl<SUB>2</SUB>(g) =>  CO(g) + Cl<SUB>2</SUB>(g)",
      "COCl<SUB>2</SUB>",
      0.045
    );
    reaction[13] = new reactionset(
      "(CH<SUB>3</SUB>)<SUB>3</SUB>COH + HCl => (CH<SUB>3</SUB>)<SUB>3</SUB>CCl + H<SUB>2</SUB>0",
      "(CH<SUB>3</SUB>)<SUB>3</SUB>COH",
      12.4
    );
    reaction[14] = new reactionset(
      "HOF(g) => HF(g) +  1/2O<SUB>2</SUB>(g)",
      "HOF",
      3.85e-4
    );
    reaction[15] = new reactionset(
      "4PH<SUB>3</SUB>(g)  => P<SUB>4</SUB>(g) + 6H<SUB>2</SUB>(g)",
      "PH<SUB>3</SUB>",
      1.83e-2
    );
    reaction[16] = new reactionset(
      "2NO<SUB>2</SUB>Cl(g) => 2NO<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g)",
      "NO<SUB>2</SUB>Cl",
      2.3e-2
    );
    reaction[17] = new reactionset(
      "NO(g) +  N<SUB>2</SUB>O<SUB>5</SUB>(g) => 3NO<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>5</SUB>",
      0.056
    );
    reaction[18] = new reactionset(
      "CH<SUB>3</SUB>CH<SUB>2</SUB>Cl(g) => C<SUB>2</SUB>H<SUB>4</SUB>(g) + HCl(g)",
      "CH<SUB>3</SUB>CH<SUB>2</SUB>Cl",
      3.55e-3
    );
    reaction[19] = new reactionset(
      "C<SUB>2</SUB>H<SUB>4</SUB>O(g) => CH<SUB>4</SUB>(g) + CO(g)",
      "C<SUB>2</SUB>H<SUB>4</SUB>O",
      2.05e-4
    );
    //begin program
    //obviously the timer function
    function timer(z) {
      tt = z;
      var b = Math.floor(tt / 60);
      var j = tt % 60;
      if (j < 10) {
        c = "0";
      } else {
        c = "";
      }
      howlong = b + ":" + c + j;
      running = setTimeout("timer(tt+1)", 1000);
    }
    function begin() {
      getmasses();
      if (Math.random() > 0.5) {
        radioactive();
      } else {
        chemical();
      }
    }
    function radioactive() {
      rxn = "";
      g = Math.ceil(30 * Math.random());
      atom = nuke[g]["sym"];
      half = sigfigs(nuke[g]["halflife"]);
      dim = nuke[g]["unit"];
      whichquest = Math.ceil(9 * Math.random());
      ask = basequest[1]["p1"] + atom + basequest[1]["p2"] + half + dim + ".";
      constant = calck(half);
      time = -Math.log(left / startmass) / constant;
      if (Math.random() > 0.5) {
        if (dim === "seconds") {
          tunit = "minutes";
          time = converttomins(time, dim);
        }
        if (dim === "minutes") {
          if (Math.random() > 0.5) {
            tunit = "seconds";
            time = converttosecs(time, dim);
          } else {
            tunit = "hours";
            time = converttohours(time, dim);
          }
        }
        if (dim === "hours") {
          if (Math.random() > 0.5) {
            tunit = "days";
            time = converttodays(time, dim);
          } else {
            tunit = "minutes";
            time = converttomins(time, dim);
          }
        }
        if (dim === "days") {
          tunit = "hours";
          time = converttohours(time, dim);
        }
        if (dim === "years") {
          time = sigfigs(time);
          tunit = dim;
        }
      } else {
        time = sigfigs(time);
        tunit = dim;
      }
      if (whichquest === 1) {
        finish =
          quest[1]["p1"] +
          startmass +
          quest[1]["p2"] +
          tunit +
          quest[1]["p3"] +
          left +
          quest[1]["p4"];
        theanswer = time;
      }
      if (whichquest === 2) {
        finish =
          quest[2]["p1"] +
          time +
          tunit +
          quest[2]["p2"] +
          left +
          quest[2]["p3"] +
          quest[2]["p4"];
        theanswer = startmass;
      }
      if (whichquest === 3) {
        finish =
          quest[3]["p1"] +
          startmass +
          quest[3]["p2"] +
          time +
          tunit +
          quest[3]["p3"];
        theanswer = left;
      }
      if (whichquest === 4) {
        finish =
          quest[4]["p1"] +
          startmass +
          quest[4]["p2"] +
          time +
          tunit +
          quest[4]["p3"];
        theanswer = lost;
      }
      if (whichquest === 5) {
        finish =
          quest[5]["p1"] +
          time +
          tunit +
          quest[5]["p2"] +
          lost +
          quest[5]["p3"];
        theanswer = startmass;
      }
      if (whichquest === 6) {
        finish =
          quest[6]["p1"] + tunit + quest[6]["p2"] + pleft + quest[6]["p3"];
        theanswer = time;
      }
      if (whichquest === 7) {
        finish =
          quest[7]["p1"] + tunit + quest[7]["p2"] + plost + quest[7]["p3"];
        theanswer = time;
      }
      if (whichquest === 8) {
        finish = quest[8]["p1"] + time + tunit + quest[8]["p2"];
        theanswer = pleft;
      }
      if (whichquest === 9) {
        finish = quest[9]["p1"] + time + tunit + quest[9]["p2"];
        theanswer = plost;
      }
      showit(ask, finish, rxn);
    }
    function chemical() {
      which = Math.ceil(19 * Math.random());
      constant = reaction[which]["kconst"];
      half = calchalf(constant);
      time = -Math.log(left / startmass) / constant;
      time = sigfigs(time);
      tunit = "seconds";
      if (Math.random() > 0.5) {
        time = converttomins(time, tunit);
        tunit = "minutes";
      }
      cpd = reaction[which]["cmpd"];
      rxn = reaction[which]["react"];
      ask =
        basequest[2]["p1"] +
        cpd +
        basequest[2]["p2"] +
        reaction[which]["kconst"] +
        " sec<sup>-1</sup> " +
        basequest[2]["p3"];
      whichquest = 10 + Math.ceil(9 * Math.random());
      if (whichquest === 11) {
        finish =
          quest[11]["p1"] +
          startmass +
          quest[11]["p2"] +
          cpd +
          quest[11]["p3"] +
          tunit +
          quest[11]["p4"] +
          left +
          quest[11]["p5"];
        theanswer = time;
      }
      if (whichquest === 12) {
        finish =
          quest[12]["p1"] +
          cpd +
          quest[12]["p2"] +
          time +
          tunit +
          quest[12]["p3"] +
          left +
          quest[12]["p4"] +
          quest[12]["p5"];
        theanswer = startmass;
      }
      if (whichquest === 13) {
        finish =
          quest[13]["p1"] +
          startmass +
          quest[13]["p2"] +
          cpd +
          quest[13]["p3"] +
          time +
          tunit +
          quest[13]["p4"];
        theanswer = left;
      }
      if (whichquest === 14) {
        finish =
          quest[14]["p1"] +
          startmass +
          quest[14]["p2"] +
          cpd +
          quest[14]["p3"] +
          time +
          tunit +
          quest[14]["p4"];
        theanswer = lost;
      }
      if (whichquest === 15) {
        finish =
          quest[15]["p1"] +
          cpd +
          quest[15]["p2"] +
          time +
          tunit +
          quest[15]["p3"] +
          lost +
          quest[15]["p4"];
        theanswer = startmass;
      }
      if (whichquest === 16) {
        finish =
          quest[16]["p1"] + tunit + quest[16]["p2"] + pleft + quest[16]["p3"];
        theanswer = time;
      }
      if (whichquest === 17) {
        finish =
          quest[17]["p1"] + tunit + quest[17]["p2"] + plost + quest[17]["p3"];
        theanswer = time;
      }
      if (whichquest === 18) {
        finish = quest[18]["p1"] + time + tunit + quest[18]["p2"];
        theanswer = pleft;
      }
      if (whichquest === 19) {
        finish = quest[19]["p1"] + time + tunit + quest[19]["p2"];
        theanswer = plost;
      }
      showit(ask, finish, rxn);
    }
    function getmasses() {
      startmass = 0;
      while (startmass < 1) {
        startmass = Math.ceil(100 * Math.random()) / 10;
      }
      left = startmass;
      while (left > 0.5 * startmass || left < 0.1 * startmass) {
        left = startmass * Math.random();
      }
      left = Math.round(1000 * left) / 1000;
      lost = Math.round(1000 * (startmass - left)) / 1000;
      pleft = (left / startmass) * 100;
      if (pleft < 10) {
        pleft = Math.round(100 * pleft) / 100;
      } else {
        pleft = Math.round(10 * pleft) / 10;
      }
      plost = Math.round(10 * (100 - pleft)) / 10;
    }
    function converttosecs(t, dim) {
      if (dim === "seconds") {
        return sigfigs(t);
      }
      if (dim === "minutes") {
        return sigfigs(60 * t);
      }
      if (dim === "hours") {
        return sigfigs(3600 * t);
      }
      if (dim === "days") {
        return sigfigs(24 * 3600 * t);
      }
      if (dim === "years") {
        return sigfigs(365 * 24 * 3600 * t);
      }
    }
    function converttomins(t, dim) {
      if (dim === "seconds") {
        return sigfigs(t / 60);
      }
      if (dim === "minutes") {
        return sigfigs(t);
      }
      if (dim === "hours") {
        return sigfigs(60 * t);
      }
      if (dim === "days") {
        return sigfigs(24 * 60 * t);
      }
      if (dim === "years") {
        return sigfigs(365 * 24 * 60 * t);
      }
    }
    function converttohours(t, dim) {
      if (dim === "seconds") {
        return sigfigs(t / 3600);
      }
      if (dim === "minutes") {
        return sigfigs(t / 60);
      }
      if (dim === "hours") {
        return sigfigs(t);
      }
      if (dim === "days") {
        return sigfigs(24 * t);
      }
      if (dim === "years") {
        return sigfigs(365 * 24 * t);
      }
    }
    function converttodays(t, dim) {
      if (dim === "seconds") {
        return sigfigs(t / (24 * 3600));
      }
      if (dim === "minutes") {
        return sigfigs(t / (24 * 60));
      }
      if (dim === "hours") {
        return sigfigs(t / 24);
      }
      if (dim === "days") {
        return sigfigs(t);
      }
      if (dim === "years") {
        return sigfigs(365 * t);
      }
    }
    function converttoyears(t, dim) {
      if (dim === "seconds") {
        return sigfigs((t / 3600) * 24 * 365);
      }
      if (dim === "minutes") {
        return sigfigs(t / (60 * 24 * 365));
      }
      if (dim === "hours") {
        return sigfigs(t / (24 * 365));
      }
      if (dim === "days") {
        return sigfigs(t / 365);
      }
      if (dim === "years") {
        return sigfigs(t);
      }
    }
    function calck(h) {
      k = 0.693 / (1 * h);
      return sigfigs(k);
    }
    function sigfigs(f) {
      ex = 0;
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
          if (ex != 0) {
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

    function calchalf(k) {
      h = 0.693 / (1 * k);
      return sigfigs(h);
    }
    function showit(qust, qust2, rxn) {
      let html = `${qust} ${qust2}<br/><br/>${rxn}<br/>`;
      $("#question").html(html);
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
      // newone.document.writeln(qust, qust2, "<br><br>", rxn, "<br>");
      // newone.document.writeln(
      //   "<form>Enter Your Answer<input type=text name=ans size=6>"
      // );
      // newone.document.writeln(
      //   "<input type=button value='Submit' onClick='opener.answer(this.form.ans.value)'></form>"
      // );
      // newone.document.writeln("</font>");
      // newone.document.writeln("</html>");
      // newone.document.close();
      // newone.focus();
    }
    // function answer(ans) {
    //   if (tried === 1) {
    //     alert("You've already done this one. Get a new Problem!");
    //   } else {
    //     if (tried === 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if ((ans > 0.95 * theanswer) & (ans < 1.05 * theanswer)) {
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
