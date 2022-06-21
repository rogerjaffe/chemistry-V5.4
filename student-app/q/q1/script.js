(function (cp) {
  cp.generateNewQuestion = () => {
    howlong = "";
    totl = 0;
    corrt = 0;
    tried = 0;
    which = "";
    tried = 0;
    let theanswer = "";

    function begin() {
      var a = 100;
      while (a >= 10) {
        a = Math.pow(55, Math.random());
      }
      var sig = 0;
      while (sig < 1 || sig > 5) {
        sig = Math.round(0.5 + Math.pow(8, Math.random()));
      }
      num = Math.round(a * Math.pow(10, sig));
      if (num % 10 === 0) {
        num = num + 1;
      }
      var start = Math.random();
      if (start < 0.2) {
        first(a, num, sig);
      } else {
        if (start < 0.4) {
          second(a, num, sig);
        } else {
          if (start < 0.6) {
            third(a, num, sig);
          } else {
            if (start < 0.8) {
              fourth(a, num, sig);
            } else {
              fifth(a, num, sig);
            }
          }
        }
      }
    }

    function first(a, num, sig) {
      let sign;
      anew = Math.round(a * Math.pow(10, sig)) / Math.pow(10, sig);
      if (Math.random() > 0.5) {
        sign = "+";
      } else {
        sign = "-";
      }
      var power = Math.round(Math.pow(1.3, Math.pow(10, Math.random())));
      g = Math.random();
      let b;
      if (g < 0.25) {
        b = "";
      } else {
        if (g < 0.5) {
          b = "0";
        } else {
          b = "00";
        }
      }
      $("#a1").html(anew + b + "e" + sign + power);
      theanswer = sig + 1 + b.length;
    }

    function second(a, num, sig) {
      $("#a1").html(num);
      theanswer = sig + 1;
    }

    function third(a, num, sig) {
      g = Math.random();
      let b;
      if (g < 0.25) {
        b = "";
      } else {
        if (g < 0.5) {
          b = "0";
        } else {
          b = "00";
        }
      }
      $("#a1").html("." + b + num);
      theanswer = sig + 1;
    }

    function fourth(a, num, sig) {
      g = Math.random();
      let b;
      if (g < 0.25) {
        b = "";
      } else {
        if (g < 0.5) {
          b = "0";
        } else {
          b = "00";
        }
      }
      $("#a1").html(num + "." + b);
      theanswer = sig + 1 + b.length;
    }

    function fifth(a, num, sig) {
      g = Math.random();
      let b;
      if (g < 0.25) {
        b = "";
      } else {
        if (g < 0.5) {
          b = "0";
        } else {
          b = "00";
        }
      }
      $("#a1").html(num + b);
      theanswer = sig + 1;
    }

    begin();
    const answerPayload = [
      {
        answer: theanswer,
        type: "number",
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
