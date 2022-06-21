(function (cp) {
  cp.checkAnswers = function (answerPayload, studentAnswerPayload) {
    if (studentAnswerPayload.length !== answerPayload.length) {
      throw new Error("AnswerPayloadsAreDifferentSizesError");
    }
    let answers = [];
    for (let idx = 0; idx < studentAnswerPayload.length; idx++) {
      answers.push({
        student: studentAnswerPayload[idx],
        answerKey: answerPayload[idx],
      });
    }

    return answers.map((answerPair) => {
      switch (answerPair.answerKey.type ?? "number") {
        case "number":
          if (answerPair.answerKey.tolerance) {
            return window.cp.checkAnswerWithTolerance(
              answerPair.answerKey.answer,
              answerPair.student,
              answerPair.answerKey.tolerance
            );
          } else {
            return window.cp.checkAnswerWithoutTolerance(
              answerPair.answerKey.answer,
              answerPair.student
            );
          }

        case "string":
          return window.cp.checkAnswerAsString(
            answerPair.answerKey.answer,
            answerPair.student
          );

        default:
          return false;
      }
    });
  };

  cp.checkAnswerAsString = function (answerKey, student) {
    const a = answerKey.trim().toLowerCase().replace(/\s/g, "");
    const s = student.trim().toLowerCase().replace(/\s/g, "");
    return a === s;
  };

  cp.checkAnswerWithoutTolerance = function (answerKey, student) {
    answerKey = (answerKey + "").replace("/d/g", "");
    student = (student + "").replace("/d/g", "");
    return parseFloat(answerKey) === parseFloat(student);
  };

  cp.checkAnswerWithTolerance = function (answerKey, student, tolerance) {
    answerKey = (answerKey + "").replace(/\s/g, "");
    student = (student + "").replace(/\s/g, "");
    const theAnswer = parseFloat(answerKey);
    const theGuess = parseFloat(student);
    const tol = Math.abs(theAnswer * tolerance);
    const low = theAnswer - tol;
    const high = theAnswer + tol;
    return low <= theGuess && theGuess <= high;
  };
})((window.cp = window.cp || {}));
