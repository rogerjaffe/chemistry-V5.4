(function (cp) {
  cp.generateNewQuestion = () => {
    let v1 = Math.pow(10, cp.Random.float());
    let dimV1 = "L";
    let p1 = Math.pow(10, cp.Random.float());
    let dimP1 = "atm";
    let v2 = Math.pow(10, cp.Random.float());
    let dimV2 = "L";
    let p2 = (v1 * p1) / v2;
    let dimP2 = "atm";

    if (cp.Random.boolean()) {
      v1 = 1000 * v1;
      dimV1 = "mL";
    }
    if (cp.Random.boolean()) {
      p1 = 760 * p1;
      dimP1 = "torr";
    }
    if (cp.Random.boolean()) {
      v2 = 1000 * v2;
      dimV2 = "mL";
    }
    if (cp.Random.boolean()) {
      p2 = 760 * p2;
      dimP2 = "torr";
    }

    const question = [];
    const answerIdx = cp.Random.int(0, 3);
    const input = `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`;
    answerIdx === 0
      ? question.push(input + `<span class="parameter">${dimP1}</span>`)
      : question.push(
          `<span class="parameter">${p1.toFixed(2)} ${dimP1}</span>`
        );
    answerIdx === 1
      ? question.push(input + `<span class="parameter">${dimV1}</span>`)
      : question.push(
          `<span class="parameter">${v1.toFixed(2)} ${dimV1}</span>`
        );
    answerIdx === 2
      ? question.push(input + `<span class="parameter">${dimP2}</span>`)
      : question.push(
          `<span class="parameter">${p2.toFixed(2)} ${dimP2}</span>`
        );
    answerIdx === 3
      ? question.push(input + `<span class="parameter">${dimV2}</span>`)
      : question.push(
          `<span class="parameter">${v2.toFixed(2)} ${dimV2}</span>`
        );

    for (let i = 0; i < 4; i++) {
      $(`[name="${i}"`).html(question[i]);
    }

    const values = [p1, v1, p2, v2];
    const answerPayload = [
      {
        answer: values[answerIdx] + "",
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
