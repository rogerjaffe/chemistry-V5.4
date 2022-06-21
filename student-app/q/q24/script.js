(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();

    let v1 = Math.pow(10, cp.Random.float()).toFixed(2);
    let v2 = Math.pow(10, cp.Random.float()).toFixed(2);
    const n1 = cp.Random.float().toFixed(2);
    const n2 = (v2 * (n1 / v1)).toFixed(2);

    const dimV1 = cp.Random.boolean() ? "mL" : "L";
    if (dimV1 === "mL") v1 = (v1 * 1000).toFixed(2);
    const dimV2 = cp.Random.boolean() ? "mL" : "L";
    if (dimV2 === "mL") v2 = (v2 * 1000).toFixed(2);

    const values = [n1, v1, n2, v2];
    const answerIdx = cp.Random.int(0, 3);
    const data = [];
    if (answerIdx === 0) {
      data.push(
        `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`
      );
    } else {
      data.push(n1);
    }
    if (answerIdx === 1) {
      data.push(
        `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" /> ${dimV1}`
      );
    } else {
      data.push(v1 + " " + dimV1);
    }
    data.push("");
    if (answerIdx === 2) {
      data.push(
        `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`
      );
    } else {
      data.push(n2);
    }
    if (answerIdx === 3) {
      data.push(
        `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" /> ${dimV2}`
      );
    } else {
      data.push(v2 + " " + dimV2);
    }
    for (let i = 0; i < 5; i++) {
      $(`[name="${i}"`).html(data[i]);
    }

    // const answerIdx =
    //   3 <= _answerIdx && _answerIdx <= 4 ? _answerIdx + 2 : _answerIdx;
    // const answer = values[answerIdx];
    // const fieldSet = [false, false, false, false, false, false, false];
    // fieldSet[answerIdx] = true;

    // return {
    //   questionPayload: {
    //     headers: [
    //       "n<sub>1</sub>",
    //       "V<sub>1</sub>",
    //       "",
    //       "",
    //       "n<sub>2</sub>",
    //       "V<sub>2</sub>",
    //       "",
    //     ],
    //     values: [
    //       answerIdx === 0 ? "$input-0" : n1,
    //       answerIdx === 1 ? "$input-0" : v1,
    //       dimV1,
    //       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //       answerIdx === 2 ? "$input-0" : n2,
    //       answerIdx === 3 ? "$input-0" : v2,
    //       dimV2,
    //     ],
    //     template: "table",
    //     width: "",
    //     cellPadding: "5px",
    //     cellSpacing: "5px",
    //     borders: true,
    //     answerCount: 1,
    //     skeletonCount: 7,
    //     title: `<h6>
    //       Avogadro's Law states that under conditions of constant pressure and temperature, there is a direct relationship between the volume and number of moles for an ideal gas. Calculate the missing quantity, paying close attention to all of the dimensions.
    //     </h6>`,
    //   },
    //   answerPayload: [
    //     {
    //       answer: answer + "",
    //       useTolerance: true,
    //       tolerance: 0.05,
    //       type: "number",
    //     },
    //   ],
    // };
    const answerPayload = [
      {
        answer: values[answerIdx] + "",
        tolerance: 0.05,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    // cp.library.configureTableFields(fieldEls, fieldSet, values);

    // const fieldEls = $('[name="fields"]');
    // fieldEls.empty();
    // const hc = cp.compoundUtils.getRandomCompoundBySeq(17);
    // const elements = cp.compoundUtils.getElements(hc.formula);
    // const gC = elements.reduce(
    //   (total, el) => (el.symbol === "C" ? total + 12 * el.n : total),
    //   0
    // );
    // const gH = elements.reduce(
    //   (total, el) => (el.symbol === "H" ? total + el.n : total),
    //   0
    // );
    // const gfw = gC + gH;
    // const mt = Math.pow(10, cp.Random.float()).toFixed(3);
    // const mC = (mt * (gC / gfw)).toFixed(3);
    // const mH = (mt * (gH / gfw)).toFixed(3);
    //
    // const vals = [cp.compoundUtils.getHtml(hc.formula), mt, mC, mH];
    // const fieldSet = [
    //   [false, true, true, false],
    //   [false, true, false, true],
    //   [false, false, true, true],
    // ];
    // const answerPayloads = [
    //   [
    //     { answer: mt + "", tolerance: 0.05, type: "number" },
    //     { answer: mC + "", tolerance: 0.05, type: "number" },
    //   ],
    //   [
    //     { answer: mt + "", tolerance: 0.05, type: "number" },
    //     { answer: mH + "", tolerance: 0.05, type: "number" },
    //   ],
    //   [
    //     { answer: mC + "", tolerance: 0.05, type: "number" },
    //     { answer: mH + "", tolerance: 0.05, type: "number" },
    //   ],
    // ];
    // const choice = cp.Random.int(0, vals.length - 1);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
