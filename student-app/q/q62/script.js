(function (cp) {
  cp.generateNewQuestion = () => {
    //maxvalue is the number of datasets available
    let maxvalue = 19;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function reaction(reagents, products, heat) {
      this.reagents = reagents;
      this.products = products;
      this.heat = heat;
    }
    let number = new MakeArray(50);
    let set = new MakeArray(32);
    //number[x] is the number of reactions in each set
    //set[x] are groups of 5 comprising a given data set
    number[0] = 4;
    set[1] = new reaction(
      "C<SUB>3</SUB>H<SUB>8</SUB>(g) + 5O<SUB>2</SUB>{g}",
      "3CO<SUB>2</SUB> + 4 H<SUB>2</SUB>O(l)",
      -2220
    );
    set[2] = new reaction(
      "C(graphite) + O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      -394
    );
    set[3] = new reaction(
      "H<SUB>2</SUB>(g)  + 1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      -285
    );
    set[4] = new reaction(
      "3 C(graphite) + 4H<SUB>2</SUB>(g)",
      "C<SUB>3</SUB>H<SUB>8</SUB>(g)",
      -104
    );
    set[5] = new reaction("");
    number[1] = 4;
    set[6] = new reaction(
      "Fe<SUB>2</SUB>O<SUB>3</SUB>(s) + 3CO(g)",
      "2Fe(s) +  3CO<SUB>2</SUB>(g)",
      -23
    );
    set[7] = new reaction(
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)  +  CO(g)",
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s) +  CO<SUB>2</SUB>(g)",
      -39
    );
    set[8] = new reaction(
      "Fe<SUB>3</SUB>O<SUB>4</SUB>(s)  +  CO(g)",
      "3FeO(s) +  CO<SUB>2</SUB>(g)",
      -18
    );
    set[9] = new reaction("FeO(s)  +  CO(g)", "Fe(s)  +  CO<SUB>2</SUB>(g)", 1);
    set[10] = new reaction("");
    number[2] = 3;
    set[11] = new reaction(
      "N<SUB>2</SUB>(g)  +  2O<SUB>2</SUB>(g)",
      "2NO<SUB>2</SUB>(g)",
      67.8
    );
    set[12] = new reaction(
      "N<SUB>2</SUB>(g)  +  2O<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>O<SUB>4</SUB>(g)",
      9.6
    );
    set[13] = new reaction(
      "N<SUB>2</SUB>O<SUB>4</SUB>(g)",
      "2NO<SUB>2</SUB>(g)",
      58.2
    );
    set[14] = new reaction("");
    set[15] = new reaction("");
    number[3] = 3;
    set[16] = new reaction(
      "cis-C<SUB>4</SUB>H<SUB>8</SUB>(g)  +  6O<SUB>2</SUB>(g)",
      "4CO<SUB>2</SUB>(g) + 4H<SUB>2</SUB>O(g)",
      -2710.9
    );
    set[17] = new reaction(
      "trans-C<SUB>4</SUB>H<SUB>8</SUB>(g)  +  6O<SUB>2</SUB>(g)",
      "4CO<SUB>2</SUB>(g) + 4H<SUB>2</SUB>O(g)",
      -2706.9
    );
    set[18] = new reaction(
      "cis-C<SUB>4</SUB>H<SUB>8</SUB>(g) ",
      "trans-C<SUB>4</SUB>H<SUB>8</SUB>(g)",
      4
    );
    set[19] = new reaction("");
    set[20] = new reaction("");
    number[4] = 4;
    set[21] = new reaction(
      "C(s) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      -393.5
    );
    set[22] = new reaction(
      "H<SUB>2</SUB>(g)  +  1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      -285.8
    );
    set[23] = new reaction(
      "CH<SUB>4</SUB>(g) + 2O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g) +  2H<SUB>2</SUB>O(l)",
      -890.5
    );
    set[24] = new reaction(
      "C(s) +  2H<SUB>2</SUB>(g)",
      "CH<SUB>4</SUB>(g)",
      -74.8
    );
    set[25] = new reaction("");
    number[5] = 4;
    set[26] = new reaction(
      "C(s) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      -393.5
    );
    set[27] = new reaction(
      "H<SUB>2</SUB>(g)  +  1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(l)",
      -285.8
    );
    set[28] = new reaction(
      "2C(s) +  3H<SUB>2</SUB>(g)",
      "C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      -84.7
    );
    set[29] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g) + 7/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g) +  3H<SUB>2</SUB>O(l)",
      -1560.5
    );
    set[30] = new reaction("");
    number[6] = 3;
    set[31] = new reaction(
      "4PCl<SUB>3</SUB>(g)",
      "P<SUB>4</SUB>(s)  +  6Cl<SUB>2</SUB>(g)",
      1084
    );
    set[32] = new reaction(
      "P<SUB>4</SUB>(s)  +  10Cl<SUB>2</SUB>(g)",
      "4PCl<SUB>5</SUB>(g)",
      -1528
    );
    set[33] = new reaction(
      "PCl<SUB>3</SUB>(g)  +  Cl<SUB>2</SUB>(g)",
      "PCl<SUB>5</SUB>(g)",
      -111
    );
    set[34] = new reaction("");
    set[35] = new reaction("");
    number[7] = 4;
    set[36] = new reaction(
      "2CO<SUB>2</SUB>(g) +  2H<SUB>2</SUB>O(l)",
      "CH<SUB>3</SUB>COOH(l)  +  2O<SUB>2</SUB>(g)",
      871
    );
    set[37] = new reaction(
      "C(graphite) +  O<SUB>2</SUB>(g)",
      "CO<SUB>2</SUB>(g)",
      -394
    );
    set[38] = new reaction(
      "2H<SUB>2</SUB>(g) +  O<SUB>2</SUB>(g)",
      "2H<SUB>2</SUB>O(l)",
      -572
    );
    set[39] = new reaction(
      "2C(graphite)  +  2H<SUB>2</SUB>(g)  +  O<SUB>2</SUB>(g)",
      "CH<SUB>3</SUB>COOH(l)",
      -489
    );
    set[40] = new reaction("");
    number[8] = 3;
    set[41] = new reaction(
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s)  +  1/2O<SUB>2</SUB>(g)",
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)",
      -232.2
    );
    set[42] = new reaction(
      "6Fe(s) +  9/2O<SUB>2</SUB>(g)",
      "3Fe<SUB>2</SUB>O<SUB>3</SUB>(s)",
      -2466.5
    );
    set[43] = new reaction(
      "6Fe(s)  +  4O<SUB>2</SUB>(g)",
      "2Fe<SUB>3</SUB>O<SUB>4</SUB>(s)",
      -2234
    );
    set[44] = new reaction("");
    set[45] = new reaction("");
    number[9] = 5;
    set[46] = new reaction(
      "2N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  2O<SUB>2</SUB>(g)",
      "2N<SUB>2</SUB>(g)  +  4H<SUB>2</SUB>)",
      -1245
    );
    set[47] = new reaction(
      "2NH<SUB>3</SUB>(g) +  3N<SUB>2</SUB>O(g)",
      "4N<SUB>2</SUB>(g) + 1/2O<SUB>2</SUB>(g)",
      -1011
    );
    set[48] = new reaction(
      "H<SUB>2</SUB>O(l) + N<SUB>2</SUB>H<SUB>4</SUB>(l)",
      "2NH<SUB>3</SUB>(g) +  1/2O<SUB>2</SUB>(g)",
      143
    );
    set[49] = new reaction(
      "N<SUB>2</SUB>O(g)  +  3H<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  H<SUB>2</SUB>O(l)",
      -317
    );
    set[50] = new reaction(
      "H<SUB>2</SUB>(g)  +  1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O",
      -286
    );
    number[10] = 3;
    set[51] = new reaction(
      "2C<SUB>2</SUB>H<SUB>6</SUB>O(l) +  O<SUB>2</SUB>(g)",
      "2C<SUB>2</SUB>H<SUB>4</SUB>O(l) + 2H<SUB>2</SUB>O(l)",
      -407
    );
    set[52] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>O(l)  +  3O<SUb>2</SUb>(g)",
      "2CO<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>O(l)",
      -1371
    );
    set[53] = new reaction(
      "C<SUB>2</SUB>H<SUB>4</SUB>O(l)  +  5/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  2H<SUB>2</SUB>O(g)",
      -1167
    );
    set[54] = new reaction("");
    set[55] = new reaction("");
    number[11] = 4;
    set[56] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g)",
      "C<SUB>2</SUB>H<SUB>2</SUB>(g) + 2H<SUB>2</SUB>(g)",
      378
    );
    set[57] = new reaction(
      "C<SUB>2</SUB>H<SUB>2</SUB>(g) +  5/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  H<SUB>2</SUB>O(g)",
      -940
    );
    set[58] = new reaction(
      "H<SUB>2</SUB>(g) + 1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(g)",
      -285
    );
    set[59] = new reaction(
      "C<SUB>2</SUB>H<SUB>6</SUB>(g) +  7/2O<SUB>2</SUB>(g)",
      "2CO<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>O(g)",
      -1132
    );
    set[60] = new reaction("");
    number[12] = 4;
    set[61] = new reaction(
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  CH<SUB>4</SUB>O(l)",
      "CH<SUB>2</SUB>O(g)  +  N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      -74
    );
    set[62] = new reaction(
      "2NH<SUB>3</SUB>(g)",
      "N<SUB>2</SUB>H<SUB>4</SUB>(l)  +  H<SUB>2</SUB>(g)",
      36
    );
    set[63] = new reaction(
      "N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      -92
    );
    set[64] = new reaction(
      "CH<SUB>4</SUB>O(l)",
      "CH<SUB>2</SUB>O(g) +  H<SUB>2</SUB>(g)",
      -130
    );
    set[65] = new reaction("");
    number[13] = 3;
    set[66] = new reaction(
      "N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      -92
    );
    set[67] = new reaction(
      "NO<SUB>2</SUB>(g)  +  7/2H<SUB>2</SUB>(g)",
      "2H<SUB>2</SUB>O(l)  +  NH<SUB>3</SUB>(g)",
      -216
    );
    set[68] = new reaction(
      "1/2N<SUB>2</SUB>(g) +  2H<SUB>2</SUB>0(l)",
      "NO<SUB>2</SUB>(g)  +  2H<SUB>2</SUB>(g)",
      170
    );
    set[69] = new reaction("");
    set[70] = new reaction("");
    number[14] = 4;
    set[71] = new reaction(
      "N<SUB>2</SUB>(g)  +  3H<SUB>2</SUB>(g)",
      "2NH<SUB>3</SUB>(g)",
      -92
    );
    set[72] = new reaction(
      "2NH<SUB>3</SUB>(g)  +  4H<SUB>2</SUB>O(l)",
      "2NO<SUB>2</SUB>(g)  +  7H<SUB>2</SUB>(g)",
      -114
    );
    set[73] = new reaction(
      "2NO<SUB>2</SUB>(g)",
      "N<SUB>2</SUB>(g) +  2O<SUB>2</SUB>(g)",
      66
    );
    set[74] = new reaction(
      "H<SUB>2</SUB>O(l)",
      "H<SUB>2</SUB>(g)  +  1/2O<SUB>2</SUB>(g)",
      -35
    );
    set[75] = new reaction("");
    number[15] = 4;
    set[76] = new reaction(
      "H<SUB>2</SUB>S(g)  +  3/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>SO<SUB>3</SUB>(l)",
      -204
    );
    set[77] = new reaction(
      "H<SUB>2</SUB>SO<SUB>3</SUB>(l)",
      "H<SUB>2</SUB>O(l)  +SO<SUB>2</SUB>(g)",
      62
    );
    set[78] = new reaction(
      "SO<SUB>2</SUB>(g)",
      "S(s)  +  O<SUB>2</SUB>(g)",
      297
    );
    set[79] = new reaction(
      "H<SUB>2</SUB>S(g) +  1/2O<SUB>2</SUB>(g)",
      "S(s)  +   H<SUB>2</SUB>O(l)",
      -155
    );
    set[80] = new reaction("");
    number[16] = 4;
    set[81] = new reaction(
      "CH<SUB>2</SUB>Cl<SUB>2</SUB>(l)  +  O<SUB>2</SUB>(g)",
      "COCl<SUB>2</SUB>(g)  +  H<SUB>2</SUB>O(l)",
      -19
    );
    set[82] = new reaction(
      "1/2H<SUB>2</SUB>(g)  +  1/2Cl<SUB>2</SUB>(g)",
      "HCl(g)",
      -92
    );
    set[83] = new reaction(
      "2HCl(g)  +  1/2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>O(g)  +  Cl<SUB>2</SUB>(g)",
      42
    );
    set[84] = new reaction(
      "CH<SUB>2</SUB>Cl<SUB>2</SUB>(l) +  H<SUB>2</SUB>(g)  +  3/2O<SUB>2</SUB>(g)",
      "COCl<SUB>2</SUB>(g)  +  2H<SUb>2</SUb>O(l)",
      -161
    );
    set[85] = new reaction("");
    number[17] = 4;
    set[86] = new reaction(
      "H<SUB>2</SUB>S(g)  +  2O<SUB>2</SUB>(g)",
      "H<SUB>2</SUB>SO<SUB>4</SUB>(l)",
      -314
    );
    set[87] = new reaction(
      "H<SUB>2</SUB>SO<SUB>4</SUB>(l)",
      "SO<SUB>3</SUB>(g)  +  H<SUB>2</SUB>O(g)",
      82
    );
    set[88] = new reaction(
      "H<SUB>2</SUB>S(g)  +  2O<SUB>2</SUB>(g)",
      "SO<SUB>3</SUB>(g)  +  H<SUB>2</SUB>O(l)",
      -276
    );
    set[89] = new reaction("H<SUB>2</SUB>O(l)", "H<SUB>2</SUB>O(g)", 44);
    set[90] = new reaction("");
    number[18] = 3;
    set[91] = new reaction(
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      62
    );
    set[92] = new reaction(
      "H<SUB>2</SUB>CO +  O<SUB>2</SUB>",
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      -112
    );
    set[93] = new reaction(
      "H<SUB>2</SUB>CO  +  O<SUB>2</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      -50
    );
    set[94] = new reaction("");
    set[95] = new reaction("");
    number[19] = 4;
    set[96] = new reaction("ZnO  +  CO<SUB>2</SUB>", "ZnCO<SUB>3</SUB>", -17.2);
    set[97] = new reaction(
      "H<SUB>2</SUB>CO<SUB>3</SUB>",
      "H<SUB>2</SUB>O  +  CO<SUB>2</SUB>",
      62
    );
    set[98] = new reaction("Zn(OH)<SUB>2</SUB>", "ZnO  +  H<SUB>2</SUB>O", 72);
    set[99] = new reaction(
      "Zn(OH)<SUB>2</SUB>  +  H<SUB>2</SUB>CO<SUB>3</SUB>",
      "2H<SUB>2</SUB>O  +  ZnCO<SUB>3</SUB>",
      117
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

    function showit() {
      let factor = adjust();
      let k = Math.floor(maxvalue * Math.random());
      if (k == 19) {
        showit();
      }
      let f = Math.ceil(number[k] * Math.random());
      let g = 5 * k + f;
      for (let j = 5 * k + 1; j <= 5 * k + number[k]; j++) {
        set[j]["heat"] = Math.round(10 * factor * set[j]["heat"]) / 10;
      }
      let html = "";
      let theanswer = "";
      if (Math.random() < 0.5) {
        html += `<div class="top-equation">${set[g]["reagents"]} => ${set[g]["products"]}</div>`;
        theanswer = set[g]["heat"];
      } else {
        html += `<div class="top-equation">${set[g]["products"]} => ${set[g]["reagents"]}</div>`;
        theanswer = -set[g]["heat"];
      }
      for (j = 5 * k + 1; j <= 5 * k + number[k]; j++) {
        if (j !== g) {
          if (Math.random() < 0.5) {
            html += `<div class="support-equation">${set[j]["reagents"]} => ${set[j]["products"]}  H=${set[j]["heat"]} KJ</div>`;
          }
        } else {
          html += `<div class="support-equation">${set[j]["products"]} => ${
            set[j]["reagents"]
          }  H=${-set[j]["heat"]} KJ</div>`;
        }
      }
      return { theanswer, html };
    }

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
    let { theanswer, html } = showit();
    $("#question").html(html);
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
