(function (cp) {
  cp.setAnswers = (_this) => {
    const selected = $("input[type='radio'][name='answer']:checked");
    $("input[name='input']").val(selected.val());
    let isValid = selected.val().length > 0;
    document.getElementById("check-answer-button").disabled = !isValid;
  };

  cp.generateNewQuestion = () => {
    let structure = "";
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function dataset(cmpd, type) {
      this.cmpd = cmpd;
      this.type = type;
    }
    let compound = new MakeArray(100);
    compound[1] = new dataset("<U>C</U>H<sub>4</sub>", "sp3");
    compound[2] = new dataset("<U><b>C</b></U>F<sub>4</sub>", "sp3");
    compound[3] = new dataset("<U><b>C</b></U>O<sub>2</sub>", "sp");
    compound[4] = new dataset("<U><b>C</b></U>Cl<sub>4</sub>", "sp3");
    compound[5] = new dataset("H<sub>2</sub><U><b>O</b></U>", "sp3");
    compound[6] = new dataset("H<sub>2</sub><U><b>C</b></U>=O", "sp2");
    compound[7] = new dataset("<U><B>C</B></U>O", "sp");
    compound[8] = new dataset(
      "H<sub>2</sub><U><b>C</b></U>=CH<sub>2</sub>",
      "sp2"
    );
    compound[9] = new dataset("<B><U>B</U></B>F<SUB>3</SUB>", "sp2");
    compound[10] = new dataset("<B><U>B</U></B>Cl<SUB>3</SUB>", "sp2");
    compound[11] = new dataset("H<B><U>C</U></B>N:", "sp");
    compound[12] = new dataset(":<B><U>N</U></B>H<SUB>3</SUB>", "sp3");
    compound[13] = new dataset("H<U><B>C</B></U>CH", "sp");
    compound[14] = new dataset("H<sub>2</sub><B><U>S</U></B>", "cbd");
    compound[15] = new dataset(
      "<img src='q/q68/structs/struct1.gif'></img>",
      "sp"
    );
    compound[16] = new dataset(
      "<img src='q/q68/structs/struct2.gif' />",
      "sp2"
    );
    compound[17] = new dataset(
      "<img src='q/q68/structs/struct3.gif' />",
      "sp3"
    );
    compound[18] = new dataset(
      "<img src='q/q68/structs/struct4.gif' />",
      "none"
    );
    compound[19] = new dataset(
      "<img src='q/q68/structs/struct5.gif' />",
      "cbd"
    );
    compound[20] = new dataset(
      "<img src='q/q68/structs/struct6.gif' />",
      "sp2"
    );
    compound[21] = new dataset(
      "<img src='q/q68/structs/struct7.gif' />",
      "sp2"
    );
    compound[22] = new dataset(
      "<img src='q/q68/structs/struct8.gif' />",
      "sp3"
    );
    compound[23] = new dataset(
      "<img src='q/q68/structs/struct9.gif' />",
      "sp3"
    );
    compound[24] = new dataset(
      "<img src='q/q68/structs/struct10.gif' />",
      "sp3"
    );
    compound[25] = new dataset(
      "<img src='q/q68/structs/struct11.gif' />",
      "sp2"
    );
    compound[26] = new dataset(
      "<img src='q/q68/structs/struct12.gif' />",
      "sp2"
    );
    compound[27] = new dataset(
      "<img src='q/q68/structs/struct13.gif' />",
      "cbd"
    );
    compound[28] = new dataset(
      "<img src='q/q68/structs/struct14.gif' />",
      "none"
    );
    compound[29] = new dataset(
      "<img src='q/q68/structs/struct15.gif' />",
      "sp2"
    );
    compound[30] = new dataset(
      "<img src='q/q68/structs/struct16.gif' />",
      "sp2"
    );
    compound[31] = new dataset(
      "<img src='q/q68/structs/struct17.gif' />",
      "sp2"
    );
    compound[32] = new dataset(
      "<img src='q/q68/structs/struct18.gif' />",
      "sp3"
    );
    compound[33] = new dataset(
      "<img src='q/q68/structs/struct19.gif' />",
      "sp3"
    );
    compound[34] = new dataset(
      "<img src='q/q68/structs/struct20.gif' />",
      "sp3"
    );
    compound[35] = new dataset(
      "<img src='q/q68/structs/struct21.gif' />",
      "none"
    );
    compound[36] = new dataset(
      "<img src='q/q68/structs/struct22.gif' />",
      "sp2"
    );
    compound[37] = new dataset(
      "<img src='q/q68/structs/struct23.gif' />",
      "sp3"
    );
    compound[38] = new dataset(
      "<img src='q/q68/structs/struct24.gif' />",
      "sp2"
    );
    compound[39] = new dataset(
      "<img src='q/q68/structs/struct25.gif' />",
      "sp2"
    );
    compound[40] = new dataset(
      "<img src='q/q68/structs/struct26.gif' />",
      "sp"
    );
    compound[41] = new dataset(
      "<img src='q/q68/structs/struct27.gif' />",
      "sp"
    );
    compound[42] = new dataset(
      "<img src='q/q68/structs/struct28.gif' />",
      "sp2"
    );
    compound[43] = new dataset(
      "<img src='q/q68/structs/struct29.gif' />",
      "cbd"
    );
    compound[44] = new dataset(
      "<img src='q/q68/structs/struct30.gif' />",
      "sp3"
    );
    compound[45] = new dataset(
      "<img src='q/q68/structs/struct31.gif' />",
      "none"
    );
    compound[46] = new dataset(
      "<img src='q/q68/structs/struct32.gif' />",
      "sp2"
    );
    compound[47] = new dataset(
      "<img src='q/q68/structs/struct33.gif' />",
      "cbd"
    );
    compound[48] = new dataset(
      "<img src='q/q68/structs/struct34.gif' />",
      "sp3"
    );
    compound[49] = new dataset(
      "<img src='q/q68/structs/struct35.gif' />",
      "sp2"
    );
    compound[50] = new dataset(
      "<img src='q/q68/structs/struct36.gif' />",
      "none"
    );
    compound[51] = new dataset(
      "<img src='q/q68/structs/struct37.gif' />",
      "sp"
    );
    compound[52] = new dataset(
      "<img src='q/q68/structs/struct38.gif' />",
      "sp"
    );
    compound[53] = new dataset(
      "<img src='q/q68/structs/struct39.gif' />",
      "sp2"
    );
    compound[54] = new dataset(
      "<img src='q/q68/structs/struct40.gif' />",
      "sp"
    );
    compound[55] = new dataset(
      "<img src='q/q68/structs/struct41.gif' />",
      "sp"
    );
    compound[56] = new dataset(
      "<img src='q/q68/structs/struct42.gif' />",
      "sp3"
    );
    compound[57] = new dataset(
      "<img src='q/q68/structs/struct43.gif' />",
      "sp2"
    );
    compound[58] = new dataset(
      "<img src='q/q68/structs/struct44.gif' />",
      "sp"
    );
    compound[59] = new dataset(
      "<img src='q/q68/structs/struct45.gif' />",
      "cbd"
    );
    compound[60] = new dataset(
      "<img src='q/q68/structs/struct46.gif' />",
      "sp"
    );
    compound[61] = new dataset(
      "<img src='q/q68/structs/struct47.gif' />",
      "sp"
    );
    compound[62] = new dataset(
      "<img src='q/q68/structs/struct48.gif' />",
      "sp"
    );
    compound[63] = new dataset(
      "<img src='q/q68/structs/struct49.gif' />",
      "sp"
    );
    compound[64] = new dataset(
      "<img src='q/q68/structs/struct50.gif' />",
      "sp3"
    );
    compound[65] = new dataset(
      "<img src='q/q68/structs/struct51.gif' />",
      "sp3"
    );
    compound[66] = new dataset(
      "<img src='q/q68/structs/struct52.gif' />",
      "sp3"
    );
    compound[67] = new dataset(
      "<img src='q/q68/structs/struct53.gif' />",
      "sp"
    );
    compound[68] = new dataset(
      "<img src='q/q68/structs/struct54.gif' />",
      "sp"
    );
    compound[69] = new dataset(
      "<img src='q/q68/structs/struct55.gif' />",
      "cbd"
    );
    compound[70] = new dataset(
      "<img src='q/q68/structs/struct56.gif' />",
      "sp2"
    );
    compound[71] = new dataset(
      "<img src='q/q68/structs/struct57.gif' />",
      "sp3"
    );
    compound[72] = new dataset(
      "<img src='q/q68/structs/struct58.gif' />",
      "none"
    );
    compound[73] = new dataset(
      "<img src='q/q68/structs/struct59.gif' />",
      "cbd"
    );
    compound[74] = new dataset(
      "<img src='q/q68/structs/struct60.gif' />",
      "sp3"
    );
    compound[75] = new dataset(
      "<img src='q/q68/structs/struct61.gif' />",
      "sp3"
    );
    compound[76] = new dataset(
      "<img src='q/q68/structs/struct62.gif' />",
      "cbd"
    );
    compound[77] = new dataset(
      "<img src='q/q68/structs/struct63.gif' />",
      "none"
    );
    compound[78] = new dataset(
      "<img src='q/q68/structs/struct64.gif' />",
      "sp2"
    );
    compound[79] = new dataset(
      "<img src='q/q68/structs/struct65.gif' />",
      "sp2"
    );
    compound[80] = new dataset(
      "<img src='q/q68/structs/struct66.gif' />",
      "cbd"
    );
    compound[81] = new dataset(
      "<img src='q/q68/structs/struct67.gif' />",
      "sp3"
    );
    compound[82] = new dataset(
      "<img src='q/q68/structs/struct68.gif' />",
      "sp2"
    );
    compound[83] = new dataset("<b>N</b>H<sub>4</sub><sup>+</sup>", "sp3");
    compound[84] = new dataset(
      "<img src='q/q68/structs/struct69.gif' />",
      "cbd"
    );
    compound[85] = new dataset(
      "<img src='q/q68/structs/struct70.gif' />",
      "sp"
    );
    compound[86] = new dataset(
      "<img src='q/q68/structs/struct71.gif' />",
      "sp"
    );
    compound[87] = new dataset(
      "<img src='q/q68/structs/struct72.gif' />",
      "sp2"
    );
    compound[88] = new dataset(
      "<img src='q/q68/structs/struct73.gif' />",
      "none"
    );
    compound[89] = new dataset(
      "<img src='q/q68/structs/struct74.gif' />",
      "cbd"
    );
    compound[90] = new dataset(
      "<img src='q/q68/structs/struct75.gif' />",
      "sp2"
    );
    compound[91] = new dataset(
      "<img src='q/q68/structs/struct76.gif' />",
      "sp2"
    );
    compound[92] = new dataset(
      "<img src='q/q68/structs/struct77.gif' />",
      "none"
    );
    compound[93] = new dataset(
      "<img src='q/q68/structs/struct78.gif' />",
      "sp3"
    );
    compound[94] = new dataset(
      "<img src='q/q68/structs/struct79.gif' />",
      "sp3"
    );
    compound[95] = new dataset(
      "<img src='q/q68/structs/struct80.gif' />",
      "sp3"
    );
    compound[96] = new dataset(
      "<img src='q/q68/structs/struct81.gif' />",
      "sp2"
    );
    compound[97] = new dataset(
      "<img src='q/q68/structs/struct82.gif' />",
      "cbd"
    );
    compound[98] = new dataset(
      "<img src='q/q68/structs/struct83.gif' />",
      "sp2"
    );
    compound[99] = new dataset(
      "<img src='q/q68/structs/struct84.gif' />",
      "sp2"
    );
    compound[100] = new dataset(
      "<img src='q/q68/structs/struct85.gif' />",
      "sp3"
    );

    let which = Math.ceil(83 * Math.random());
    structure = compound[which]["cmpd"];
    theanswer = compound[which]["type"];

    $("#structure").html(structure);
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
