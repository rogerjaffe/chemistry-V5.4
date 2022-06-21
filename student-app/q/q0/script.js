(function (cp) {
  cp.getInstructions = () => {
    return `<h5>Instructions</h5><h6>Test Function Title and/or Instructions</h6>`;
  };
  cp.getPanel1 = () => {
    return `<h5>Panel 1</h5><div>&lt;input&gt; tags must have name=&quot;input&quot; and idx=&quot;idx&quot; attributes</div><div>The answer for this question is <span id="a0" class="parameter"></span> with a +/-5% tolerance</div>`;
  };
  cp.getPanel2 = () => {};
  cp.generateNewQuestion = () => {
    answerPayload = [
      {
        answer: Math.trunc(Math.random() * 100) + "",
        tolerance: 0.05,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    const el = document.getElementById("a0");
    if (el) {
      el.innerHTML = answerPayload[0].answer;
    }
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
