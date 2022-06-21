(function (cp) {
  cp.generateNewQuestion = () => {
    let pH = cp.Random.float(0, 14);
    let pOH = 14.0 - pH;
    if (cp.Random.boolean()) {
      let temp = pH;
      pH = pOH;
      pOH = temp;
    }

    const hPlus = Math.pow(10, -pH);
    const ohPlus = Math.pow(10, -pOH);

    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const fields = [true, true, true, true];
    const choiceIdx = cp.Random.int(0, 3);
    fields[choiceIdx] = false;
    let vals = [pH, pOH, hPlus, ohPlus];
    const answerPayload = fields.reduce((ap, field, idx) => {
      if (field) {
        ap.push({ answer: vals[idx], type: "number", tolerance: 0.05 });
      }
      return ap;
    }, []);

    vals = vals.map((v) => {
      if (v.toFixed) {
        if (v < 1) {
          return v.toExponential(3);
        } else {
          return v.toFixed(2);
        }
      } else {
        return "";
      }
      // (v.toFixed ? v.toFixed(2) : "");
    });
    let idx = 0;
    for (let i = 0; i < vals.length; i++) {
      if (fields[i]) {
        $(fieldEls[i]).html(cp.library.inputFactory(idx, "text"));
        idx++;
      } else {
        $(fieldEls[i]).html(cp.library.spanFactory(0, vals[i]));
      }
    }
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
