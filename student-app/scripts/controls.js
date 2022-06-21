(function (cp) {
  cp.onClickQuestion = function (el) {
    window.location.href = el.getAttribute("data-url");
  };

  cp.onChangeFilter = function (el) {
    const filterText = el.value;
    const els = document.getElementsByName("item");
    for (const el of els) {
      if (el.innerText.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    }
  };

  cp.onAnswerChange = function (el) {
    const els = document.getElementsByName("input");
    let isValid = true;
    for (const el of els) {
      isValid = isValid && el.value.length > 0;
    }
    document.getElementById("check-answer-button").disabled = !isValid;
  };

  cp.newQuestion = function () {
    window.cp.generateNewQuestion();
    const el = document.getElementById("check-answer-button");
    el.style.display = "block";
    el.disabled = true;
    el.innerHTML = "Check answer";
    window.cp.setCorrectIncorrect(false, false);
    window.cp.clearInputs();
  };

  cp.setCorrectIncorrect = function (correct, incorrect) {
    document.getElementById("correct-btn").style.display = correct
      ? "block"
      : "none";
    document.getElementById("incorrect-btn").style.display = incorrect
      ? "block"
      : "none";
  };

  cp.clearInputs = function () {
    const els = document.getElementsByName("input");
    for (const el of els) {
      el.value = "";
    }
    const checkboxes = $('input[type="radio"], input[type="checkbox"]');
    for (const box of checkboxes) {
      $(box).prop("checked", false);
    }
  };

  cp.check = function () {
    const checkButton = document.getElementById("check-answer-button");
    checkButton.innerText = "Checking...";
    checkButton.disabled = true;
    const els = document.getElementsByName("input");
    const answers = [];
    for (const el of els) {
      const idx = parseInt(el.getAttribute("idx"), 10);
      answers[idx] = el.value;
    }
    const isCorrect = window.cp.checkAnswer(answers);
    const jwt = sessionStorage.getItem("jwt");
    const seq = document.getElementById("seq").value;
    window.cp.api.post(
      `${cp.API_URL}/log-answer`,
      { jwt, seq, isCorrect },
      (data) => {
        if (data.error) {
          document.location.href = "/expired.html";
        } else {
          sessionStorage.setItem("jwt", data.jwt);
          if (isCorrect) {
            window.cp.setCorrectIncorrect(true, false);
            window.cp.updateLog(true);
            window.cp.displayLog();
            document.getElementById("check-answer-button").disabled = true;
            checkButton.style.display = "none";
          } else {
            window.cp.setCorrectIncorrect(false, true);
            window.cp.updateLog(false);
            window.cp.displayLog();
            checkButton.disabled = false;
            checkButton.innerText = "Check answer";
          }
        }
      }
    );
  };
})((window.cp = window.cp || {}));
