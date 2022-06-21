(function (cp) {
  cp.generateNewQuestion = () => {
    const weak = (type, compound, ci) => {
      var Ki = compound.K;
      var first =
        Math.log((-Ki + Math.sqrt(Ki * Ki + 4 * Ki * ci)) / 2) / 2.302;
      first = Math.round(-100 * first) / 100;
      let pH, pOH;
      if (type === "weakAcids") {
        pH = first;
        pOH = 14 - pH;
      } else {
        pOH = first;
        pH = 14 - pOH;
      }
      H = Math.pow(10, -pH);
      OH = Math.pow(10, -pOH);
      ion = (100 * Math.pow(10, -first)) / ci;
      con = Math.pow(10, -first);
      init = ci - Math.pow(10, -first);
      return { pH, pOH, H, OH, init, con, ion };
      // sendanswer(pH, pOH, H, OH, init, con, ion, p);
    };

    const strongAcid = (compound, ci) => {
      var pH = -Math.log(ci) / 2.302;
      var pOH = 14 - pH;
      H = Math.pow(10, -pH);
      OH = 1e-14 / H;
      init = 0;
      con = ci;
      ion = 100;
      return { pH, pOH, H, OH, init, con, ion };
      // sendanswer(pH, pOH, H, OH, init, con, ion, p);
    };

    const strongBase = (compound, ci) => {
      var pOH = -Math.log(ci) / 2.302;
      var pH = 14 - pOH;
      H = Math.pow(10, -pH);
      OH = 1e-14 / H;
      init = 0;
      con = ci;
      ion = 100;
      return { pH, pOH, H, OH, init, con, ion };
      // sendanswer(pH, pOH, H, OH, init, con, ion, p);
    };

    const neutral = (compound, ci) => {
      var pH = 7;
      var pOH = 7;
      H = 1e-7;
      OH = 1e-7;
      init = 0;
      con = 0;
      ion = 0;
      return { pH, pOH, H, OH, init, con, ion };
      // sendanswer(pH, pOH, H, OH, init, con, ion, p);
    };

    const types = [
      "strongAcids",
      "strongBases",
      "neutral",
      "weakAcids",
      "weakBases",
    ];
    const type = types[cp.Random.int(0, types.length - 1)];
    const compound = cp.getRandomAcidOrBase(type);
    const ci = cp.Random.float(0.001, 0.5);
    const p = cp.Random.int(0, 6);

    console.log("type: ", type);
    let parms;
    switch (type) {
      case "strongAcids":
        parms = strongAcid(compound, ci);
        break;
      case "strongBases":
        parms = strongBase(compound, ci);
        break;
      case "neutral":
        parms = neutral(compound, ci);
        break;
      case "weakAcids":
      case "weakBases":
        parms = weak(type, compound, ci);
        break;
    }
    const wordPart = [
      "<b>pH</b>",
      "<b>pOH</b>",
      "<b>[H<sup>+</sup>]</b>",
      "<b>[OH<sup>-</sup>]</b>",
      "<b>[" + compound.formula + "]</b>",
      "<b>[" + compound.conjugate + "]</b>",
      "<b>% ionization</b>",
    ];
    console.log(p);
    const question = `What would the ${
      wordPart[p]
    } be for a <span class="parameter">${ci.toFixed(
      2
    )}</span> molar solution of <span class="parameter">${
      compound.name
    }</span>?`;
    $("#q").html(question);
    const answers = [
      parms.pH,
      parms.pOH,
      parms.H,
      parms.OH,
      parms.init,
      parms.con,
      parms.ion,
    ];
    const answerPayload = [
      {
        answer: answers[p],
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
