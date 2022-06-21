(function (cp) {
  cp.generateNewQuestion = () => {
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(rxn) {
      this.rxn = rxn;
    }
    function compounds(c1, c2, c3, c4, n) {
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
      this.n = n;
    }
    function question(p1, p2, p3, p4, p5, p6, p7) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
      this.p6 = p6;
      this.p7 = p7;
    }
    function solve(f1, f2, f3) {
      this.f1 = f1;
      this.f2 = f2;
      this.f3 = f3;
    }
    let quest = new question(
      "If the reaction of ",
      " grams of ",
      " and ",
      " grams of ",
      " produces ",
      " grams of ",
      " what is the percentage yield?"
    );
    let factor = new MakeArray(74);
    let cmpd = new MakeArray(74);
    // factor = new MakeArray(74);
    let rxns = new MakeArray(74);
    rxns[1] = new equation("FeS + 2HCl => H<sub>2</sub>S + FeCl<sub>2</sub>");
    cmpd[1] = new compounds(
      "FeS",
      "HCl",
      "H<sub>2</sub>S",
      "FeCl<sub>2</sub>",
      4
    );
    factor[1] = new solve(0.831, 0.388, 1.44);
    rxns[2] = new equation(
      "CH<sub>3</sub>COF + H<sub>2</sub>O => CH<sub>3</sub>COOH + HF"
    );
    cmpd[2] = new compounds(
      "CH<sub>3</sub>COF ",
      "H<sub>2</sub>O ",
      "CH<sub>3</sub>COOH ",
      "HF",
      4
    );
    factor[2] = new solve(0.29, 0.968, 0.322);
    rxns[3] = new equation("2Na + 2H<sub>2</sub>O => 2NaOH + H<sub>2</sub>");
    cmpd[3] = new compounds("Na", "H<sub>2</sub>O", "NaOH", "H<sub>2</sub>", 4);
    factor[3] = new solve(0.78, 1.74, 0.043);
    rxns[4] = new equation(
      "3Fe + 4H<sub>2</sub>O => Fe<sub>3</sub>O<sub>4</sub> + 4H<sub>2</sub>"
    );
    cmpd[4] = new compounds(
      "Fe",
      "H<sub>2</sub>O",
      "Fe<sub>3</sub>O<sub>4</sub>",
      "H<sub>2</sub>",
      4
    );
    factor[4] = new solve(0.429, 1.37, 0.0477);
    rxns[5] = new equation(
      "2C<sub>2</sub>H<sub>5</sub>OH + 6O<sub>2</sub> => 4CO<sub>2</sub> + 6H<sub>2</sub>O"
    );
    cmpd[5] = new compounds(
      "C<sub>2</sub>H<sub>5</sub>OH",
      "O<sub>2</sub>",
      "CO<sub>2</sub>",
      "H<sub>2</sub>O",
      4
    );
    factor[5] = new solve(2.08, 1.91, 1.17);
    rxns[6] = new equation(
      "Fe<sub>3</sub>O<sub>4</sub> + 4H<sub>2</sub> => 3Fe + 4H<sub>2</sub>O"
    );
    cmpd[6] = new compounds(
      "Fe<sub>3</sub>O<sub>4</sub>",
      "H<sub>2</sub>",
      "Fe",
      "H<sub>2</sub>O",
      4
    );
    factor[6] = new solve(0.0345, 0.723, 0.311);
    rxns[7] = new equation(
      "NaCl + H<sub>2</sub>SO<sub>4</sub> => HCl + NaHSO<sub>4</sub>"
    );
    cmpd[7] = new compounds(
      "NaCl ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "HCl ",
      "NaHSO<sub>4</sub>",
      4
    );
    factor[7] = new solve(1.68, 0.624, 2.05);
    rxns[8] = new equation(
      "CaC<sub>2</sub> + 2H<sub>2</sub>O => C<sub>2</sub>H<sub>2</sub> + Ca(OH)<sub>2</sub>"
    );
    cmpd[8] = new compounds(
      "CaC<sub>2</sub> ",
      "H<sub>2</sub>O ",
      "C<sub>2</sub>H<sub>2</sub> ",
      "Ca(OH)<sub>2</sub>",
      4
    );
    factor[8] = new solve(0.562, 0.406, 1.16);
    rxns[9] = new equation(
      "2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> => 16CO<sub>2</sub> + 18H<sub>2</sub>O"
    );
    cmpd[9] = new compounds(
      "C<sub>8</sub>H<sub>18</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[9] = new solve(3.51, 3.08, 1.42);
    rxns[10] = new equation(
      "4NH<sub>3</sub> + 5O<sub>2</sub> => 6H<sub>2</sub>O + 4NO"
    );
    cmpd[10] = new compounds(
      "NH<sub>3</sub> ",
      "O<sub>2</sub> ",
      "H<sub>2</sub>O ",
      " NO",
      4
    );
    factor[10] = new solve(2.35, 1.58, 1.76);
    rxns[11] = new equation(
      "CaC<sub>2</sub> + N<sub>2</sub> => CaCN<sub>2</sub> + C"
    );
    cmpd[11] = new compounds(
      "CaC<sub>2</sub> ",
      "N<sub>2</sub> ",
      "CaCN<sub>2</sub> ",
      "C",
      4
    );
    factor[11] = new solve(0.437, 1.25, 0.187);
    rxns[12] = new equation(
      "CaCN<sub>2</sub> + 3H<sub>2</sub>O => CaCO<sub>3</sub> + 2NH<sub>3</sub>"
    );
    cmpd[12] = new compounds(
      "CaCN<sub>2</sub> ",
      "H<sub>2</sub>O ",
      "CaCO<sub>3</sub> ",
      "NH<sub>3</sub>",
      4
    );
    factor[12] = new solve(0.674, 1.25, 0.424);
    rxns[13] = new equation(
      "2C<sub>6</sub>H<sub>6</sub> + 15O<sub>2</sub> => 12CO<sub>2</sub> + 6H<sub>2</sub>O"
    );
    cmpd[13] = new compounds(
      "C<sub>6</sub>H<sub>6</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[13] = new solve(3.08, 3.38, 0.692);
    rxns[14] = new equation(
      "C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> => 7CO<sub>2</sub> + 8H<sub>2</sub>O"
    );
    cmpd[14] = new compounds(
      "C<sub>7</sub>H<sub>16</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[14] = new solve(3.52, 3.08, 1.44);
    rxns[15] = new equation(
      "CO + Fe<sub>3</sub>O<sub>4</sub> => 3FeO + CO<sub>2</sub>"
    );
    cmpd[15] = new compounds(
      "CO ",
      "Fe<sub>3</sub>O<sub>4</sub> ",
      "FeO ",
      "CO<sub>2</sub>",
      4
    );
    factor[15] = new solve(8.27, 7.7, 1.57);
    rxns[16] = new equation("2ZnS + 3O<sub>2</sub> => 2ZnO + 2SO<sub>2</sub>");
    cmpd[16] = new compounds(
      "ZnS ",
      "O<sub>2</sub> ",
      "ZnO ",
      "SO<sub>2</sub>",
      4
    );
    factor[16] = new solve(0.493, 0.836, 0.657);
    rxns[17] = new equation(
      "2Na<sub>2</sub>O<sub>2</sub> + 2H<sub>2</sub>O => 4NaOH + O<sub>2</sub>"
    );
    cmpd[17] = new compounds(
      "Na<sub>2</sub>O<sub>2</sub> ",
      "H<sub>2</sub>O ",
      "NaOH ",
      "O<sub>2</sub>",
      4
    );
    factor[17] = new solve(0.231, 1.03, 0.205);
    rxns[18] = new equation(
      "SiO<sub>2</sub> + 2H<sub>2</sub>F<sub>2</sub> => SiF<sub>4</sub> + 2H<sub>2</sub>O"
    );
    cmpd[18] = new compounds(
      "SiO<sub>2</sub> ",
      "H<sub>2</sub>F<sub>2</sub> ",
      "SIF<sub>4</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[18] = new solve(1.33, 1.73, 0.599);
    rxns[19] = new equation(
      "Al<sub>4</sub>C<sub>3</sub> + 12H<sub>2</sub>O => 3CH<sub>4</sub> + 4Al(OH)<sub>3</sub>"
    );
    cmpd[19] = new compounds(
      "Al<sub>4</sub>C<sub>3</sub> ",
      "H<sub>2</sub>O ",
      "CH<sub>4</sub> ",
      "Al(OH)<sub>3</sub>",
      4
    );
    factor[19] = new solve(1.5, 0.333, 2.17);
    rxns[20] = new equation(
      "2Al + 3H<sub>2</sub>SO<sub>4</sub> => Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>"
    );
    cmpd[20] = new compounds(
      "Al ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "Al<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub> ",
      "H<sub>2</sub>",
      4
    );
    factor[20] = new solve(5.44, 6.33, 0.111);
    rxns[21] = new equation(
      "C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> => 3CO<sub>2</sub> + 4H<sub>2</sub>O"
    );
    cmpd[21] = new compounds(
      "C<sub>3</sub>H<sub>8</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[21] = new solve(3.63, 3, 1.64);
    rxns[22] = new equation(
      "2NaCN + H<sub>2</sub>SO<sub>4</sub> => Na<sub>2</sub>SO<sub>4</sub> + 2HCN"
    );
    cmpd[22] = new compounds(
      "NaCN ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "Na<sub>2</sub>SO<sub>4</sub> ",
      "HCN",
      4
    );
    factor[22] = new solve(1, 1.45, 0.55);
    rxns[23] = new equation(
      "Mg + H<sub>2</sub>SO<sub>4</sub> => MgSO<sub>4</sub> + H<sub>2</sub>"
    );
    cmpd[23] = new compounds(
      "Mg ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "MgSO<sub>4</sub> ",
      "H<sub>2</sub>",
      4
    );
    factor[23] = new solve(4.03, 4.95, 0.082);
    rxns[24] = new equation(
      "2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> => 8CO<sub>2</sub> + 10H<sub>2</sub>O"
    );
    cmpd[24] = new compounds(
      "C<sub>4</sub>H<sub>10</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[24] = new solve(3.58, 3.03, 1.55);
    rxns[25] = new equation(
      "11H<sub>2</sub>O + 12CO<sub>2</sub> => C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + 12O<sub>2</sub>"
    );
    cmpd[25] = new compounds(
      "H<sub>2</sub>O ",
      "CO<sub>2</sub> ",
      "C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> ",
      "O<sub>2</sub>",
      4
    );
    factor[25] = new solve(2.67, 1.73, 1.93);
    rxns[26] = new equation("H<sub>2</sub>O + C => H<sub>2</sub> + CO");
    cmpd[26] = new compounds(
      "H<sub>2</sub>O ",
      "C ",
      "H<sub>2</sub> ",
      "CO",
      4
    );
    factor[26] = new solve(0.667, 0.111, 1.55);
    rxns[27] = new equation(
      "NaOH + KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> => NaKC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> + H<sub>2</sub>O"
    );
    cmpd[27] = new compounds(
      "NaOH ",
      "KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> ",
      "NaKC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[27] = new solve(5.1, 5.65, 0.45);
    rxns[28] = new equation(
      "OH<sup>-</sup> + HC<sub>8</sub>H<sub>4</sub>O<sub>4</sub><sup>-</sup> => C<sub>8</sub>H<sub>4</sub>O<sub>4</sub><sup>2-</sup> + H<sub>2</sub>O"
    );
    cmpd[28] = new compounds(
      "OH<sup>-</sup> ",
      "HC<sub>8</sub>H<sub>4</sub>O<sub>4</sub><sup>-</sup> ",
      "C<sub>8</sub>H<sub>4</sub>O<sub>4</sub><sup>2-</sup> ",
      "H<sub>2</sub>O",
      4
    );
    factor[28] = new solve(9.7, 9.64, 1.06);
    rxns[29] = new equation(
      "2NaOH + H<sub>2</sub>SO<sub>4</sub> => Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O"
    );
    cmpd[29] = new compounds(
      "NaOH ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "Na<sub>2</sub>SO<sub>4</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[29] = new solve(1.225, 1.775, 0.45);
    rxns[30] = new equation(
      "CO<sub>3</sub><sup>2-</sup> + 2H<sup>+</sup> => CO<sub>2</sub> + H<sub>2</sub>O"
    );
    cmpd[30] = new compounds(
      "CO<sub>3</sub><sup>2-</sup> ",
      "H<sup>+</sup> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[30] = new solve(0.0333, 0.733, 0.3);
    rxns[31] = new equation(
      "H<sub>3</sub>PO<sub>4</sub> + 2OH<sup>-</sup> => HPO<sub>4</sub><sup>2-</sup> + 2H<sub>2</sub>O"
    );
    cmpd[31] = new compounds(
      "H<sub>3</sub>PO<sub>4</sub> ",
      "OH<sup>-</sup> ",
      "HPO<sub>4</sub><sup>2-</sup> ",
      "H<sub>2</sub>O",
      4
    );
    factor[31] = new solve(0.347, 0.98, 0.367);
    rxns[32] = new equation("CaO + 2HCl => CaCl<sub>2</sub> + H<sub>2</sub>O");
    cmpd[32] = new compounds(
      "CaO ",
      "HCl ",
      "CaCl<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factor[32] = new solve(1.3, 1.97, 0.321);
    cmpd[33] = new compounds(
      "PCl<SUB>5</SUB>",
      "4H<SUB>2</SUB>O",
      "H<SUB>3</SUB>PO<SUB>4</SUB>",
      "HCl",
      4
    );
    factor[33] = new solve(0.346, 0.47, 0.876);
    rxns[34] = new equation(
      "C<SUB>6</SUB>H<SUB>12</SUB>O<SUB>2</SUB>  +  8O<SUB>2</SUB>  => 6CO<SUB>2</SUB>  +  6H<SUB>2</SUB>O"
    );
    cmpd[34] = new compounds(
      "C<SUB>6</SUB>H<SUB>12</SUB>O<SUB>2</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[34] = new solve(2.207, 2.276, 0.931);
    rxns[35] = new equation(
      "2Fe<SUB>2</SUB>O<SUB>3</SUB>  +  3C  =>  4Fe  +  3CO<SUB>2</SUB>"
    );
    cmpd[35] = new compounds(
      "Fe<SUB>2</SUB>O<SUB>3</SUB>",
      "C",
      "Fe",
      "CO<SUB>2</SUB>",
      4
    );
    factor[35] = new solve(0.113, 0.699, 0.413);
    rxns[36] = new equation(
      "ZnS  +  3O<SUB>2</SUB>  =>  2ZnO  +  2SO<SUB>2</SUB>"
    );
    cmpd[36] = new compounds(
      "ZnS",
      "O<SUB>2</SUB>",
      "ZnO",
      "SO<SUB>2</SUB>",
      4
    );
    factor[36] = new solve(0.493, 0.835, 0.657);
    rxns[37] = new equation(
      "2Al  +  Cr<SUB>2</SUB>O<SUB>3</SUB>  =>  Al<SUB>2</SUB>O<SUB>3</SUB>  +  2Cr"
    );
    cmpd[37] = new compounds(
      "Al",
      "Cr<SUB>2</SUB>O<SUB>3</SUB>",
      "Al<SUB>2</SUB>O<SUB>3</SUB>",
      "Cr",
      4
    );
    factor[37] = new solve(2.81, 1.89, 1.92);
    rxns[38] = new equation(
      "CS<SUB>2</SUB>  +  3Cl<SUB>2</SUB>  =>  CCl<SUB>4</SUB>  +  S<SUB>2</SUB>Cl<SUB>2</SUB>"
    );
    cmpd[38] = new compounds(
      "CS<SUB>2</SUB>",
      "Cl<SUB>2</SUB>",
      "CCl<SUB>4</SUB>",
      "S<SUB>2</SUB>Cl<SUB>2</SUB>",
      4
    );
    factor[38] = new solve(2.79, 2.02, 1.77);
    rxns[39] = new equation(
      "5C  +  2SO<SUB>2</SUB>  =>  CS<SUB>2</SUB>  +  4CO"
    );
    cmpd[39] = new compounds("C", "SO<SUB>2</SUB>", "CS<SUB>2</SUB>", "CO", 4);
    factor[39] = new solve(2.13, 1.27, 1.87);
    rxns[40] = new equation(
      "2Al  +  3MnO  =>  Al<SUB>2</SUB>O<SUB>3</SUB>  +  3Mn"
    );
    cmpd[40] = new compounds(
      "Al",
      "MnO",
      "Al<SUB>2</SUB>O<SUB>3</SUB>",
      "Mn",
      4
    );
    factor[40] = new solve(3.94, 1.89, 3.06);
    rxns[41] = new equation(
      "3Ca(OH)<SUB>2</SUB>  +  2H<SUB>3</SUB>PO<SUB>4</SUB>  =>  Ca<SUB>3</SUB>(PO<SUB>4</SUB>)<SUB>2</SUB>  +  6H<sub>2</sub>O"
    );
    cmpd[41] = new compounds(
      "Ca(OH)<SUB>2</SUB>",
      "H<SUB>3</SUB>PO<SUB>4</SUB>",
      "Ca<SUB>3</SUB>(PO<SUB>4</SUB>)<SUB>2</SUB>",
      "OH",
      4
    );
    factor[41] = new solve(0.882, 1.39, 0.486);
    rxns[42] = new equation(
      "2C<SUB>4</SUB>H<SUB>8</SUB>O  +  11O<SUB>2</SUB>  =>  8CO<SUB>2</SUB>  +  8H<SUB>2</SUB>O"
    );
    cmpd[42] = new compounds(
      "C<SUB>4</SUB>H<SUB>8</SUB>O",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[42] = new solve(2.44, 2.44, 1);
    rxns[43] = new equation(
      "C<SUB>4</SUB>H<SUB>10</SUB>O  +  6O<SUB>2</SUB>  =>  4CO<SUB>2</SUB>  +  5H<SUB>2</SUB>O"
    );
    cmpd[43] = new compounds(
      "C<SUB>4</SUB>H<SUB>10</SUB>O",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[43] = new solve(2.59, 2.38, 1.22);
    rxns[44] = new equation(
      "CaH<SUB>2 </SUB> +  2H<SUB>2</SUB>O  => Ca(OH)<SUB>2</SUB>  +  2H<SUB>2</SUB>"
    );
    cmpd[44] = new compounds(
      "CaH<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "Ca(OH)<SUB>2</SUB>",
      "H<SUB>2</SUB>",
      4
    );
    factor[44] = new solve(0.855, 1.76, 0.095);
    rxns[45] = new equation(
      "N<SUB>2</SUB>H<SUB>4</SUB>  +  2H<SUB>2</SUB>O<SUB>2</SUB> =>  N<SUB>2</SUB>  +  4H<SUB>2</SUB>O"
    );
    cmpd[45] = new compounds(
      "N<SUB>2</SUB>H<SUB>4</SUB>",
      "H<SUB>2</SUB>O<SUB>2</SUB>",
      "N<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[45] = new solve(2.12, 0.875, 2.25);
    rxns[46] = new equation(
      "2H<SUB>2</SUB>S  +  3O<SUB>2</SUB>  =>  2H<SUB>2</SUB>O  +  2SO<SUB>2</SUB>"
    );
    cmpd[46] = new compounds(
      "2H<SUB>2</SUB>S",
      "O<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "SO<SUB>2</SUB>",
      4
    );
    factor[46] = new solve(1.41, 0.529, 1.88);
    rxns[47] = new equation(
      "CaCN<SUB>2</SUB>  +  3H<SUB>2</SUB>O  =>  CaCO<SUB>3</SUB>  +  2NH<SUB>3</SUB>",
      4
    );
    cmpd[47] = new compounds(
      "CaCN<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "CaCO<SUB>3</SUB>",
      "NH<SUB>3</SUB>",
      4
    );
    factor[47] = new solve(0.674, 1.25, 0.424);
    rxns[48] = new equation(
      "4NH<SUB>3 </SUB> +  5O<SUB>2</SUB>  =>  4NO  +  6H<SUB>2</SUB>O"
    );
    cmpd[48] = new compounds(
      "NH<SUB>3 </SUB>",
      "O<SUB>2</SUB>",
      "NO",
      "H<SUB>2</SUB>O",
      4
    );
    factor[48] = new solve(2.35, 1.76, 1.59);
    rxns[49] = new equation(
      "C<SUB>2</SUB>H<SUB>4</SUB>  +  3O<SUB>2</SUB> =>  2CO<SUB>2</SUB>  +  2H<SUB>2</SUB>O"
    );
    cmpd[49] = new compounds(
      "C<SUB>2</SUB>H<SUB>4</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[49] = new solve(3.43, 3.14, 1.29);
    rxns[50] = new equation(
      "PCl<SUB>3</SUB>  +  3H<SUB>2</SUB>O  =>  H<SUB>3</SUB>PO<SUB>3</SUB>  +  3HCl"
    );
    cmpd[50] = new compounds(
      "PCl<SUB>3</SUB>",
      "H<SUB>2</SUB>O",
      "H<SUB>3</SUB>PO<SUB>3</SUB>",
      "HCl",
      4
    );
    factor[50] = new solve(0.393, 0.597, 0.796);
    rxns[51] = new equation(
      "2C<SUB>3</SUB>H<SUB>6</SUB>  +  9O<SUB>2</SUB>  =>  6CO<SUB>2</SUB>  +  6H<SUB>2</SUB>O"
    );
    cmpd[51] = new compounds(
      "C<SUB>3</SUB>H<SUB>6</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[51] = new solve(3.43, 3.14, 1.28);
    rxns[52] = new equation(
      "C<SUB>3</SUB>H<SUB>6</SUB>  +  3O<SUB>2</SUB>  =>  3CO  + 3H<SUB>2</SUB>O"
    );
    cmpd[52] = new compounds(
      "C<SUB>3</SUB>H<SUB>6</SUB>",
      "O<SUB>2</SUB>",
      "CO",
      "H<SUB>2</SUB>O",
      4
    );
    factor[52] = new solve(2.29, 2.0, 1.29);
    rxns[53] = new equation(
      "3HCl  +  Na<SUB>3</SUB>PO<SUB>4</SUB>  =>  H<SUB>3</SUB>PO<SUB>4</SUB>  +  3NaCl"
    );
    cmpd[53] = new compounds(
      "HCl",
      "Na<SUB>3</SUB>PO<SUB>4</SUB>",
      "H<SUB>3</SUB>PO<SUB>4</SUB>",
      "NaCl",
      4
    );
    factor[53] = new solve(1.5, 0.896, 1.6);
    rxns[54] = new equation(
      "2F<SUB>2</SUB>  + 2H<SUB>2</SUB>O  =>  4HF  +  O<SUB>2</SUB>"
    );
    cmpd[54] = new compounds(
      "F<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "HF",
      "O<SUB>2</SUB>",
      4
    );
    factor[54] = new solve(0.474, 1.05, 0.421);
    rxns[55] = new equation(
      "Fe<SUB>3</SUB>O<SUB>4</SUB>  +  4H<SUB>2</SUB>  =>  3Fe  +  4H<SUB>2</SUB>O"
    );
    cmpd[55] = new compounds(
      "Fe<SUB>3</SUB>O<SUB>4</SUB>",
      "H<SUB>2</SUB>",
      "Fe",
      "H<SUB>2</SUB>O",
      4
    );
    factor[55] = new solve(0.0345, 0.723, 0.311);
    rxns[56] = new equation(
      "4NH<SUB>3</SUB>  +  5O<SUB>2</SUB>  =>  4NO  +  6H<SUB>2</SUB>O"
    );
    cmpd[56] = new compounds(
      "NH<SUB>3</SUB>",
      "O<SUB>2</SUB>",
      "NO",
      "H<SUB>2</SUB>O",
      4
    );
    factor[56] = new solve(2.35, 1.76, 1.58);
    rxns[57] = new equation(
      "2C<SUB>3</SUB>H<SUB>6</SUB>O  +  5O<SUB>2</SUB>  =>  6CO  +  6H<SUB>2</SUB>O"
    );
    cmpd[57] = new compounds(
      "C<SUB>3</SUB>H<SUB>6</SUB>O",
      "O<SUB>2</SUB>",
      "CO",
      "H<SUB>2</SUB>O",
      4
    );
    factor[57] = new solve(1.38, 1.45, 0.931);
    rxns[58] = new equation(
      "3NO<SUB>2</SUB>  +  H<SUB>2</SUB>O  =>  2HNO<SUB>3</SUB>  +  NO"
    );
    cmpd[58] = new compounds(
      "NO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "HNO<SUB>3</SUB>",
      "NO",
      4
    );
    factor[58] = new solve(0.13, 0.931, 0.217);
    rxns[59] = new equation(
      "CH<SUB>4</SUB>  +  4Cl<SUB>2</SUB>  =>  4HCl  +  CCl<SUB>4</SUB>"
    );
    cmpd[59] = new compounds(
      "CH<SUB>4</SUB>",
      "Cl<SUB>2</SUB>",
      "HCl",
      "CCl<SUB>4</SUB>",
      4
    );
    factor[59] = new solve(17.7, 9.11, 9.61);
    rxns[60] = new equation(
      "Na<SUB>2</SUB>SO<SUB>4</SUB>  +  2C  =>  Na<SUB>2</SUB>S  +  2CO<SUB>2</SUB>"
    );
    cmpd[60] = new compounds(
      "Na<SUB>2</SUB>SO<SUB>4</SUB>",
      "C",
      "Na<SUB>2</SUB>S",
      "CO<SUB>2</SUB>",
      4
    );
    factor[60] = new solve(0.169, 0.549, 0.62);
    rxns[61] = new equation(
      "C<SUB>7</SUB>H<SUB>16</SUB>  +  11O<SUB>2</SUB>  =>  7CO<SUB>2</SUB>  +  8H<SUB>2</SUB>O"
    );
    cmpd[61] = new compounds(
      "C<SUB>7</SUB>H<SUB>16</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[61] = new solve(3.52, 3.08, 1.44);
    rxns[62] = new equation(
      "CCl<SUB>4</SUB>  +  2HF  =>  CCl<SUB>2</SUB>F<SUB>2</SUB>  +  2HCl"
    );
    cmpd[62] = new compounds(
      "CCl<SUB>4</SUB>",
      "HF",
      "CCl<SUB>2</SUB>F<SUB>2</SUB>",
      "HCl",
      4
    );
    factor[62] = new solve(0.26, 0.786, 0.473);
    rxns[63] = new equation(
      "4FeS<SUB>2</SUB> +  11O<SUB>2</SUB>  =>  2Fe<SUB>2</SUB>O<SUB>3</SUB>  +  8SO<SUB>2</SUB>"
    );
    cmpd[63] = new compounds(
      "FeS<SUB>2</SUB>",
      "O<SUB>2</SUB>",
      "Fe<SUB>2</SUB>O<SUB>3</SUB>",
      "SO<SUB>2</SUB>",
      4
    );
    factor[63] = new solve(0.734, 0.666, 1.068);
    rxns[65] = new equation("SiO<SUB>2</SUB>  +  3C  =>  SiC  +  2CO");
    cmpd[65] = new compounds("SiO<SUB>2</SUB>", "C", "SiC", "CO", 4);
    factor[65] = new solve(0.6, 0.667, 0.933);
    rxns[64] = new equation(
      "2H<SUB>2</SUB>S  +  3O<SUB>2</SUB>  =>  2SO<SUB>2</SUB>  +  2H<SUB>2</SUB>O"
    );
    cmpd[64] = new compounds(
      "H<SUB>2</SUB>S",
      "O<SUB>2</SUB>",
      "SO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[64] = new solve(1.41, 1.88, 0.529);
    rxns[66] = new equation(
      "3CO<SUB>2</SUB>  +  4H<SUB>2</SUB>O  => C<SUB>3</SUB>H<SUB>8</SUB>  +  5O<SUB>2</SUB>"
    );
    cmpd[66] = new compounds(
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "C<SUB>3</SUB>H<SUB>8</SUB>",
      "O<SUB>2</SUB>",
      4
    );
    factor[66] = new solve(0.545, 0.333, 1.21);
    rxns[67] = new equation(
      "2HNO<SUB>3</SUB>  +  NO  =>  3NO<SUB>2</SUB>  +  H<SUB>2</SUB>O"
    );
    cmpd[67] = new compounds(
      "HNO<SUB>3</SUB>",
      "NO",
      "NO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[67] = new solve(0.238, 1.09, 0.143);
    rxns[68] = new equation(
      "N<SUB>2</SUB>  +  4H<SUB>2</SUB>O  => 2H<SUB>2</SUB>O<SUB>2</SUB>  +  N<SUB>2</SUB>H<SUB>4</SUB>"
    );
    cmpd[68] = new compounds(
      "N<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "H<SUB>2</SUB>O<SUB>2</SUB>",
      "N<SUB>2</SUB>H<SUB>4</SUB>",
      4
    );
    factor[68] = new solve(2.57, 2.43, 1.14);
    rxns[69] = new equation(
      "4KO<SUB>2 </SUB> +  2CO<SUB>2</SUB>  =>  2K<SUB>2</SUB>CO<SUB>3</SUB>  +  3O<SUB>2</SUB>"
    );
    cmpd[69] = new compounds(
      "KO<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "K<SUB>2</SUB>CO<SUB>3</SUB>",
      "O<SUB>2</SUB>",
      4
    );
    factor[69] = new solve(0.31, 0.972, 0.338);
    rxns[70] = new equation(
      "2NH<SUB>3</SUB>  +  CO<SUB>2</SUB>  =>  CO(NH<SUB>2</SUB>)<SUB>2</SUB>  +  H<SUB>2</SUB>O"
    );
    cmpd[70] = new compounds(
      "NH<SUB>3</SUB>",
      "CO<SUB>2</SUB>",
      "CO(NH<SUB>2</SUB>)<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[70] = new solve(1.29, 1.76, 0.529);
    rxns[71] = new equation(
      "2H<SUB>2</SUB>S  +  SO<SUB>2</SUB>  =>  3S  +  2H<SUB>2</SUB>O"
    );
    cmpd[71] = new compounds(
      "H<SUB>2</SUB>S",
      "SO<SUB>2</SUB>",
      "S",
      "H<SUB>2</SUB>O",
      4
    );
    factor[71] = new solve(0.941, 1.41, 0.529);
    rxns[72] = new equation(
      "3CO<SUB>2</SUB>  +  4H<SUB>2</SUB>O  =>  C<SUB>3</SUB>H<SUB>8</SUB>  +  5O<SUB>2</SUB>"
    );
    cmpd[72] = new compounds(
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "C<SUB>3</SUB>H<SUB>8</SUB>",
      "O<SUB>2</SUB>",
      4
    );
    factor[72] = new solve(0.545, 0.333, 1.212);
    rxns[73] = new equation(
      "3CO  +  7H<SUB>2</SUB>  =>  C<SUB>3</SUB>H<SUB>8</SUB>  +  3H<SUB>2</SUB>O"
    );
    cmpd[73] = new compounds(
      "CO",
      "H<SUB>2</SUB>",
      "C<SUB>3</SUB>H<SUB>8</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factor[73] = new solve(0.167, 0.524, 0.643);
    rxns[74] = new equation(
      "2Al  +  6HCl  =>  2AlCl<SUB>3</SUB>  +  3H<SUB>2</SUB>"
    );
    cmpd[74] = new compounds(
      "Al",
      "HCl",
      "AlCl<SUB>3</SUB>",
      "H<SUB>2</SUB>",
      4
    );
    factor[74] = new solve(4.05, 4.94, 0.111);

    function start() {
      //select a reaction, a mass of the first species and calculate other masses
      var f = Math.ceil(74 * Math.random());
      var z = rxns[f]["rxn"];
      var mass1 = Math.round(10000 * Math.random()) / 100;
      let mass2 = mass1 * factor[f]["f1"];
      let mass3 = mass1 * factor[f]["f2"];
      let mass4 = mass1 * factor[f]["f3"];
      mass2 = Math.round(100 * mass2) / 100;
      mass3 = Math.round(100 * mass3) / 100;
      mass4 = Math.round(100 * mass4) / 100;
      var i = Math.round(3 * Math.random());
      //chose one the reagents to be limiting
      let which = Math.ceil(100 * Math.random());
      if (which < 50) {
        //mass1 will be limiting
        mass2 = Math.round(100 * (mass2 + 20 * Math.random())) / 100;
      } else {
        //mass2 will be limiting
        mass1 = Math.round(100 * (mass1 + 20 * Math.random())) / 100;
      }
      //select a number for percent yield
      let percent;
      for (j = 1; j < 100; j++) {
        percent = Math.round(10000 * Math.random()) / 100;
        if (percent > 40) {
          break;
        }
      }
      theanswer = percent;
      //decide on which product
      var choose = Math.random();
      let qmass, qcmpd;
      if (choose > 0.5) {
        //first product will me the question
        qmass = Math.round(mass3 * percent) / 100;
        qcmpd = cmpd[f]["c3"];
      } else {
        //second product will be question
        qmass = Math.round(mass4 * percent) / 100;
        qcmpd = cmpd[f]["c4"];
      }
      //assemble the question
      let qustn =
        quest["p1"] +
        mass1 +
        quest["p2"] +
        cmpd[f]["c1"] +
        quest["p3"] +
        mass2 +
        quest["p4"] +
        cmpd[f]["c2"] +
        quest["p5"] +
        qmass +
        quest["p6"] +
        qcmpd +
        quest["p7"];
      tryit(z, qustn);
    }
    function tryit(z, qustn) {
      let html = `<div>For the following balanced chemical reaction:</div><br/><div class="paramter">${z}</div><br/><div>${qustn}</div>`;
      $("#question").html(html);
      // parent.frames[0].document.clear();
      // parent.frames[0].document.open();
      // parent.frames[0].document.writeln("<html>");
      // parent.frames[0].document.writeln("<head>");
      // parent.frames[0].document.writeln("</head>");
      // parent.frames[0].document.writeln("<body bgcolor = FFFFFF");
      // parent.frames[0].document.writeln("<font size = +1>");
      // parent.frames[0].document.write(
      //   "For the following balanced chemical reaction: "
      // );
      // parent.frames[0].document.writeln("<br><center>");
      // parent.frames[0].document.writeln("<b>", z, "</b></center>");
      // parent.frames[0].document.write(qustn);
      // parent.frames[0].document.writeln("</font>");
      // parent.frames[0].document.close();
      // document.forms[0].ans.focus();
      // document.forms[0].ans.select();
    }
    // function answer() {
    //   if (tried == 1) {
    //     alert(
    //       "Sorry, you've already submitted this problem! We'll get you a new one!"
    //     );
    //     start();
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if (
    //       (document.forms[0].ans.value < 1.05 * theanswer) &
    //       (document.forms[0].ans.value > 0.95 * theanswer)
    //     ) {
    //       document.forms[0].results.value = "correct";
    //       corrt++;
    //       tried = 1;
    //       document.forms[0].correct.value = corrt;
    //     } else {
    //       tried = 2;
    //       document.forms[0].results.value = "incorrect";
    //     }
    //   }
    // }
    // function timer(z) {
    //   tt = z;
    //   var b = Math.floor(tt / 60);
    //   var j = tt % 60;
    //   if (j < 10) {
    //     c = "0";
    //   } else {
    //     c = "";
    //   }
    //   howlong = b + ":" + c + j;
    //   running = setTimeout("timer(tt+1)", 1000);
    // }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlong;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }
    //   let reaction = cp.equations.getRandomEquationWithFourReagents();
    //   const mass1 = cp.Random.float(5, 100);
    //   const masses = [
    //     mass1,
    //     mass1 * reaction.left[1].factor,
    //     mass1 * reaction.right[0].factor,
    //     mass1 * reaction.right[1].factor,
    //   ];
    //
    //   const limitingReagentIdx = cp.Random.int(1, 3);
    //   if (cp.Random.boolean()) {
    //     // mass 1 will be limiting
    //     masses[1] = masses[1] + cp.Random.float(0, 20);
    //   } else {
    //     // mass 2 will be limiting
    //     masses[0] = masses[0] + cp.Random.float(0, 20);
    //   }
    //   let qmass, qcmpd;
    //   const answer = cp.Random.float(40, 100);
    //   if (cp.Random.boolean()) {
    //     // first product will be the question
    //     qmass = masses[2] * answer;
    //     qcmpd = reaction.right[0].formula;
    //   } else {
    //     // second product is the question
    //     qmass = masses[3] * answer;
    //     qcmpd = reaction.right[1].formula;
    //   }
    //
    //   const eqn = cp.equations.getEquationHtml(reaction);
    //
    //   const header = `
    //   <h6>To answer the question, you must first determine the limiting reagent and then base your calculation of percent yield on that chemical species.</h6>
    //   <h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>
    // `;
    //   const question = `If the reaction of <span class="parameter">${masses[0].toFixed(
    //     2
    //   )} grams</span> of <span class="parameter">${cp.compoundUtils.getHtml(
    //     reaction.left[0].formula
    //   )}</span> and <span class="parameter">${masses[1].toFixed(
    //     2
    //   )} grams</span> of <span class="parameter">${cp.compoundUtils.getHtml(
    //     reaction.left[1].formula
    //   )}</span> produces <span class="parameter">${qmass.toFixed(
    //     2
    //   )} grams</span> of <span class="parameter">${qcmpd}</span> what is the percentage yield?`;
    //
    //   const questionChoice = cp.Random.int(0, 1);
    start();
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
