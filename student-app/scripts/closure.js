(function (cp) {
  cp.getSeq = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("seq");
  };

  cp.closure = () => {
    let answerPayload;
    const jwt = sessionStorage.getItem("jwt");
    window.cp.api.post(
      `${cp.API_URL}/refresh-jwt`,
      { jwt, EXPIRE_SECONDS: 3600 },
      (data) => {
        if (data.error) {
          document.location.href = "/expired.html";
        } else {
          sessionStorage.setItem("jwt", data.jwt);
        }
        $("#jwt").val(jwt);
      }
    );
    return {
      checkAnswer: (studentAnswers) => {
        const isCorrectArr = cp.checkAnswers(answerPayload, studentAnswers);
        return isCorrectArr.every((it) => it);
      },
      setAnswerPayload: (_answerPayload) => {
        answerPayload = _answerPayload;
      },
      getJwt: () => jwt,
    };
  };
})((window.cp = window.cp || {}));

window.onload = () => {
  window.cp = { ...window.cp, ...window.cp.closure() };
  const seq = window.cp.getSeq();
  window.cp.injectQuestionList(seq);
  if (document.location.pathname.includes("question")) {
    window.cp.displayLog();
    const q = window.cp.findQuestion(seq);
    window.cp.loadContent(q);
  }
};
