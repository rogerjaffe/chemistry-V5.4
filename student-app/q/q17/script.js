(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    const hc = cp.compoundUtils.getRandomCompoundBySeq(17);
    const elements = cp.compoundUtils.getElements(hc.formula);
    const gC = elements.reduce(
      (total, el) => (el.symbol === "C" ? total + 12 * el.n : total),
      0
    );
    const gH = elements.reduce(
      (total, el) => (el.symbol === "H" ? total + el.n : total),
      0
    );
    const gfw = gC + gH;
    const mt = Math.pow(10, cp.Random.float()).toFixed(3);
    const mC = (mt * (gC / gfw)).toFixed(3);
    const mH = (mt * (gH / gfw)).toFixed(3);

    const vals = [cp.compoundUtils.getHtml(hc.formula), mt, mC, mH];
    const fieldSet = [
      [false, true, true, false],
      [false, true, false, true],
      [false, false, true, true],
    ];
    const answerPayloads = [
      [
        { answer: mt + "", tolerance: 0.05, type: "number" },
        { answer: mC + "", tolerance: 0.05, type: "number" },
      ],
      [
        { answer: mt + "", tolerance: 0.05, type: "number" },
        { answer: mH + "", tolerance: 0.05, type: "number" },
      ],
      [
        { answer: mC + "", tolerance: 0.05, type: "number" },
        { answer: mH + "", tolerance: 0.05, type: "number" },
      ],
    ];
    const choice = cp.Random.int(0, fieldSet.length - 1);
    window.cp.setAnswerPayload(answerPayloads[choice]);
    cp.library.configureTableFields(fieldEls, fieldSet[choice], vals);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
