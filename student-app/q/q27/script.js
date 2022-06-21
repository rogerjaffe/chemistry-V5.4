(function (cp) {
  cp.generateNewQuestion = () => {
    let P1 = Math.pow(10, cp.Random.float());
    let P2 = Math.pow(10, cp.Random.float());
    let V1 = Math.pow(10, cp.Random.float());
    let V2 = Math.pow(10, cp.Random.float());
    let T1 = cp.Random.float(0, 1000);
    let T2 = (P2 * V2 * T1) / (P1 * V1);
    let dimT1, dimT2, dimP1, dimP2, dimV1, dimV2;
    if (cp.Random.boolean()) {
      T1 = Math.round(T1 - 273);
      dimT1 = "C";
    } else {
      dimT1 = "K";
    }
    if (cp.Random.boolean()) {
      T2 = Math.round(T2 - 273);
      dimT2 = "C";
    } else {
      dimT2 = "K";
    }
    if (cp.Random.boolean()) {
      V1 = Math.round(V1 * 1000);
      dimV1 = "mL";
    } else {
      dimV1 = "L";
    }
    if (cp.Random.boolean()) {
      V2 = Math.round(V2 * 1000);
      dimV2 = "mL";
    } else {
      dimV2 = "L";
    }
    if (cp.Random.boolean()) {
      P1 = Math.round(P1 * 760);
      dimP1 = "torr";
    } else {
      dimP1 = "atm";
    }
    if (cp.Random.boolean()) {
      P2 = Math.round(P2 * 760);
      dimP2 = "torr";
    } else {
      dimP2 = "atm";
    }
    const keys = ["P1", "T1", "V1", "P2", "T2", "V2"];
    const vals = { P1, T1, V1, P2, T2, V2 };
    keys.forEach((key) => (vals[key] = vals[key].toFixed(2)));
    const dims = { dimP1, dimT1, dimV1, dimP2, dimT2, dimV2 };
    const answerIdx = cp.Random.int(0, 5);
    const answer = vals[keys[answerIdx]];
    vals[
      keys[answerIdx]
    ] = `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`;
    keys.forEach((key) =>
      $(`[name="${key}"`).html(`${vals[key]} ${dims["dim" + key]}`)
    );

    // let v1 = Math.pow(10, r.float());
    // let dimV1 = "L";
    // let v2 = Math.pow(10, r.float());
    // let dimV2 = "L";
    // let T1 = r.float(0, 1000);
    // let dimT1 = "K";
    // let T2 = v2 * (T1 / v1);
    // let dimT2 = "K";
    //
    // if (r.boolean()) {
    //   T1 = T1 - 273;
    //   dimT1 = "C";
    // }
    // if (r.boolean()) {
    //   T2 = T2 - 273;
    //   dimT2 = "C";
    // }
    // if (r.boolean()) {
    //   v1 = 1000 * v1;
    //   dimV1 = "ml";
    // }
    // if (r.boolean()) {
    //   v2 = 1000 * v2;
    //   dimV1 = "ml";
    // }
    //
    // const values = [T1, dimT1, v1, dimV1, "", T2, dimT2, v2, dimV2];
    // const answerIdx = r.int(0, 3);
    // const indexes = [0, 2, 5, 7];
    // const answer = values[indexes[answerIdx]];

    // return {
    //   questionPayload: {
    //     headers: [
    //       "T<sub>1</sub>",
    //       "",
    //       "V<sub>1</sub>",
    //       "",
    //       "",
    //       "T<sub>2</sub>",
    //       "",
    //       "V<sub>2</sub>",
    //       "",
    //     ],
    //     values: [
    //       answerIdx === 0 ? "$input-0" : T1.toFixed(2),
    //       dimT1,
    //       answerIdx === 1 ? "$input-0" : v1.toFixed(2),
    //       dimV1,
    //       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    //       answerIdx === 2 ? "$input-0" : T2.toFixed(2),
    //       dimT2,
    //       answerIdx === 3 ? "$input-0" : v2.toFixed(2),
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
    //       The combined gas law deals with gas systems where the quantity of the gas is kept constant. It permits the treatment of "changes of state where five of the remaining six possible variables are given. When you press "New Problem", all but one of the cells will fill. Pay close attention to all of the dimensions.
    //     </h6>`,
    //   },
    // };
    //
    const answerPayload = [
      {
        answer: answer + "",
        tolerance: 0.05,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    // let v1 = Math.pow(10, cp.Random.float());
    // let dimV1 = "L";
    // let v2 = Math.pow(10, cp.Random.float());
    // let dimV2 = "L";
    // let T1 = cp.Random.float(0, 1000);
    // let dimT1 = "K";
    // let T2 = v2 * (T1 / v1);
    // let dimT2 = "K";
    //
    // if (cp.Random.boolean()) {
    //   T1 = T1 - 273;
    //   dimT1 = "C";
    // }
    // if (cp.Random.boolean()) {
    //   T2 = T2 - 273;
    //   dimT2 = "C";
    // }
    // if (cp.Random.boolean()) {
    //   v1 = 1000 * v1;
    //   dimV1 = "ml";
    // }
    // if (cp.Random.boolean()) {
    //   v2 = 1000 * v2;
    //   dimV1 = "ml";
    // }
    //
    // const values = [T1, v1, T2, v2];
    // const answerIdx = cp.Random.int(0, 3);
    // const answer = values[answerIdx];
    // const question = [];
    // const input = `<input type="number" name="input" idx="0" class="input-with-other-content" onkeyup="window.cp.onAnswerChange(this)" />`;
    // answerIdx === 0
    //   ? question.push(input + `<span class="parameter">${dimT1}</span>`)
    //   : question.push(
    //       `<span class="parameter">${T1.toFixed(2)} ${dimT1}</span>`
    //     );
    // answerIdx === 1
    //   ? question.push(input + `<span class="parameter">${dimV1}</span>`)
    //   : question.push(
    //       `<span class="parameter">${v1.toFixed(2)} ${dimV1}</span>`
    //     );
    // answerIdx === 2
    //   ? question.push(input + `<span class="parameter">${dimT2}</span>`)
    //   : question.push(
    //       `<span class="parameter">${T2.toFixed(2)} ${dimT2}</span>`
    //     );
    // answerIdx === 3
    //   ? question.push(input + `<span class="parameter">${dimV2}</span>`)
    //   : question.push(
    //       `<span class="parameter">${v2.toFixed(2)} ${dimV1}</span>`
    //     );
    //
    // for (let i = 0; i < 4; i++) {
    //   $(`[name="${i}"`).html(question[i]);
    // }
    //
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
