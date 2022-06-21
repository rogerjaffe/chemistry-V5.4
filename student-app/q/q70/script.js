(function (cp) {
  cp.setAnswers = (_this) => {
    const selected = $("input[type='radio'][name='answer']:checked");
    $("input[name='input']").val(selected.val());
    let isValid = selected.val().length > 0;
    document.getElementById("check-answer-button").disabled = !isValid;
  };

  cp.generateNewQuestion = () => {
    let firstletter = 0;
    let secondletter = 0;
    let theimage = "";
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function where(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
      this.p6 = p6;
      this.p7 = p7;
      this.p8 = p8;
      this.p9 = p9;
      this.p10 = p10;
      this.p11 = p11;
      this.p12 = p12;
    }
    let letters = new MakeArray(6);
    letters[1] = "A";
    letters[2] = "B";
    letters[3] = "C";
    letters[4] = "D";
    letters[5] = "E";
    letters[6] = "F";
    /*this is the position array. It provides the position in the equation of each variable. Each is two terms, with A being the first two, B the second two and so on. A 1 in the first position means the variable is on the left side, a 2 means the right side. A 1 in the second position means the variable is a numerator term a 2 means its a denominator term*/
    let anset = new MakeArray(20);
    anset[1] = new where(1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1);
    anset[2] = new where(1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2);
    anset[3] = new where(1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2);
    anset[4] = new where(1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2);
    anset[5] = new where(1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2);
    anset[6] = new where(1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2);
    anset[7] = new where(1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1);
    anset[8] = new where(1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2);
    anset[9] = new where(1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1);
    anset[10] = new where(1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2);

    function begin() {
      firstletter = Math.ceil(6 * Math.random());
      secondletter = firstletter;
      while (firstletter === secondletter) {
        secondletter = Math.ceil(6 * Math.random());
      }
      let whicheqn = Math.ceil(6 * Math.random());
      theimage = `<img class="equation" src="q/q70/equations/equation${whicheqn}.gif" />`;
      let lr1 = anset[whicheqn]["p" + (2 * firstletter - 1)];
      let tb1 = anset[whicheqn]["p" + 2 * firstletter];
      let lr2 = anset[whicheqn]["p" + (2 * secondletter - 1)];
      let tb2 = anset[whicheqn]["p" + 2 * secondletter];
      if (lr1 === lr2) {
        if (tb1 === tb2) {
          theanswer = "indirect";
        } else {
          theanswer = "direct";
        }
      } else {
        if (tb1 !== tb2) {
          theanswer = "indirect";
        } else {
          theanswer = "direct";
        }
      }
      let html = `${theimage}<br/> ${letters[firstletter]} and ${letters[secondletter]}`;
      $("#structure").html(html);
      // display();
    }

    // function display() {
    //   checkit = window.open("", "checkit", "scrollbars=yes,width=350,height=150");
    //   checkit.document.clear();
    //   checkit.document.writeln("<html>");
    //   checkit.document.writeln("<head><title>Direct/Indirect</title>");
    //   checkit.document.writeln("</head>");
    //   checkit.document.writeln("<body bgcolor = FFFFFF>");
    //   checkit.document.writeln(
    //     theimage,
    //     "<br>",
    //     letters[firstletter],
    //     " and ",
    //     letters[secondletter]
    //   );
    //   checkit.document.writeln(
    //     "<form><input type=radio name=ans  onClick='opener.answer(1)'><b>Direct</b>"
    //   );
    //   checkit.document.writeln(
    //     "<form><input type=radio name=ans  onClick='opener.answer(2)'><b>Inverse</b>"
    //   );
    //   checkit.document.writeln("</form></body>");
    //   checkit.document.writeln("</html>");
    //   checkit.document.close();
    //   checkit.focus();
    // }
    //obviously the timer function
    begin();
    const answerPayload = [
      {
        answer: theanswer,
        type: "string",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
