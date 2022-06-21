(function (cp) {
  cp.generateNewQuestion = () => {
    let l = cp.Random.int(0, 8);
    let ml = cp.Random.int(0, 8) * (cp.Random.int() < 0.5 ? -1 : 1);
    let n = cp.Random.int(1, 8);
    let syms = ["s", "p", "d", "f", "g", "h", "i", "j", "k"];
    let sym = syms[l];
    let questionType = cp.Random.int(0, 7);
    let v1, v2, ans;
    switch (questionType) {
      case 0:
        v1 = n;
        v2 = "";
        ans = n - 1;
        break;
      case 1:
        v1 = n;
        v2 = l;
        ans = l <= n - 1 ? "y" : "n";
        break;
      case 2:
        v1 = n;
        v2 = "";
        ans = n * n;
        break;
      case 3:
        v1 = n;
        v2 = "";
        ans = 2 * n * n;
        break;
      case 4:
        v1 = l;
        v2 = ml;
        ans = Math.abs(ml) <= l ? "y" : "n";
        break;
      case 5:
        v1 = l;
        v2 = "";
        ans = 2 * l + 1;
        break;
      case 6:
        v1 = n + sym;
        v2 = "";
        ans = l <= n - 1 ? "y" : "n";
        break;
      case 7:
        v1 = sym;
        v2 = "";
        ans = l;
    }

    const htmls = [
      `<span>
      For a principal quantum number <span class="parameter">n</span> equal to ${v1}, what is the largest
      allowed value of <span class="parameter">l</span>?
    </span>`,
      `<span>
      For a principal quantum number <span class="parameter">n</span> equal to ${v1}, is it possible for <span class="parameter">l</span> 
      to be equal to ${v2}?
    </span>`,
      `<span>
      For a principal quantum number <span class="parameter">n</span> equal to ${v1}, what is the total
      number of orbitals permitted?
    </span>`,
      `<span>
      For a principal quantum number <span class="parameter">n</span> equal to ${v1}, what is the total
      electron capacity of that level?
    </span>`,
      `<span>
      For the quantum number <span class="parameter">l</span> equal to ${v1}, is an <span class="parameter">ml</span> value of ${v2} permitted?
    </span>`,
      `<span>
      For the quantum number <span class="parameter">l</span> equal to ${v1}, how many orbitals of that type are permitted?
    </span>`,
      `<span>
      Is the <b>${v1}</b> orbital permitted?
    </span>`,
      `<span>
      What is the <span class="parameter">ml</span> quantum number for an <span class="bold">${v1}</span> orbital?)
    </span>`,
    ];

    $("#question").html(htmls[questionType]);
    const answerPayload = [
      {
        answer: ans + "",
        type: ans === "y" || ans === "n" ? "string" : "number",
      },
    ];
    let component;
    if (questionType === 1 || questionType === 4) {
      component = `
        <select class="input-small" name="input" idx="0" onchange="window.cp.onAnswerChange(this)">
          <option value="">Select...</option>
          <option value="y">Yes</option>
          <option value="n">No</option>
        </select>`;
    } else {
      component = `<input class="input-small" name="input" idx="0" onkeyup="window.cp.onAnswerChange(this)"/>`;
    }
    $("#answer-input").html(component);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
