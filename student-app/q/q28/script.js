(function (cp) {
  cp.generateNewQuestion = () => {
    let p = Math.pow(10, cp.Random.float());
    let v = Math.pow(10, cp.Random.float());
    let m = cp.Random.float();
    // Use the ideal gas equation to calculate T
    let t = (p * v) / (m * 0.0821);
    let pDim = "atm",
      vDim = "liters",
      tDim = "K";
    // Compute units
    if (cp.Random.boolean()) {
      p = p * 760;
      pDim = "torr";
    }
    if (cp.Random.boolean()) {
      v = v * 1000;
      vDim = "mL";
    }
    if (cp.Random.boolean()) {
      t = t - 273;
      tDim = "C";
    }
    const questions = [
      `What would the volume in <span class="parameter">${vDim}</span> be of an ideal gas if a <span class="parameter">${m.toFixed(
        2
      )} mole</span> sample had a temperature of <span class="parameter">${t.toFixed(
        2
      )} ${tDim}</span> at a pressure of <span class="parameter">${p.toFixed(
        2
      )} ${pDim}</span>?`,
      `How many <span class="parameter">moles</span> of an ideal gas are in a volume of <span class="parameter">${v.toFixed(
        2
      )} ${vDim}</span> with a temperature of <span class="parameter">${t.toFixed(
        2
      )} ${tDim}</span> and a pressure of <span class="parameter">${p.toFixed(
        2
      )} ${pDim}</span>?`,
      `What would the pressure in <span class="parameter">${pDim}</span> be of an ideal gas if a <span class="parameter">${m.toFixed(
        2
      )} mole</span> sample occupied a volume of <span class="parameter">${v.toFixed(
        2
      )} ${vDim}</span> at a temperature of <span class="parameter">${t.toFixed(
        2
      )} ${tDim}</span>?`,
      `What would the temperature in <span class="parameter">${tDim}</span> be of an ideal gas if a <span class="parameter">${m.toFixed(
        2
      )} mole</span> sample occupied a volume of <span class="parameter">${v.toFixed(
        2
      )} ${vDim}</span> at a pressure of <span class="parameter">${p.toFixed(
        2
      )} ${pDim}</span>?`,
    ];
    const qIdx = cp.Random.int(0, 3);
    const answers = [v, m, p, t];
    const answerPayload = {
      answer: answers[qIdx],
      tolerance: 0.05,
      type: "number",
    };
    $("#question").html(questions[qIdx]);
    window.cp.setAnswerPayload([answerPayload]);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
