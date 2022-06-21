(function (cp) {
  cp.generateNewQuestion = () => {
    const gmass = cp.Random.float(0.2, 0.8);
    const mgmass = gmass * 1000;
    const gew = cp.Random.float((10 * gmass) / 0.017);
    const equiv = gmass / gew;
    mlvol = 10000 * equiv;
    lvol = mlvol / 1000;
    let mass = gmass,
      massdim = "gram",
      vol = lvol,
      voldim = "liters";
    if (cp.Random.boolean()) {
      mass = mgmass;
      massdim = "mg";
    }
    if (cp.Random.boolean()) {
      vol = mlvol;
      voldim = "ml";
    }
    const which = cp.Random.int(0, 2);
    const var1s = [voldim, mass.toFixed(2) + " " + massdim, gew.toFixed(2)];
    const var2s = [
      mass.toFixed(2) + " " + massdim,
      vol.toFixed(2) + " " + voldim,
      vol.toFixed(2) + " " + voldim,
    ];
    const var3s = [gew.toFixed(2) + " grams", "", massdim];
    const answers = [vol, gew, mass];
    const var1 = var1s[which];
    const var2 = var2s[which];
    const var3 = var3s[which];
    const questions = [
      `What volume in <span class="parameter">${var1}</span> of <span class="parameter">.100M NaOH</span> would be required to titrate a <span class="parameter">${var2}</span> sample of a weak acid with an equivalent weight of <span class="parameter">${var3}</span>`,
      `The titration of a <span class="parameter">${var1}</span> sample of a weak acid requires <span class="parameter">${var2}</span> of <span class="parameter">.100M NaOH</span>. What is the equivalent weight of the acid?`,
      `The titration of a sample of a weak acid with an equivalent weight of <span class="parameter">${var1} gram</span> requires <span class="parameter">${var2}</span> of <span class="parameter">.100M NaOH</span>. What is the sample mass in <span class="parameter">${var3}</span>`,
    ];
    const question = questions[which];
    $("#q").html(question);
    const answerPayload = [
      {
        answer: answers[which],
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
