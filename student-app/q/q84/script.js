(function (cp) {
  cp.generateNewQuestion = () => {
    //maxvalue is the number of datasets available
    let maxvalue = 19;
    let preamble =
      "Use the equations and equilibrium constants shown below to determine<br>K for the reaction:<br>";
    let spaceit = "       ";
    //global variables
    //     thepage = "Combining Equil.(78)";
    //     tried = 0;
    //     totl = 0;
    //     corrt = 0;
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function parts(e1, e2, e3, e4) {
      this.e1 = e1;
      this.e2 = e2;
      this.e3 = e3;
      this.e4 = e4;
    }
    function reaction(reagents, products, K) {
      this.reagents = reagents;
      this.products = products;
      this.K = K;
    }
    let number = new MakeArray(50);
    let set = new MakeArray(32);
    //number[x] is the number of reactions in each set
    //set[x] are groups of 5 comprising a given data set
    number[0] = 4;
    set[1] = new reaction(
      "C<SUB>3</SUB>H<SUB>8</SUB>(g) + 5O<SUB>2</SUB>{g}",
      "3CO<SUB>2</SUB> + 4 H<SUB>2</SUB>O(l)",
      8.21e38
    );
    set[2] = new reaction(
      "C(graphite) + O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      8.06e6
    );
    set[3] = new reaction(
      "H<SUB>2</SUB>(g)  + &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      9.9e4
    );
    set[4] = new reaction(
      "3 C(graphite) + 4H<SUB>2</SUB>(g)",
      "C<SUB>3</SUB>H<SUB>8</SUB>(g)",
      6.13e1
    );
    set[5] = new reaction("");
    number[1] = 4;
    set[6] = new reaction(
      "Fe<SUB>2</SUB>O<SUB>3</SUB>(s) + 3CO(g)",
      "2Fe(s) +  3CO<SUB>2</SUB>(g)",
      2.53
    );
    set[7] = new reaction(
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)  +  CO(g)",
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s) +  CO<SUB>2</SUB>(g)",
      4.83
    );
    set[8] = new reaction(
      "Fe<SUB>3</SUB>O<SUB>4</SUB>  +  CO(g)",
      "3FeO(s) +  CO<SUB>2</SUB>(g)",
      2.07
    );
    set[9] = new reaction(
      "FeO(s)  +  CO(g)",
      "Fe(s)  +  CO<SUB>2</SUB>(g)",
      0.96
    );
    set[10] = new reaction("");
    number[2] = 3;
    set[11] = new reaction(
      "N<SUB>2</SUB>(g)  +  2O<SUB>2</SUB>(g)",
      "2NO<SUB>2</SUB>(g)",
      6.48e-2
    );
    set[12] = new reaction(
      "N<SUB>2</SUB>(g)  +  2O<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>4</SUB>(g)",
      6.79e-1
    );
    set[13] = new reaction(
      "N<SUB>2</SUB>O<SUB>4</SUB>(g)",
      "2NO<SUB>2</SUB>(g)",
      9.55e-2
    );
    set[14] = new reaction("");
    set[15] = new reaction("");
    number[3] = 3;
    set[16] = new reaction(
      "cis-C<SUB>4</SUB>H<SUB>8</SUB>(g)  +  6O<SUB>2</SUB>(g)",
      "4CO<SUB>2</SUB>(g) + 4H<SUB>2</SUB>O(g)",
      3.31e47
    );
    set[17] = new reaction(
      "trans-C<SUB>4</SUB>H<SUB>8</SUB>(g)  +  6O<SUB>2</SUB>(g)",
      "4CO<SUB>2</SUB>(g) + 4H<SUB>2</SUB>O(g)",
      2.81e47
    );
    set[18] = new reaction(
      "cis-C<SUB>4</SUB>H<SUB>8</SUB>(g) ",
      "trans-C<SUB>4</SUB>H<SUB>8</SUB>(g)",
      1.18
    );
    set[19] = new reaction("");
    set[20] = new reaction("");
    number[4] = 4;
    set[21] = new reaction(
      "C(s) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      7.9e6
    );
    set[22] = new reaction(
      "H<SUB>2</SUB>(g)  +  &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      1.02e5
    );
    set[23] = new reaction(
      "CH<SUB>4</SUB>(g) + 2O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g) +  2H<SUB>2</SUB>O(l)",
      4.07e15
    );
    set[24] = new reaction(
      "C(s) +  2H<SUB>2</SUB>(g)",
      "CH<SUB>4</SUB>(g)",
      2.02e1
    );
    set[25] = new reaction("");
    number[5] = 4;
    set[26] = new reaction(
      "C(s) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      7.9e6
    );
    set[27] = new reaction(
      "H<SUB>2</SUB>(g)  +  &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      1.02e5
    );
    set[28] = new reaction(
      "2C(s) +  3H<SUB>2</SUB>(g)",
      "C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      3.05e1
    );
    set[29] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g) + 7/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g) +  3H<SUB>2</SUB>O(l)",
      2.17e27
    );
    set[30] = new reaction("");
    number[6] = 3;
    set[31] = new reaction(
      "4PCl<SUB>3</SUB>(g)",
      "P<SUB>4</SUB>(s)  +  6Cl<SUB>2</SUB>(g)",
      9.97e-20
    );
    set[32] = new reaction(
      "P<SUB>4</SUB>(s)  +  10Cl<SUB>2</SUB>(g)",
      "4PCl<SUB>5</SUB>(g)",
      6.09e26
    );
    set[33] = new reaction(
      "PCl<SUB>3</SUB>(g)  +  Cl<SUB>2</SUB>(g)",
      "PCl<SUB>5</SUB>(g)",
      8.83e1
    );
    set[34] = new reaction("");
    set[35] = new reaction("");
    number[7] = 4;
    set[36] = new reaction(
      "2CO<SUB>2</SUB>(g) +  2H<SUB>2</SUB>O(l)",
      "CH<SUB>3</SUB>COOH(l)  +  2O<SUB>2</SUB>(g)",
      5.4e-16
    );
    set[37] = new reaction(
      "C(graphite) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      8.06e6
    );
    set[38] = new reaction(
      "2H<SUB>2</SUB>(g) +  O<SUB>2</SUB>(g)",
      "2H<SUB>2</SUB>O(l)",
      1.06e10
    );
    set[39] = new reaction(
      "2C(graphite)  +  2H<SUB>2</SUB>(g)  +  O<SUB>2</SUB>(g)",
      "CH<SUB>3</SUB>COOH(l)",
      3.73e8
    );
    set[40] = new reaction("");
    number[8] = 3;
    set[41] = new reaction(
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s)  +  &frac12;O<SUB>2</SUB>(g)",
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)",
      1.18e4
    );
    set[42] = new reaction(
      "6Fe(s) +  9/2O<SUB>2</SUB>(g)",
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)",
      1.72e43
    );
    set[43] = new reaction(
      "6Fe(s)  +  4O<SUB>2</SUB>(g)",
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s)",
      1.44e39
    );
    set[44] = new reaction("");
    set[45] = new reaction("");
    number[9] = 5;
    set[46] = new reaction(
      "2N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  2O<SUB>2</SUB>(g)",
      "2N<SUB>2</SUB>(g)  +  4H<SUB>2</SUB>)",
      6.77e10
    );
    set[47] = new reaction(
      "2NH<SUB>3</SUB>(g) +  3N<SUB>2</SUB>O(g)",
      "4N<SUB>2</SUB>(g) + 3H<SUB>2</SUB>O(g)",
      5.27e17
    );
    set[48] = new reaction(
      "H<SUB>2</SUB>O(l) + N<SUB>2</SUB>H<SUB>4</SUB>(l)",
      "2NH<SUB>3</SUB>(g) +  &frac12;O<SUB>2</SUB>(g)",
      3.11e-3
    );
    set[49] = new reaction(
      "N<SUB>2</SUB>O(g)  +  3H<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  H<SUB>2</SUB>O(l)",
      3.6e5
    );
    set[50] = new reaction(
      "H<SUB>2</SUB>(g)  +  &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      1.03e5
    );
    number[10] = 3;
    set[51] = new reaction(
      "2C<SUB>2</SUB>H<SUB>6</SUB>O(l) +  O<SUB>2</SUB>(g)",
      "2C<SUB>2</SUB>H<SUB>4</SUB>O(l) + 2H<SUB>2</SUB>O(l)",
      1.36e7
    );
    set[52] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>O(l)  +  3O<SUb>2</SUb>(g)",
      "2CO<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>O(l)",
      1.08e24
    );
    set[53] = new reaction(
      "C<SUB>2</SUB>H<SUB>4</SUB>O(l)  +  5/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  2H<SUB>2</SUB>O(g)",
      2.93e20
    );
    set[54] = new reaction("");
    set[55] = new reaction("");
    number[11] = 4;
    set[56] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      "C<SUB>2</SUB>H<SUB>2</SUB>(g) + 2H<SUB>2</SUB>(g)",
      2.37e-7
    );
    set[57] = new reaction(
      "C<SUB>2</SUB>H<SUB>2</SUB>(g) +  5/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  H<SUB>2</SUB>O(g)",
      3.0e16
    );
    set[58] = new reaction(
      "H<SUB>2</SUB>(g) + &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(g)",
      9.9e4
    );
    set[59] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g) +  7/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>O(g)",
      6.96e19
    );
    set[60] = new reaction("");
    number[12] = 4;
    set[61] = new reaction(
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  CH<SUB>4</SUB>O(l)",
      "CH<SUB>2</SUB>O(g)  +  N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      1.98e1
    );
    set[62] = new reaction(
      "2NH<SUB>3</SUB>(g)",
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  H<SUB>2</SUB>(g)",
      2.34e-1
    );
    set[63] = new reaction(
      "N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      4.1e1
    );
    set[64] = new reaction(
      "CH<SUB>4</SUB>O(l)",
      "CH<SUB>2</SUB>O(g) +  H<SUB>2</SUB>(g)",
      1.9e2
    );
    set[65] = new reaction("");
    number[13] = 3;
    set[66] = new reaction(
      "N<SUB>2</SUB>(g)  + 3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      4.1e1
    );
    set[67] = new reaction(
      "NO<SUB>2</SUB>(g)  +  7/2H<SUB>2</SUB>(g)",
      "2H<SUB>2</SUB>O(l)  +  NH<SUB>3</SUB>(g)",
      6.11e3
    );
    set[68] = new reaction(
      "&frac12;N<SUB>2</SUB>(g) + 2H<SUB>2</SUB>O(l)",
      "NO<SUB>2</SUB>(g)  +  2H<SUB>2</SUB>(g)",
      1.05e-3
    );
    set[69] = new reaction("");
    set[70] = new reaction("");
    number[14] = 4;
    set[71] = new reaction(
      "N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      4.1e1
    );
    set[72] = new reaction(
      "2NH<SUB>3</SUB>(g)  +  4H<SUB>2</SUB>O(l)",
      "2NO<SUB>2</SUB>(g)  +  7H<SUB>2</SUB>(g)",
      9.96e1
    );
    set[73] = new reaction(
      "2NO<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>(g) +  2O<SUB>2</SUB>(g)",
      6.97e-2
    );
    set[74] = new reaction(
      "H<SUB>2</SUB>O(l)",
      "H<SUB>2</SUB>(g)  +  &frac12;O<SUB>2</SUB>(g)",
      4.11
    );
    set[75] = new reaction("");
    number[15] = 4;
    set[76] = new reaction(
      "H<SUB>2</SUB>S(g)  +  3/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>SO<SUB>3</SUB>(l)",
      3.77e3
    );
    set[77] = new reaction(
      "H<SUB>2</SUB>SO<SUB>3</SUB>(l)",
      "H<SUB>2</SUB>O(l)  +SO<SUB>2</SUB>(g)",
      8.19e-2
    );
    set[78] = new reaction(
      "SO<SUB>2</SUB>(g)",
      "S(s)  +  O<SUB>2</SUB>(g)",
      6.22e-6
    );
    set[79] = new reaction(
      "H<SUB>2</SUB>S(g) +  &frac12;O<SUB>2</SUB>(g)",
      "S(s)  +   H<SUB>2</SUB>O(l)",
      5.21e2
    );
    set[80] = new reaction("");
    number[16] = 4;
    set[81] = new reaction(
      "CH<SUB>2</SUB>Cl<SUB>2</SUB>(l)  +  O<SUB>2</SUB>(g)",
      "COCl<SUB>2</SUB>(g)  +  H<SUB>2</SUB>O(l)",
      2.15
    );
    set[82] = new reaction(
      "&frac12;H<SUB>2</SUB>(g)  +  &frac12;Cl<SUB>2</SUB>(g)",
      "HCl(g)",
      41
    );
    set[83] = new reaction(
      "2HCl(g)  +  &frac12;O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(g)  +  Cl<SUB>2</SUB>(g)",
      0.184
    );
    set[84] = new reaction(
      "CH<SUB>2</SUB>Cl<SUB>2</SUB>(l) +  H<SUB>2</SUB>(g)  +  3/2O<SUB>2</SUB>(g)",
      "COCl<SUB>2</SUB>(g)  +  2H<SUb>2</SUb>O(l)",
      6.65e2
    );
    set[85] = new reaction("");
    number[17] = 4;
    set[86] = new reaction(
      "H<SUB>2</SUB>S(g)  +  2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>SO<SUB>4</SUB>(l)",
      3.19e5
    );
    set[87] = new reaction(
      "H<SUB>2</SUB>SO<SUB>4</SUB>(l)",
      "SO<SUB>3</SUB>(g)  +  H<SUB>2</SUB>O(g)",
      3.65e-2
    );
    set[88] = new reaction(
      "H<SUB>2</SUB>S(g)  +  2O<SUB>2</SUB>(g)",
      "SO<SUB>3</SUB>(g)  +  H<SUB>2</SUB>O(l)",
      6.89e4
    );
    set[89] = new reaction("H<SUB>2</SUB>O(l)", "H<SUB>2</SUB>O(g)", 1.69e-1);
    set[90] = new reaction("");
    number[18] = 3;
    set[91] = new reaction(
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      8.18e-2
    );
    set[92] = new reaction(
      "H<SUB>2</SUB>CO +  O<SUB>2</SUB>",
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      9.19e1
    );
    set[93] = new reaction(
      "H<SUB>2</SUB>CO  +  O<SUB>2</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      7.52
    );
    set[94] = new reaction("");
    set[95] = new reaction("");
    number[19] = 4;
    set[96] = new reaction("ZnO  +  CO<SUB>2</SUB>", "ZnCO<SUB>3</SUB>", 2.0);
    set[97] = new reaction(
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      8.19e-2
    );
    set[98] = new reaction(
      "Zn(OH)<SUB>2</SUB>",
      "ZnO  +  H<SUB>2</SUB>O",
      5.47e-2
    );
    set[99] = new reaction(
      "Zn(OH)<SUB>2</SUB>  +  H<SUB>2</SUB>CO<SUB>3</SUB>",
      "2H<SUB>2</SUB>O  +  ZnCO<SUB>3</SUB>",
      8.89e-3
    );
    set[100] = new reaction("");
    number[20] = 4;
    set[101] = new reaction("");
    set[102] = new reaction("");
    set[103] = new reaction("");
    set[104] = new reaction("");
    set[105] = new reaction("");
    number[21] = 4;
    set[106] = new reaction("");
    set[107] = new reaction("");
    set[108] = new reaction("");
    set[109] = new reaction("");
    set[110] = new reaction("");
    number[22] = 4;
    set[111] = new reaction("");
    set[112] = new reaction("");
    set[113] = new reaction("");
    set[114] = new reaction("");
    set[115] = new reaction("");
    number[23] = 4;
    set[116] = new reaction("");
    set[117] = new reaction("");
    set[118] = new reaction("");
    set[119] = new reaction("");
    set[120] = new reaction("");
    number[24] = 4;
    set[121] = new reaction("");
    set[122] = new reaction("");
    set[123] = new reaction("");
    set[124] = new reaction("");
    set[125] = new reaction("");
    number[25] = 4;
    set[126] = new reaction("");
    set[127] = new reaction("");
    set[128] = new reaction("");
    set[129] = new reaction("");
    set[130] = new reaction("");
    number[26] = 4;
    set[131] = new reaction("");
    set[132] = new reaction("");
    set[133] = new reaction("");
    set[134] = new reaction("");
    set[135] = new reaction("");
    number[27] = 4;
    set[136] = new reaction("");
    set[137] = new reaction("");
    set[138] = new reaction("");
    set[139] = new reaction("");
    set[140] = new reaction("");
    number[28] = 4;
    set[141] = new reaction("");
    set[142] = new reaction("");
    set[143] = new reaction("");
    set[144] = new reaction("");
    set[145] = new reaction("");
    number[29] = 4;
    set[146] = new reaction("");
    set[147] = new reaction("");
    set[148] = new reaction("");
    set[149] = new reaction("");
    set[150] = new reaction("");
    number[30] = 4;
    set[151] = new reaction("");
    set[152] = new reaction("");
    set[153] = new reaction("");
    set[154] = new reaction("");
    set[155] = new reaction("");
    number[31] = 4;
    set[156] = new reaction("");
    set[157] = new reaction("");
    set[158] = new reaction("");
    set[159] = new reaction("");
    set[160] = new reaction("");
    //begin programs
    function showit() {
      let k = Math.floor(maxvalue * Math.random());
      let f = Math.ceil(number[k] * Math.random());
      let g = 5 * k + f;
      // var problem = window.open(
      //   "",
      //   "problem",
      //   "scrollbars=yes,,width=500,height=350"
      // );
      let html = `${preamble}<br/>`;
      // problem.document.writeln("<html>");
      // problem.document.writeln("<head>");
      // problem.document.writeln("</head>");
      // problem.document.writeln("<body bgcolor = FFFFFF>");
      // problem.document.writeln(preamble, "<br>");
      if (Math.random() < 0.5) {
        html += `${set[g].reagents} => ${set[g].products}<hr><table class="equation-list"><tr>`;
        // problem.document.writeln(
        //   set[g]["reagents"],
        //   "=>",
        //   set[g]["products"],
        //   "<hr><table><tr>"
        // );
        theanswer = sigfigs(1 * set[g]["K"]);
      } else {
        html += `${set[g].products} => ${set[g].reagents}<hr><table class="equation-list"><tr>`;
        // problem.document.writeln(
        //   set[g]["products"],
        //   "=>",
        //   set[g]["reagents"],
        //   "<hr><table><tr>"
        // );
        theanswer = sigfigs(1 / (1 * set[g]["K"]));
      }
      for (j = 5 * k + 1; j <= 5 * k + number[k]; j++) {
        if (j !== g) {
          if (Math.random() < 0.5) {
            html += `<td>${set[j].reagents} => ${
              set[j].products
            }</td><td>K = ${sigfigs(1 * set[j].K)}</td></tr>`;
            // problem.document.writeln(
            //   "<td width=300>",
            //   set[j]["reagents"],
            //   "=>",
            //   set[j]["products"],
            //   "</td><td>K=",
            //   sigfigs(1 * set[j]["K"]),
            //   "</td></tr>"
            // );
          } else {
            html += `<td>${set[j].products} => ${
              set[j].reagents
            }</td><td>K = ${sigfigs(1 / (1 * set[j]["K"]))}</td></tr>`;
            // problem.document.writeln(
            //   "<td width=300>",
            //   set[j]["products"],
            //   "=>",
            //   set[j]["reagents"],
            //   "</td><td>K=",
            //   sigfigs(1 / (1 * set[j]["K"])),
            //   "</td></tr>"
            // );
          }
        }
      }
      html += `</table>`;
      $("#question").html(html);
      // problem.document.writeln("</table><b>Enter your answer here</b><br>");
      // problem.document.writeln(
      //   "<form><input type=text size=10 name='sendit'><br><input type=button value='Check Answer' onClick='opener.answer(this.form.sendit.value)' </form>"
      // );
      // problem.document.writeln("<html>");
      // problem.document.close();
      // problem.focus();
    }
    // function screen() {
    //   let html = "";
    //   // var problem = window.open(
    //   //   "",
    //   //   "problem",
    //   //   "menubar=yes,scrollbars=yes,,width=400,height=400"
    //   // );
    //   // problem.document.writeln("<html>");
    //   // problem.document.writeln("<head>");
    //   // problem.document.writeln("</head>");
    //   // problem.document.writeln("<body bgcolor = FFFFFF><pre>");
    //   for (l = 0; l <= maxvalue; l++) {
    //     for (c = 1; c <= number[l]; c++) {
    //       html += `${set[5 * l + c].reagents} => ${
    //         set[5 * l + c].products
    //       } ${spaceit} ${sigfigs(set[5 * l + c].K)}<br/>`;
    //       // problem.document.writeln(
    //       //   set[5 * l + c]["reagents"],
    //       //   "=>",
    //       //   set[5 * l + c]["products"],
    //       //   spaceit,
    //       //   sigfigs(set[5 * l + c]["K"], "<br>")
    //       // );
    //     }
    //     html += "<hr>";
    //     // problem.document.writeln("<hr>");
    //   }
    //   $("#question").html(html);
    //   // problem.document.writeln("<html>");
    //   // problem.document.close();
    //   // problem.focus();
    // }

    // function answer(val) {
    //   if (tried === 1) {
    //     alert("You've already done this problem. Get a new one!");
    //   } else {
    //     if (tried === 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if ((val < 1.05 * theanswer) & (val > 0.95 * theanswer)) {
    //       document.forms[0].results.value = "correct";
    //       corrt++;
    //       document.forms[0].correct.value = corrt;
    //       tried = 1;
    //     } else {
    //       tried = 2;
    //       document.forms[0].results.value = "incorrect";
    //     }
    //   }
    // }
    function adjust() {
      j = Math.random();
      if (j < 0.1) {
        return 0.25;
      } else {
        if (j < 0.2) {
          return 0.5;
        } else {
          if (j < 0.3) {
            return 0.75;
          } else {
            if (j < 0.4) {
              return 1;
            } else {
              if (j < 0.5) {
                return 1.25;
              } else {
                if (j < 0.6) {
                  return 1.5;
                } else {
                  if (j < 0.7) {
                    return 1.75;
                  } else {
                    if (j < 0.8) {
                      return 2;
                    } else {
                      if (j < 0.9) {
                        return 2.25;
                      } else {
                        {
                          return 2.5;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    function sigfigs(f) {
      ex = 0;
      if (f > 1000) {
        while (f > 1000) {
          ex++;
          f = f / 10;
        }
        f = Math.round(f) / 100;
        ex = ex + 2;
        f = "" + f;
        if (f.length === 1) {
          f = f + ".";
        }
        while (f.length < 4) {
          f = f + "0";
        }
        f = f + "e" + ex;
        return f;
      } else {
        if (f < 100) {
          while (f < 100) {
            ex++;
            f = f * 10;
          }
          f = Math.round(f) / 100;
          ex = 2 - ex;
          f = "" + f;
          if (f.length === 1) {
            f = f + ".";
          }
          while (f.length < 4) {
            f = f + "0";
          }
          if (ex !== 0) {
            f = f + "e" + ex;
          }
          return f;
        } else {
          return Math.round(f) / 100 + "e+2";
        }
      }
    }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }

    showit();
    const answerPayload = [
      {
        answer: theanswer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
