(function (cp) {
  cp.generateNewQuestion = () => {
    let theanswer = 0;
    let which = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    let quest = new MakeArray(3);
    quest[1] = new question(
      "What is the density of a substance in ",
      ", if a sample with a volume of ",
      " has a mass of ",
      "?"
    );
    quest[2] = new question(
      "What volume in ",
      " would be occupied by ",
      " of a material with a density of ",
      "?"
    );
    quest[3] = new question(
      "What is the mass in ",
      " of a ",
      " sample, if it has a density of ",
      " ?"
    );

    function start() {
      var i = Math.round(0.5 + 3 * Math.random());
      if (i < 1) {
        i = 1;
      }
      let a = quest[i]["p1"];
      let b = quest[i]["p2"];
      let c = quest[i]["p3"];
      let d = quest[i]["p4"];
      let densgml = Math.round(1000 * Math.pow(10, Math.random())) / 1000;
      let massg = Math.pow(1000, Math.random());
      let volcc = massg / densgml;
      volcc = Math.round(1000 * volcc) / 1000;
      massg = Math.round(1000 * massg) / 1000;
      let mass, massunit;
      //choose mass unit
      let masspick = Math.random();
      if (masspick < 0.33) {
        mass = massg;
        massunit = " grams";
      } else {
        if (masspick < 0.67) {
          mass = Math.round(1000 * massg) / 1000000;
          massunit = " kg";
        } else {
          mass = Math.round(massg * 1000);
          massunit = " mg";
        }
      }
      let massfunit = "unit" + massunit;
      //choose volume unit
      let vol, volunit;
      let volpick = Math.random();
      if (volpick < 0.33) {
        vol = volcc;
        volunit = " cm<sup>3</sup>";
      } else {
        if (volpick < 0.67) {
          vol = volcc;
          volunit = " mL";
        } else {
          vol = Math.round(1000 * volcc) / 1000000;
          volunit = " liters";
        }
      }
      //calculate new density
      let denspick = Math.random();
      let g = Math.random();
      let density, densityunit;
      if (denspick < 0.25) {
        density = densgml;
        if (g < 0.5) {
          densityunit = " g/mL";
        } else {
          densityunit = " kg/L";
        }
      } else {
        if (denspick < 0.5) {
          density = 1000 * densgml;
          if (g < 0.5) {
            densityunit = " g/L";
          } else {
            densityunit = " mg/mL";
          }
        } else {
          if (denspick < 0.75) {
            density = Math.round(1000 * densgml) / 1000000;
            densityunit = " kg/mL";
          } else {
            density = 1e6 * densgml;
            densityunit = " mg/L";
          }
        }
      }
      if ((Math.random() > 0.33) & (volunit === "liters")) {
        vol = Math.round(1000000 * vol) / 1000;
        mass = Math.round(1000000 * mass) / 1000;
      }
      volf = vol + volunit;
      massf = mass + massunit;
      densityf = density + densityunit;
      if (i === 1) {
        tryit(a, b, c, d, densityunit, volf, massf);
        theanswer = density;
      }
      if (i === 2) {
        tryit(a, b, c, d, volunit, massf, densityf);
        theanswer = vol;
      }
      if (i === 3) {
        tryit(a, b, c, d, massunit, volf, densityf);
        theanswer = mass;
      }
    }
    function tryit(a, b, c, d, e, f, g) {
      let html = `${a}<b>${e}</b>${b}<b>${f}</b>${c}<b>${g}</b>${d}`;
      $("#question").html(html);
      // parent.frames[0].document.clear();
      // parent.frames[0].document.open();
      // parent.frames[0].document.writeln("<html>");
      // parent.frames[0].document.writeln("<head>");
      // parent.frames[0].document.writeln("</head>");
      // parent.frames[0].document.writeln("<body bgcolor = FFFFFF");
      // parent.frames[0].document.writeln("<font size = +1>");
      // parent.frames[0].document.writeln("");
      // parent.frames[0].document.write(a);
      // parent.frames[0].document.write("<b>", e, "</b>");
      // parent.frames[0].document.write(b);
      // parent.frames[0].document.write("<b>", f, "</b>");
      // parent.frames[0].document.write(c);
      // parent.frames[0].document.write("<b>", g, "</b>");
      // parent.frames[0].document.write(d);
      // parent.frames[0].document.writeln("<br>");
      // parent.frames[0].document.writeln("</font>");
      // parent.frames[0].document.close();
    }
    // function answer() {
    //   if (tried === 1) {
    //     alert(
    //       "Sorry, you've already submitted this problem! We'll get you a new one!"
    //     );
    //     start();
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if (
    //       (document.forms[0].ans.value > 0.95 * theanswer) &
    //       (document.forms[0].ans.value < 1.05 * theanswer)
    //     ) {
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
    //
    // const $mass = cp.Random.float(1, 10); // gm
    // const $volume = cp.Random.float(1, 10); // mL (cc)
    // const $density = $mass / $volume;
    // const units = {
    //   mass: [
    //     { units: "grams", factor: 1 },
    //     { units: "kg", factor: 0.001 },
    //     { units: "mg", factor: 1000 },
    //   ],
    //   volume: [
    //     { units: cp.library.cm3(), factor: 1 },
    //     { units: "ml", factor: 1 },
    //     { units: "L", factor: 0.001 },
    //   ],
    //   density: [
    //     { units: "g/mL", factor: 1 },
    //     { units: "kg/L", factor: 1 },
    //     { units: "g/L", factor: 1000 },
    //     { units: "mg/mL", factor: 1000 },
    //   ],
    // };
    // const o_mass = units.mass[cp.Random.int(0, units.mass.length - 1)];
    // const o_volume = units.volume[cp.Random.int(0, units.volume.length - 1)];
    // const o_density = units.density[cp.Random.int(0, units.density.length - 1)];
    // const mass = ($mass * o_mass.factor).toFixed(3);
    // const volume = ($volume * o_volume.factor).toFixed(3);
    // const density = ($density * o_density.factor).toFixed(3);
    //
    // const choice = cp.Random.int(0, 2);
    // const questions = [
    //   `What volume in <span class="parameter">${o_volume.units}</span> would be occupied by <span class="parameter">${mass} ${o_mass.units}</span> of a material with a density of <span class="parameter">${density} <span class="parameter">${o_density.units}</span>?`,
    //   `What is the mass in <span class="parameter">${o_mass.units}</span> of a <span class="parameter">${volume} ${o_volume.units}</span> sample, if it has a density of <span class="parameter">${density} ${o_density.units}</span>?`,
    //   `What is the density of a substance in <span class="parameter">${o_density.units}</span> if a sample with a volume of <span class="parameter">${volume} ${o_volume.units}</span> has a mass of <span class="parameter">${mass} ${o_mass.units}</span>?`,
    // ];
    start();
    const answerPayload = [
      {
        answer: theanswer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    // $("#question").html(questions[choice]);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
