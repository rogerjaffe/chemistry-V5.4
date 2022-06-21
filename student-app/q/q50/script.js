(function (cp) {
  cp.setAnswers = (_this) => {
    const selected = $("input[type='radio'][name='answer']:checked");
    $("input[name='input']").val(selected.val());
    let isValid = selected.val().length > 0;
    document.getElementById("check-answer-button").disabled = !isValid;
  };

  cp.generateNewQuestion = () => {
    const matrix = {
      length: {
        units: ["inch", "feet", "yard", "cm", "m", "mm"],
        answer: [
          [0, -1, -1, 1, -1, 1],
          [1, 0, -1, 1, 0, 1],
          [1, 1, 0, 1, -1, 1],
          [-1, -1, -1, 0, -1, 1],
          [1, 1, 1, 1, 0, 1],
          [1, 1, 1, 1, 1, 0],
        ],
      },
      density: {
        units: ["g/ml", "g/l", "kg/l", "mg/l", "mg/ml"],
        answer: [
          [0, 1, 0, 1, 1],
          [-1, 0, -1, 1, 0],
          [0, 1, 0, 1, 1],
          [-1, -1, -1, 0, -1],
          [-1, 1, 0, 1, 0],
        ],
      },
      mass: {
        units: ["lb", "oz", "gram", "mg", "kg"],
        answer: [
          [0, 1, 1, 1, -1],
          [-1, 0, 1, 1, 0],
          [-1, -1, 0, 1, -1],
          [-1, -1, -1, 0, -1],
          [-1, -1, -1, -1, 0],
        ],
      },
      volume: {
        units: ["quart", "oz", "gal", "ml", "liter"],
        answer: [
          [0, 1, -1, 1, -1],
          [-1, 0, -1, 1, -1],
          [1, -1, 0, 1, 1],
          [-1, -1, -1, 0, -1],
          [1, 1, -1, 1, 0],
        ],
      },
    };
    const types = ["length", "density", "mass", "volume"];
    const [type] = cp.library.chooseN(types, 1);
    const vals = matrix[type];
    const fromIdx = cp.Random.int(0, vals.units.length - 1);
    const toIdx = cp.Random.int(0, vals.units.length - 1);
    const value = cp.Random.float(0, 10000);
    const ans = vals.answer[fromIdx][toIdx];
    let answer = "same";
    if (ans < 0) {
      answer = "smaller";
    } else if (ans > 0) {
      answer = "larger";
    }

    const answerPayload = [
      {
        answer,
        type: "string",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
    document.getElementById("val1").innerHTML = cp.library.format(value, 3);
    document.getElementById("unit1").innerHTML = vals.units[fromIdx];
    document.getElementById("unit2").innerHTML = vals.units[toIdx];
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
