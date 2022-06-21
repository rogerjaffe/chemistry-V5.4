(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();

    // tried = 0;
    // document.forms[0].results.value = "";
    // totl++;
    // document.forms[0].total.value = totl;
    // clear();
    let coef = cp.Random.int(1, 9) + "." + cp.Random.int(1, 99);
    let sign = cp.Random.boolean() ? "-" : "+";
    let exponent = sign + cp.Random.int(1, 8);
    let decimal = parseFloat(coef + "e" + exponent);
    // for (j = 1; j <= Math.abs(exponent); j++) {
    //   if (sign === "+") {
    //     decimal = decimal * 10;
    //   } else {
    //     decimal = decimal / 10;
    //   }
    // }
    decimal = "" + decimal;
    // if (decimal.length > 3 + Math.abs(exponent)) {
    //   totl--;
    //   start();
    // } else {
    //   document.forms[0].coeff.value = coef;
    //   document.forms[0].expon.value = exponent;
    //   document.forms[0].dec.value = decimal;
    // theanswer = decimal;
    // theanswer1 = coef;
    // theanswer2 = exponent;
    // which = Math.ceil(2 * Math.random());
    // if (which == 1) {
    //   option = 0;
    //   document.forms[0].dec.value = "";
    // }
    // if (which == 2) {
    //   option = 1;
    //   document.forms[0].coeff.value = "";
    //   document.forms[0].expon.value = "";
    // }

    // function setproblem() {
    //   which = Math.ceil(2 * Math.random());
    //   if (which == 1) {
    //     option = 0;
    //     document.forms[0].dec.value = "";
    //   }
    //   if (which == 2) {
    //     option = 1;
    //     document.forms[0].coeff.value = "";
    //     document.forms[0].expon.value = "";
    //   }
    // }
    // function answer() {
    //   if (tried == 1) {
    //     alert("You've already done this one. Get a new problem");
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     count = 0;
    //     if (option == 0) {
    //       if (1 * document.forms[0].dec.value == 1 * theanswer) {
    //         count = 1;
    //       }
    //     } else {
    //       if (
    //         (1 * document.forms[0].coeff.value == 1 * theanswer1) &
    //         (1 * document.forms[0].expon.value == 1 * theanswer2)
    //       ) {
    //         count = 1;
    //       }
    //     }
    //     if (count == 1) {
    //       corrt++;
    //       document.forms[0].results.value = "correct";
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

    // Fields: number, "=", coefficient, "x10", exponent
    const fields = [false, false, false, false, false];
    const choice = cp.Random.int(0, 2) * 2;
    fields[choice] = true;
    // const one = cp.Random.float(1, 10);
    // const two = cp.Random.float(1, 10);
    let vals = [decimal, "=", coef, "&times; 10", exponent];
    // vals = vals.map((v) => v.toFixed(2));
    cp.library.configureTableFields(fieldEls, fields, vals);

    const answerPayload = [
      {
        answer: vals[choice],
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
