(function (cp) {
  cp.generateNewQuestion = () => {
    const equation = cp.equations.getRandomEquation();
    const left = [],
      right = [],
      answers = [];
    equation.left.forEach((d, idx) => {
      // input.input-small(type="number" name="input" idx="0" onkeyup="window.cp.onAnswerChange(this)")
      const i = `<input type="number" class="input-two-digit" name="input" idx="${idx}" onkeyup="window.cp.onAnswerChange(this)" />`;
      left.push(i);
      left.push(
        `<span class="parameter">${cp.compoundUtils.getHtml(d.formula)}</span>`
      );
      if (idx < equation.left.length - 1) {
        left.push(`<span>+</span>`);
      }
      answers.push({ answer: d.coefficient + "", type: "number" });
    });
    equation.right.forEach((d, idx) => {
      const i = `<input type="number" class="input-two-digit" name="input" idx="${
        equation.left.length + idx
      }" onkeyup="window.cp.onAnswerChange(this)" />`;
      right.push(i);
      right.push(
        `<span class="parameter">${cp.compoundUtils.getHtml(d.formula)}</span>`
      );
      if (idx < equation.right.length - 1) {
        right.push(`<span>+</span>`);
      }
      answers.push({ answer: d.coefficient + "", type: "number" });
    });
    const html = left.concat([" =&gt; "]).concat(right);
    $("#question").html(html);
    window.cp.setAnswerPayload(answers);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
