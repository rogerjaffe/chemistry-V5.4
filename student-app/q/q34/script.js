(function (cp) {
  cp.generateNewQuestion = () => {
    let which = "";
    let theanswer = "";
    let ans = new Array();
    function data(cmpd, type, K) {
      this.cmpd = cmpd;
      this.type = type;
      this.K = K;
    }
    let c1 = new data("acetic", "a", 1.8e-5);
    let c2 = new data("ammonia", "b", 1.8e-5);
    let c3 = new data("acrylic", "a", 5.5e-5);
    let c4 = new data("aniline", "b", 7.4e-10);
    let c5 = new data("benzoic", "a", 6.3e-5);
    let c6 = new data("codeine", "b", 8.8e-7);
    let c7 = new data("chloroacetic", "a", 1.4e-3);
    let c8 = new data("ethylamine", "b", 4.3e-4);
    let c9 = new data("formic", "a", 1.8e-4);
    let c10 = new data("pyridine", "b", 1.5e-9);
    function choose() {
      let g = Math.random();
      if (g < 0.1) {
        calculate(c1);
      } else {
        if (g < 0.2) {
          calculate(c2);
        } else {
          if (g < 0.3) {
            calculate(c3);
          } else {
            if (g < 0.4) {
              calculate(c4);
            } else {
              if (g < 0.5) {
                calculate(c5);
              } else {
                if (g < 0.6) {
                  calculate(c6);
                } else {
                  if (g < 0.7) {
                    calculate(c7);
                  } else {
                    if (g < 0.8) {
                      calculate(c8);
                    } else {
                      if (g < 0.9) {
                        calculate(c9);
                      } else {
                        calculate(c10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    function calculate(a) {
      var conc = Math.round(100 * Math.pow(10, Math.random())) / 100;
      let f = "";
      let h = Math.random();
      if (h < 0.25) {
        f = "e-1";
      } else {
        if (h < 0.5) {
          f = "e-2";
        } else {
          if (h < 0.75) {
            f = "e-3";
          }
        }
      }
      conc = conc + f;
      var first =
        Math.log(
          (-a["K"] + Math.sqrt(a["K"] * a["K"] + 4 * a["K"] * conc)) / 2
        ) / 2.302;
      first = Math.round(-100 * first) / 100;
      $("#f1").html(a["cmpd"]);
      $("#f2").html(conc);
      $("#f3")
        .html(`<input type="number" name="input" idx="0" className="input-small"
                           onKeyUp="window.cp.onAnswerChange(this)" />`);
      // document.forms[0].first.value=a["cmpd"]
      // document.forms[0].second.value=conc
      if (a["type"] === "a") {
        theanswer = first;
      } else {
        theanswer = Math.round(100 * (14 - first)) / 100;
      }
      // document.forms[0].third.focus()
      // document.forms[0].third.select()
    }

    // const substance = cp.getRandomPhSubstance();
    // let conc = Math.pow(10, cp.Random.float()).toFixed(2);
    // let fs = [
    //   "",
    //   " &times; 10<sup>-1</sup>",
    //   " &times; 10<sup>-2</sup>",
    //   " &times; 10<sup>-3</sup>",
    // ];
    // let f = fs[cp.Random.int(0, fs.length - 1)];
    // conc += f;
    // const first =
    //   Math.log(
    //     (-substance.K +
    //       Math.sqrt(
    //         substance.K * substance.K + 4 * substance.K * parseFloat(conc)
    //       )) /
    //       2
    //   ) / -2.302;
    // let answer;
    // if (substance.type === "a") {
    //   answer = first;
    // } else {
    //   answer = 14 - first;
    // }
    //
    // const fieldEls = $('[name="fields"]');
    // fieldEls.empty();
    // const fields = [false, false, true];
    // const vals = [substance.name, conc, 0];
    // cp.library.configureTableFields(fieldEls, fields, vals);

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
