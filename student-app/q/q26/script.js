(function (cp) {
  cp.generateNewQuestion = () => {
    let v1 = Math.pow(10, cp.Random.float());
    let dimV1 = "L";
    let v2 = Math.pow(10, cp.Random.float());
    let dimV2 = "L";
    let T1 = cp.Random.float(0, 1000);
    let dimT1 = "K";
    let T2 = v2 * (T1 / v1);
    let dimT2 = "K";

    if (cp.Random.boolean()) {
      T1 = T1 - 273;
      dimT1 = "C";
    }
    if (cp.Random.boolean()) {
      T2 = T2 - 273;
      dimT2 = "C";
    }
    if (cp.Random.boolean()) {
      v1 = 1000 * v1;
      dimV1 = "mL";
    }
    if (cp.Random.boolean()) {
      v2 = 1000 * v2;
      dimV2 = "mL";
    }

    const values = [T1, v1, T2, v2];
    const answerIdx = cp.Random.int(0, 3);
    const answer = values[answerIdx];
    const question = [];
    const input = `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`;
    answerIdx === 0
      ? question.push(input + `<span class="parameter">${dimT1}</span>`)
      : question.push(
          `<span class="parameter">${T1.toFixed(2)} ${dimT1}</span>`
        );
    answerIdx === 1
      ? question.push(input + `<span class="parameter">${dimV1}</span>`)
      : question.push(
          `<span class="parameter">${v1.toFixed(2)} ${dimV1}</span>`
        );
    answerIdx === 2
      ? question.push(input + `<span class="parameter">${dimT2}</span>`)
      : question.push(
          `<span class="parameter">${T2.toFixed(2)} ${dimT2}</span>`
        );
    answerIdx === 3
      ? question.push(input + `<span class="parameter">${dimV2}</span>`)
      : question.push(
          `<span class="parameter">${v2.toFixed(2)} ${dimV2}</span>`
        );

    for (let i = 0; i < 4; i++) {
      $(`[name="${i}"`).html(question[i]);
    }

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
