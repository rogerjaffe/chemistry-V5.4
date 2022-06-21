(function (cp) {
  cp.generateNewQuestion = () => {
    which = 0;
    order = 0;
    theanswer = 0;
    opt = 0;
    totl = 0;
    corrt = 0;
    howlong = "";
    tried = 0;
    conpower1 = 0;
    conpower2 = 0;
    concterm1 = "";
    concterm2 = "";
    concterm3 = "";
    conct1 = "";
    conct2 = "";
    thelaw = "";
    askconc = "";
    first = 0;
    second = 0;
    firstrate = 0;
    secondrate = 0;
    fin = 0;

    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(rxn) {
      this.rxn = rxn;
    }
    function compounds(nr, n, c1, c2, c3, c4) {
      this.nr = nr;
      this.n = n;
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    function dataset(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    therate = new MakeArray(5);
    therate[1] = 0;
    therate[2] = 0;
    therate[3] = 0;
    therate[4] = 0;
    therate[5] = 0;
    rxns = new MakeArray(100);
    cmpd = new MakeArray(100);
    factors = new MakeArray(100);
    rxns[1] = "CH<sub>3</sub>COF + H<sub>2</sub>O => CH<sub>3</sub>COOH + HF";
    cmpd[1] = new compounds(
      2,
      4,
      "CH<sub>3</sub>COF ",
      "H<sub>2</sub>O ",
      "CH<sub>3</sub>COOH ",
      "HF",
      4
    );
    factors[1] = new dataset(-1, -1, 1, 1);
    rxns[2] =
      "2C<sub>2</sub>H<sub>5</sub>OH + 6O<sub>2</sub> => 4CO<sub>2</sub> + 6H<sub>2</sub>O";
    cmpd[2] = new compounds(
      2,
      4,
      "C<sub>2</sub>H<sub>5</sub>OH",
      "O<sub>2</sub>",
      "CO<sub>2</sub>",
      "H<sub>2</sub>O"
    );
    factors[2] = new dataset(-2, -6, 4, 6);
    rxns[3] = "4NH<sub>3</sub> + 5O<sub>2</sub> => 6H<sub>2</sub>O + 4NO";
    cmpd[3] = new compounds(
      2,
      4,
      "NH<sub>3</sub> ",
      "O<sub>2</sub> ",
      "H<sub>2</sub>O ",
      " NO"
    );
    factors[3] = new dataset(-4, -5, 6, 4);
    rxns[4] =
      "2C<sub>6</sub>H<sub>6</sub> + 15O<sub>2</sub> => 12CO<sub>2</sub> + 6H<sub>2</sub>O";
    cmpd[4] = new compounds(
      2,
      4,
      "C<sub>6</sub>H<sub>6</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O"
    );
    factors[4] = new dataset(-2, -15, 12, 6);
    rxns[5] =
      "C<sub>7</sub>H<sub>16</sub> + 11O<sub>2</sub> => 7CO<sub>2</sub> + 8H<sub>2</sub>O";
    cmpd[5] = new compounds(
      2,
      4,
      "C<sub>7</sub>H<sub>16</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O"
    );
    factors[5] = new dataset(-1, -11, 7, 8);
    rxns[6] =
      "C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> => 3CO<sub>2</sub> + 4H<sub>2</sub>O";
    cmpd[6] = new compounds(
      2,
      4,
      "C<sub>3</sub>H<sub>8</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O"
    );
    factors[6] = new dataset(-1, -5, 3, 4);
    rxns[7] =
      "2CN<sup>-</sup> + H<sub>2</sub>SO<sub>4</sub> => SO<sub>4</sub><sup>2-</sup> + 2HCN";
    cmpd[7] = new compounds(
      2,
      4,
      "CN<sup>-</sup> ",
      "H<sub>2</sub>SO<sub>4</sub> ",
      "SO<sub>4</sub><sup>2-</sup> ",
      "HCN"
    );
    factors[7] = new dataset(-2, -1, 1, 2);
    rxns[8] =
      "2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> => 8CO<sub>2</sub> + 10H<sub>2</sub>O";
    cmpd[8] = new compounds(
      2,
      4,
      "C<sub>4</sub>H<sub>10</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O"
    );
    factors[8] = new dataset(-2, -13, 8, 10);
    rxns[9] =
      "C<SUB>6</SUB>H<SUB>12</SUB>O<SUB>2</SUB>  +  8O<SUB>2</SUB>  => 6CO<SUB>2</SUB>  +  6H<SUB>2</SUB>O";
    cmpd[9] = new compounds(
      2,
      4,
      "C<SUB>6</SUB>H<SUB>12</SUB>O<SUB>2</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[9] = new dataset(-1, -8, 6, 6);
    rxns[10] =
      "CS<SUB>2</SUB>  +  3Cl<SUB>2</SUB>  =>  CCl<SUB>4</SUB>  +  S<SUB>2</SUB>Cl<SUB>2</SUB>";
    cmpd[10] = new compounds(
      2,
      4,
      "CS<SUB>2</SUB>",
      "Cl<SUB>2</SUB>",
      "CCl<SUB>4</SUB>",
      "S<SUB>2</SUB>Cl<SUB>2</SUB>"
    );
    factors[10] = new dataset(-1, -3, 1, 1);
    rxns[11] =
      "C<SUB>4</SUB>H<SUB>10</SUB>O  +  6O<SUB>2</SUB>  =>  4CO<SUB>2</SUB>  +  5H<SUB>2</SUB>O";
    cmpd[11] = new compounds(
      2,
      4,
      "C<SUB>4</SUB>H<SUB>10</SUB>O",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[11] = new dataset(-1, -6, 4, 5);
    rxns[12] =
      "N<SUB>2</SUB>H<SUB>4</SUB>  +  2H<SUB>2</SUB>O<SUB>2</SUB> =>  N<SUB>2</SUB>  +  4H<SUB>2</SUB>O";
    cmpd[12] = new compounds(
      2,
      4,
      "N<SUB>2</SUB>H<SUB>4</SUB>",
      "H<SUB>2</SUB>O<SUB>2</SUB>",
      "N<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[12] = new dataset(-1, -2, 1, 4);
    rxns[13] =
      "2H<SUB>2</SUB>S  +  3O<SUB>2</SUB>  =>  2H<SUB>2</SUB>O  +  2SO<SUB>2</SUB>";
    cmpd[13] = new compounds(
      2,
      4,
      "H<SUB>2</SUB>S",
      "O<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "SO<SUB>2</SUB>"
    );
    factors[13] = new dataset(-2, -3, 2, 2);
    rxns[14] =
      "4NH<SUB>3 </SUB> +  5O<SUB>2</SUB>  =>  4NO  +  6H<SUB>2</SUB>O";
    cmpd[14] = new compounds(
      2,
      4,
      "NH<SUB>3 </SUB>",
      "O<SUB>2</SUB>",
      "NO",
      "H<SUB>2</SUB>O"
    );
    factors[14] = new dataset(-4, -5, 4, 6);
    rxns[15] =
      "C<SUB>2</SUB>H<SUB>4</SUB>  +  3O<SUB>2</SUB> =>  2CO<SUB>2</SUB>  +  2H<SUB>2</SUB>O";
    cmpd[15] = new compounds(
      2,
      4,
      "C<SUB>2</SUB>H<SUB>4</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[15] = new dataset(-1, -3, 2, 2);
    rxns[16] =
      "PCl<SUB>3</SUB>  +  3H<SUB>2</SUB>O  =>  H<SUB>3</SUB>PO<SUB>3</SUB>  +  3HCl";
    cmpd[16] = new compounds(
      2,
      4,
      "PCl<SUB>3</SUB>",
      "H<SUB>2</SUB>O",
      "H<SUB>3</SUB>PO<SUB>3</SUB>",
      "HCl"
    );
    factors[16] = new dataset(-1, -3, 1, 3);
    rxns[17] =
      "2C<SUB>3</SUB>H<SUB>6</SUB>  +  9O<SUB>2</SUB>  =>  6CO<SUB>2</SUB>  +  6H<SUB>2</SUB>O";
    cmpd[17] = new compounds(
      2,
      4,
      "C<SUB>3</SUB>H<SUB>6</SUB>",
      "O<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[17] = new dataset(-2, -9, 6, 6);
    rxns[18] =
      "C<SUB>3</SUB>H<SUB>6</SUB>  +  3O<SUB>2</SUB>  =>  3CO  + 3H<SUB>2</SUB>O";
    cmpd[18] = new compounds(
      2,
      4,
      "C<SUB>3</SUB>H<SUB>6</SUB>",
      "O<SUB>2</SUB>",
      "CO",
      "H<SUB>2</SUB>O"
    );
    factors[18] = new dataset(-1, -3, 3, 3);
    rxns[19] = "2F<SUB>2</SUB>  + 2H<SUB>2</SUB>O  =>  4HF  +  O<SUB>2</SUB>";
    cmpd[19] = new compounds(
      2,
      4,
      "F<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "HF",
      "O<SUB>2</SUB>"
    );
    factors[19] = new dataset(-2, -2, 4, 1);
    rxns[20] =
      "4NH<SUB>3</SUB>  +  5O<SUB>2</SUB>  =>  4NO  +  6H<SUB>2</SUB>O";
    cmpd[20] = new compounds(
      2,
      4,
      "NH<SUB>3</SUB>",
      "O<SUB>2</SUB>",
      "NO",
      "H<SUB>2</SUB>O"
    );
    factors[20] = new dataset(-4, -5, 4, 6);
    rxns[21] =
      "2C<SUB>3</SUB>H<SUB>6</SUB>O  +  5O<SUB>2</SUB>  =>  6CO  +  6H<SUB>2</SUB>O";
    cmpd[21] = new compounds(
      2,
      4,
      "C<SUB>3</SUB>H<SUB>6</SUB>O",
      "O<SUB>2</SUB>",
      "CO",
      "H<SUB>2</SUB>O"
    );
    factors[21] = new dataset(-2, -5, 6, 6);
    rxns[22] =
      "3NO<SUB>2</SUB>  +  H<SUB>2</SUB>O  =>  2HNO<SUB>3</SUB>  +  NO";
    cmpd[22] = new compounds(
      2,
      4,
      "NO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "HNO<SUB>3</SUB>",
      "NO"
    );
    factors[22] = new dataset(-3, -1, 2, 1);
    rxns[23] =
      "CH<SUB>4</SUB>  +  4Cl<SUB>2</SUB>  =>  4HCl  +  CCl<SUB>4</SUB>";
    cmpd[23] = new compounds(
      2,
      4,
      "CH<SUB>4</SUB>",
      "Cl<SUB>2</SUB>",
      "HCl",
      "CCl<SUB>4</SUB>"
    );
    factors[23] = new dataset(-1, -4, 4, 1);
    rxns[24] =
      "CCl<SUB>4</SUB>  +  2HF  =>  CCl<SUB>2</SUB>F<SUB>2</SUB>  +  2HCl";
    cmpd[24] = new compounds(
      2,
      4,
      "CCl<SUB>4</SUB>",
      "HF",
      "CCl<SUB>2</SUB>F<SUB>2</SUB>",
      "HCl"
    );
    factors[24] = new dataset(-1, -2, 1, 2);
    rxns[25] =
      "2H<SUB>2</SUB>S  +  3O<SUB>2</SUB>  =>  2SO<SUB>2</SUB>  +  2H<SUB>2</SUB>O";
    cmpd[25] = new compounds(
      2,
      4,
      "H<SUB>2</SUB>S",
      "O<SUB>2</SUB>",
      "SO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[25] = new dataset(-2, -3, 2, 2);
    rxns[26] =
      "3CO<SUB>2</SUB>  +  4H<SUB>2</SUB>O  => C<SUB>3</SUB>H<SUB>8</SUB>  +  5O<SUB>2</SUB>";
    cmpd[26] = new compounds(
      2,
      4,
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "C<SUB>3</SUB>H<SUB>8</SUB>",
      "O<SUB>2</SUB>"
    );
    factors[26] = new dataset(-3, -4, 1, 5);
    rxns[27] =
      "2HNO<SUB>3</SUB>  +  NO  =>  3NO<SUB>2</SUB>  +  H<SUB>2</SUB>O";
    cmpd[27] = new compounds(
      2,
      4,
      "HNO<SUB>3</SUB>",
      "NO",
      "NO<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[27] = new dataset(-2, -1, 3, 1);
    rxns[28] =
      "N<SUB>2</SUB>  +  4H<SUB>2</SUB>O  => 2H<SUB>2</SUB>O<SUB>2</SUB>  +  N<SUB>2</SUB>H<SUB>4</SUB>";
    cmpd[28] = new compounds(
      2,
      4,
      "N<SUB>2</SUB>",
      "H<SUB>2</SUB>O",
      "H<SUB>2</SUB>O<SUB>2</SUB>",
      "N<SUB>2</SUB>H<SUB>4</SUB>"
    );
    factors[28] = new dataset(-1, -4, 2, 1);
    rxns[29] =
      "2NH<SUB>3</SUB>  +  CO<SUB>2</SUB>  =>  CO(NH<SUB>2</SUB>)<SUB>2</SUB>  +  H<SUB>2</SUB>O";
    cmpd[29] = new compounds(
      2,
      4,
      "NH<SUB>3</SUB>",
      "CO<SUB>2</SUB>",
      "CO(NH<SUB>2</SUB>)<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    factors[29] = new dataset(-2, -1, 1, 1);
    rxns[30] = "2H<SUB>2</SUB>(g) + O<SUB>2</SUB>(g) <=> 2H<SUB>2</SUB>O(g)";
    factors[30] = new dataset(2, 1, 2);
    cmpd[30] = new compounds(
      2,
      3,
      "H<SUB>2</SUB>",
      "O<SUB>2</SUB>",
      "H<SUB>2</SUB>O"
    );
    rxns[31] = "N<SUB>2</SUB>(g) + 3H<SUB>2</SUB>(g) <=> 2NH<SUB>3</SUB>(g)";
    factors[31] = new dataset(-1, -3, 2);
    cmpd[31] = new compounds(
      2,
      3,
      "N<SUB>2</SUB>",
      "H<SUB>2</SUB>",
      "NH<SUB>3</SUB>"
    );
    rxns[32] = "CH<SUB>3</SUB>OH(g) <=> CO(g) + 2H<SUB>2</SUB>(g)";
    factors[32] = new dataset(-1, 1, 2);
    cmpd[32] = new compounds(1, 3, "CH<SUB>3</SUB>OH", "CO", "H<SUB>2</SUB>");
    rxns[33] = "CO(g) + 2H<SUB>2</SUB>(g) <=> CH<SUB>3</SUB>OH(g)";
    factors[33] = new dataset(-1, -2, 1);
    cmpd[33] = new compounds(2, 3, "CO", "H<SUB>2</SUB>", "CH<SUB>3</SUB>OH");
    rxns[34] = "NO(g) +  O<SUB>2</SUB>(g) <=> NO<SUB>3</SUB>(g)";
    factors[34] = new dataset(-1, -1, 1);
    cmpd[34] = new compounds(2, 3, "NO", "O<SUB>2</SUB>", "NO<SUB>3</SUB>");
    rxns[35] = "NO<SUB>3</SUB>(g) <=> NO(g) +  O<SUB>2</SUB>(g)";
    factors[35] = new dataset(-1, 1, 1);
    cmpd[35] = new compounds(1, 3, "NO<SUB>3</SUB>", "NO(g)", "O<SUB>2</SUB>");
    rxns[36] = "NO<SUB>3</SUB>(g) +  NO(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[36] = new dataset(-1, -1, 2);
    cmpd[36] = new compounds(2, 3, "NO<SUB>3</SUB>", "NO", "NO<SUB>2</SUB>");
    rxns[37] = "2NO<SUB>2</SUB>(g) <=> NO<SUB>3</SUB>(g) +  NO(g)";
    factors[37] = new dataset(-2, 1, 1);
    cmpd[37] = new compounds(1, 3, "NO<SUB>2</SUB>", "NO<SUB>3</SUB>", "NO");
    rxns[38] = "2NO(g) + O<SUB>2</SUB>(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[38] = new dataset(-2, -1, 2);
    cmpd[38] = new compounds(2, 3, "NO", "O<SUB>2</SUB>", "NO<SUB>2</SUB>");
    rxns[39] = "H<SUB>2</SUB>(g) + 2ICl(g) <=> I<SUB>2</SUB>(g) + 2HCl(g)";
    factors[39] = new dataset(-1, -2, 1, 2);
    cmpd[39] = new compounds(
      2,
      4,
      "H<SUB>2</SUB>",
      "ICl",
      "I<SUB>2</SUB>",
      "HCl"
    );
    rxns[40] = "I<SUB>2</SUB>(g) + 2HCl(g) <=> H<SUB>2</SUB>(g) + 2ICl(g)";
    factors[40] = new dataset(-1, -2, 1, 2);
    cmpd[40] = new compounds(
      2,
      4,
      "I<SUB>2</SUB>",
      "HCl",
      "H<SUB>2</SUB>",
      "ICl"
    );
    rxns[41] = "2CO(g) + 2NO(g) <=> 2CO<SUB>2</SUB>(g) + N<SUB>2</SUB>(g)";
    factors[41] = new dataset(-2, -2, 2, 1);
    cmpd[41] = new compounds(
      2,
      4,
      "CO",
      "NO",
      "CO<SUB>2</SUB>",
      "N<SUB>2</SUB>"
    );
    rxns[42] = "2CO<SUB>2</SUB>(g) + N<SUB>2</SUB>(g) <=> 2CO(g) + 2NO(g)";
    factors[42] = new dataset(-2, -1, 2, 2);
    cmpd[42] = new compounds(
      2,
      4,
      "CO<SUB>2</SUB>",
      "N<SUB>2</SUB>",
      "CO",
      "NO"
    );
    rxns[43] = "2SO<SUB>2</SUB> + O<SUB>2</SUB>(g) <=> 2SO<SUB>3</SUB>(g)";
    factors[43] = new dataset(-2, -1, 2);
    cmpd[43] = new compounds(
      2,
      3,
      "SO<SUB>2</SUB>",
      "O<SUB>2</SUB>",
      "SO<SUB>3</SUB>"
    );
    rxns[44] = "2SO<SUB>3</SUB>(g) <=> 2SO<SUB>2</SUB>(g) + O<SUB>2</SUB>(g)";
    factors[44] = new dataset(-2, 2, 1);
    cmpd[44] = new compounds(
      1,
      3,
      "SO<SUB>3</SUB>",
      "SO<SUB>2</SUB>",
      "O<SUB>2</SUB>"
    );
    rxns[45] = "C(s) + H<SUB>2</SUB>O(g) <=> CO(g) + H<SUB>2</SUB>(g)";
    factors[45] = new dataset(-1, 1, 1);
    cmpd[45] = new compounds(1, 3, "H<SUB>2</SUB>O", "CO", "H<SUB>2</SUB>");
    rxns[46] = "N<SUB>2</SUB>O<SUB>4</SUB>(g) <=> 2NO<SUB>2</SUB>(g)";
    factors[46] = new dataset(-1, 2);
    cmpd[46] = new compounds(
      1,
      2,
      "N<SUB>2</SUB>O<SUB>4</SUB>",
      "NO<SUB>2</SUB>"
    );
    rxns[47] = "2NO<SUB>2</SUB>(g) <=> N<SUB>2</SUB>O<SUB>4</SUB>(g) ";
    factors[47] = new dataset(-2, 1);
    cmpd[47] = new compounds(
      1,
      2,
      "NO<SUB>2</SUB>",
      "N<SUB>2</SUB>O<SUB>4</SUB>"
    );
    rxns[48] =
      "Fe<sup>3+</sup>(aq) + Ag(s) <=> Ag<sup>+</sup>(aq) + Fe<sup>2+</sup>(aq)";
    factors[48] = new dataset(-1, 1, 1);
    cmpd[48] = new compounds(
      1,
      3,
      "Fe<sup>3+</sup>",
      "Ag<sup>+</sup>",
      "Fe<sup>2+</sup>"
    );
    rxns[49] =
      "CS<SUB>2</SUB>(g) + 4H<SUB>2</SUB>(g) <=> CH<SUB>4</SUB>(g) + 2H<SUB>2</SUB>S(g) ";
    factors[49] = new dataset(-1, -4, 1, 2);
    cmpd[49] = new compounds(
      2,
      4,
      "CS<SUB>2</SUB>",
      "H<SUB>2</SUB>",
      "CH<SUB>4</SUB>",
      "H<SUB>2</SUB>S"
    );
    rxns[50] =
      "CH<SUB>4</SUB>(g) + 2H<SUB>2</SUB>S(g) <=> CS<SUB>2</SUB>(g) + 4H<SUB>2</SUB>(g) ";
    factors[50] = new dataset(-1, -2, 1, 4);
    cmpd[50] = new compounds(
      2,
      4,
      "CH<SUB>4</SUB>",
      "H<SUB>2</SUB>S",
      "CS<SUB>2</SUB>",
      "H<SUB>2</SUB>"
    );
    rxns[51] = "2P(s) + 3Cl<SUB>2</SUB>(g) <=> 2PCl<SUB>3</SUB>(g)";
    factors[51] = new dataset(-3, 2);
    cmpd[51] = new compounds(1, 2, "Cl<SUB>2</SUB>", "PCl<SUB>3</SUB>");
    rxns[52] = "2PCl<SUB>3</SUB>(g) <=> 2P(s) + 3Cl<SUB>2</SUB>(g)";
    factors[52] = new dataset(-2, 3);
    cmpd[52] = new compounds(1, 2, "PCl<SUB>3</SUB>", "Cl<SUB>2</SUB>");
    rxns[53] = "Cl<SUB>2</SUB>(g) + 3F<SUB>2</SUB>(g) <=> 2ClF<SUB>3</SUB>(g)";
    factors[53] = new dataset(-1, -3, 2);
    cmpd[53] = new compounds(
      2,
      3,
      "Cl<SUB>2</SUB>",
      "F<SUB>2</SUB>",
      "ClF<SUB>3</SUB>"
    );
    rxns[54] = "2ClF<SUB>3</SUB>(g) <=> Cl<SUB>2</SUB>(g) + 3F<SUB>2</SUB>(g)";
    factors[54] = new dataset(-2, 1, 3);
    cmpd[54] = new compounds(
      1,
      3,
      "ClF<SUB>3</SUB>",
      "Cl<SUB>2</SUB>",
      "F<SUB>2</SUB>"
    );
    rxns[55] = "2COF<SUB>2</SUB>(g) <=> CO<SUB>2</SUB>(g) + CF<SUB>4</SUB>(g)";
    factors[55] = new dataset(-2, 1, 1);
    cmpd[55] = new compounds(
      1,
      3,
      "COF<SUB>2</SUB>",
      "CO<SUB>2</SUB>",
      "CF<SUB>4</SUB>"
    );
    rxns[56] = "CO<SUB>2</SUB>(g) + CF<SUB>4</SUB>(g) <=> 2COF<SUB>2</SUB>(g)";
    factors[56] = new dataset(-1, -1, 2);
    cmpd[56] = new compounds(
      2,
      3,
      "CO<SUB>2</SUB>",
      "CF<SUB>4</SUB>",
      "COF<SUB>2</SUB>"
    );
    rxns[57] = "CO(g) + Cl<SUB>2</SUB>(g) <=> COCl<SUB>2</SUB>(g)";
    factors[57] = new dataset(-1, -1, 1);
    cmpd[57] = new compounds(2, 3, "CO", "Cl<SUB>2</SUB>", "COCl<SUB>2</SUB>");
    rxns[58] = "COCl<SUB>2</SUB>(g) <=> CO(g) + Cl<SUB>2</SUB>(g)";
    factors[58] = new dataset(-1, 1, 1);
    cmpd[58] = new compounds(1, 3, "COCl<SUB>2</SUB>", "CO", "Cl<SUB>2</SUB>");
    rxns[59] = "PCl<SUB>5</SUB>(g) <=> PCl<SUB>3</SUB>(g) + Cl<SUB>2</SUB>(g)";
    factors[59] = new dataset(-1, 1, 1);
    cmpd[59] = new compounds(
      1,
      3,
      "PCl<SUB>5</SUB>",
      "PCl<SUB>3</SUB>",
      "Cl<SUB>2</SUB>"
    );
    rxns[60] = "PCl<SUB>3</SUB>(g) + Cl<SUB>2</SUB>(g) <=> PCl<SUB>5</SUB>(g) ";
    factors[60] = new dataset(-1, -1, 1);
    cmpd[60] = new compounds(
      2,
      3,
      "PCl<SUB>3</SUB>",
      "Cl<SUB>2</SUB>",
      "PCl<SUB>5</SUB>"
    );
    rxns[61] = "2CO(g) <=> C(s) + CO<SUB>2</SUB>(g)";
    factors[61] = new dataset(-2, 1);
    cmpd[61] = new compounds(1, 2, "CO", "CO<SUB>2</SUB>");
    rxns[62] =
      "2N<SUB>2</SUB>O<SUB>4</SUB>(g) <=> 2N<SUB>2</SUB>O(g) + 3O<SUB>2</SUB>(g)";
    factors[62] = new dataset(-2, 2, 3);
    cmpd[62] = new compounds(
      1,
      3,
      "N<SUB>2</SUB>O<SUB>4</SUB>",
      "2N<SUB>2</SUB>O",
      "O<SUB>2</SUB>"
    );
    rxns[63] =
      "CO(g) + H<SUB>2</SUB>O(g) <=> CO<SUB>2</SUB>(g) + H<SUB>2</SUB>(g)";
    factors[63] = new dataset(-1, -1, 1, 1);
    cmpd[63] = new compounds(
      2,
      4,
      "CO",
      "H<SUB>2</SUB>O",
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>"
    );
    rxns[64] =
      "CO<SUB>2</SUB>(g) + H<SUB>2</SUB>(g) <=> CO(g) + H<SUB>2</SUB>O(g) ";
    factors[64] = new dataset(-1, -1, 1, 1);
    cmpd[64] = new compounds(
      2,
      4,
      "CO<SUB>2</SUB>",
      "H<SUB>2</SUB>",
      "CO",
      "H<SUB>2</SUB>O"
    );
    rxns[65] =
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>(g) <=> SO<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g)";
    factors[65] = new dataset(-1, 1, 1);
    cmpd[65] = new compounds(
      1,
      3,
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>",
      "SO<SUB>2</SUB>",
      "Cl<SUB>2</SUB>"
    );
    rxns[66] =
      "SO<SUB>2</SUB>(g) + Cl<SUB>2</SUB>(g) <=> SO<SUB>2</SUB>Cl<SUB>2</SUB>(g) ";
    factors[66] = new dataset(-1, -1, 1);
    cmpd[66] = new compounds(
      2,
      3,
      "SO<SUB>2</SUB>",
      "Cl<SUB>2</SUB>",
      "SO<SUB>2</SUB>Cl<SUB>2</SUB>"
    );
    rxns[67] = "2NO(g) +  Br<SUB>2</SUB>(g) <=> 2NOBr(g)";
    factors[67] = new dataset(-2, -1, 2);
    cmpd[67] = new compounds(2, 3, "NO", "Br<SUB>2</SUB>", "NOBr");
    rxns[68] = "2NOBr(g) <=> 2NO(g) +  Br<SUB>2</SUB>(g)";
    factors[68] = new dataset(-2, 1, 2);
    cmpd[68] = new compounds(1, 3, "NOBr", "NO", "Br<SUB>2</SUB>");
    rxns[69] =
      "CH<SUB>4</SUB>(g) +  O<SUB>2</SUB>(g) <=> H<SUB>2</SUB>CO(g) + H<SUB>2</SUB>O(g)";
    factors[69] = new dataset(-1, -1, 1, 1);
    cmpd[69] = new compounds(
      2,
      4,
      "CH<SUB>4</SUB>",
      "O<SUB>2</SUB>",
      "H<SUB>2</SUB>CO",
      "H<SUB>2</SUB>O"
    );
    rxns[70] =
      "H<SUB>2</SUB>CO(g) + H<SUB>2</SUB>O(g) <=> CH<SUB>4</SUB>(g) +  O<SUB>2</SUB>(g) ";
    factors[70] = new dataset(-1, -1, 1, 1);
    cmpd[70] = new compounds(
      2,
      4,
      "H<SUB>2</SUB>CO",
      "H<SUB>2</SUB>O",
      "CH<SUB>4</SUB>",
      "O<SUB>2</SUB>"
    );
    rxns[71] = "2H<SUB>2</SUB>S  +  SO<SUB>2</SUB>  =>  3S  +  2H<SUB>2</SUB>O";
    cmpd[71] = new compounds(
      2,
      4,
      "H<SUB>2</SUB>S",
      "SO<SUB>2</SUB>",
      "S",
      "H<SUB>2</SUB>O"
    );
    factors[71] = new dataset(-2, -1, 3, 2);
    rxns[72] =
      "3CO  +  7H<SUB>2</SUB>  =>  C<SUB>3</SUB>H<SUB>8</SUB>  +  3H<SUB>2</SUB>O";
    cmpd[72] = new compounds(
      2,
      4,
      "CO",
      "H<SUB>2</SUB>",
      "C<SUB>3</SUB>H<SUB>8</SUB>",
      "H<SUB>2</SUB>O",
      4
    );
    factors[72] = new dataset(-3, -7, 1, 3);
    rxns[73] =
      "2C<sub>8</sub>H<sub>18</sub> + 25O<sub>2</sub> => 16CO<sub>2</sub> + 18H<sub>2</sub>O";
    cmpd[73] = new compounds(
      2,
      4,
      "C<sub>8</sub>H<sub>18</sub> ",
      "O<sub>2</sub> ",
      "CO<sub>2</sub> ",
      "H<sub>2</sub>O",
      4
    );
    factors[73] = new dataset(-2, -25, 16, 18);
    finish = new MakeArray(10);
    finish[1] =
      "<br>as well as the rate constant and concentration(s), calculate the reaction rate?";
    finish[2] =
      "<br> as well as the rate and concentration(s), what is the rate constant?";
    finish[3] = "<br> as well as the rate constant and rate, what is the ";
    finish[4] = new question(
      "<br>if the rate of change for ",
      " is ",
      ", <b>M-Sec<sup>-1</sup></b><br> what is the rate of change for ",
      " in <b>M-sec<sup>-1</sup></b>?"
    );
    basequest = "Given the reaction and rate law shown below,";
    //start program

    function begin() {
      kk = 0;
      opt = 0;
      askconc = "";
      which = Math.ceil(73 * Math.random());
      law = ratelaw(which);
      thek = makek();
      conc1 = makeconc();
      conc2 = makeconc();
      rate = thek * Math.pow(conc1, conpower1) * Math.pow(conc2, conpower2);
      rate = sigfigs(rate);
      if (Math.random() > 0.7) {
        relative(rate, which);
      } else {
        fin = Math.ceil(3 * Math.random());
        if (fin === 1) {
          theanswer = rate;
        }
        if (fin === 2) {
          theanswer = thek;
        }
        if (fin === 3) {
          if (order === 1) {
            theanswer = conc1;
            askconc = conct1;
            opt = 1;
          } else {
            if (concterm2 === "") {
              theanswer = conc1;
              opt = 1;
              askconc = conct1;
            } else {
              if (Math.random() > 0.5) {
                theanswer = conc1;
                opt = 1;
                askconc = conct1;
              } else {
                theanswer = conc2;
                opt = 2;
                askconc = conct2;
              }
            }
          }
        }
        const answerPayload = [
          {
            answer: theanswer,
            type: "string",
          },
        ];
        window.cp.setAnswerPayload(answerPayload);
        display(rxns[which], thek, rate, fin, opt);
      }
    }
    function ratelaw(which) {
      concterm1 = "";
      concterm2 = "";
      concterm3 = "";
      conpower2 = 0;
      if (Math.random() < 0.5) {
        order = 1;
      } else {
        order = 2;
      }
      if (order === 1) {
        term1 = "sec<sup>-1</sup>";
        conpower1 = 1;
        theone = Math.ceil(cmpd[which]["nr"] * Math.random());
        concterm1 = "[" + cmpd[which]["c" + theone] + "]";
        conct1 = concterm1;
        concterm2 = "";
      }
      if (order === 2) {
        term1 = "M<sup>-1</sup>sec<sup>-1</sup>";
        thefirst = Math.ceil(cmpd[which]["nr"] * Math.random());
        thesecond = Math.ceil(cmpd[which]["nr"] * Math.random());
        if (thefirst === thesecond) {
          conpower1 = 2;
          concterm1 = "[" + cmpd[which]["c" + thefirst] + "]<sup>2</sup>";
          conct1 = "[" + cmpd[which]["c" + thefirst] + "]";
          conterm2 = "";
        } else {
          conpower1 = 1;
          conpower2 = 1;
          concterm1 = "[" + cmpd[which]["c" + thefirst] + "]";
          conct1 = concterm1;
          concterm2 = "[" + cmpd[which]["c" + thesecond] + "]";
          conct2 = concterm2;
        }
      }
      if (order === 3) {
        thefirst = Math.ceil(cmpd[which]["n"] * Math.random());
        thesecond = Math.ceil(cmpd[which]["n"] * Math.random());
        thethird = thefirst;
        while (thethird === thefirst || thethird === thesecond) {
          thethird = Math.ceil(cmpd[which]["n"] * Math.random());
        }
        if (thefirst === thesecond) {
          concterm1 = "[" + cmpd[which]["c" + thefirst] + "]<sup>2</sup>";
          conterm2 = "";
        } else {
          concterm1 = "[" + cmpd[which]["c" + thefirst] + "]";
          concterm2 = "[" + cmpd[which]["c" + thesecond] + "]";
        }
        concterm3 = "[" + cmpd[which]["c" + thethird] + "]";
      }
      thelaw = "Rate=k" + concterm1 + concterm2 + concterm3;
    }
    function relative(rate, which) {
      max = cmpd[which]["n"];
      first = Math.ceil(max * Math.random());
      second = first;
      while (second === first) {
        second = Math.ceil(max * Math.random());
      }
      firstrate = sigfigs(factors[which]["p" + first] * rate);
      secondrate = sigfigs(factors[which]["p" + second] * rate);
      quest =
        finish[4]["p1"] +
        cmpd[which]["c" + first] +
        finish[4]["p2"] +
        firstrate +
        finish[4]["p3"] +
        cmpd[which]["c" + second] +
        finish[4]["p4"];
      theanswer = secondrate;
      const answerPayload = [
        {
          answer: theanswer,
          type: "string",
        },
      ];
      window.cp.setAnswerPayload(answerPayload);
      showrelative(which, quest);
    }
    function showrelative(which, quest) {
      $("#question").html(
        `${basequest}<br/>${rxns[which]}<br/>${thelaw}<br/>${rate}<br/>${quest}`
      );
      //   basequest,
      //   "<br>",
      //   rxns[which],
      //   "<br>",
      //   thelaw,
      //   "<br>rate=",
      //   rate,
      //   "<br>"
      // );
      // var newone = window.open(
      //   "",
      //   "newone",
      //   "scrollbars=yes,width=400,height=250"
      // );
      // newone.document.clear();
      // newone.document.writeln("<html>");
      // newone.document.writeln("<head><title>newone</title>");
      // newone.document.writeln("</head>");
      // newone.document.writeln("<body bgcolor = FFFFFF");
      // newone.document.writeln("<font size = +1>");
      // newone.document.writeln(
      //   basequest,
      //   "<br>",
      //   rxns[which],
      //   "<br>",
      //   thelaw,
      //   "<br>rate=",
      //   rate,
      //   "<br>"
      // );
      // newone.document.writeln(quest, "<br>");
      // /*if(fin===3){newone.document.writeln(askconc,"?")};
      // newone.document.writeln("<br>");
      // if(fin===1 || fin===3){newone.document.writeln("k=",thek,term1,"<br>")};
      // if(fin==2 || fin==3){newone.document.writeln("rate=",rate,"M-sec<sup>-1</sup><br>")};
      // if(opt!=1){newone.document.writeln (conct1,"=",conc1,"M")};
      // if(concterm2!="" & opt!=2){newone.document.writeln ("<br>",conct2,"=",conc2,"M")};*/
      // newone.document.writeln("<form method='post'>");
      // newone.document.writeln(
      //   "<input type='text' name='second' size=18></td></tr>"
      // );
      // newone.document.writeln(
      //   "<TD><input type='button' value='Check Answer' onClick='opener.answer(this.form.second.value)'></TD></tr>"
      // );
      // newone.document.writeln("</form>");
      // newone.document.writeln("</font>");
      // newone.document.writeln("</html>");
      // newone.document.close();
      // newone.focus();
    }
    function display(reaction, thek, rate, fin, opt) {
      let html = "";
      // var newone = window.open(
      //   "",
      //   "newone",
      //   "scrollbars=yes,width=400,height=350"
      // );
      // newone.document.clear();
      // newone.document.writeln("<html>");
      // newone.document.writeln("<head><title>newone</title>");
      // newone.document.writeln("</head>");
      // newone.document.writeln("<body bgcolor = FFFFFF");
      // newone.document.writeln("<font size = +1>");
      // newone.document.writeln(
      //   basequest,
      //   "<br>",
      //   reaction,
      //   "<br>",
      //   thelaw,
      //   "<br>",
      //   finish[fin]
      // );
      html += `${basequest}<br/>${reaction}<br/>${thelaw}<br/>${finish[fin]}`;

      if (fin == 3) {
        html += askconc + "?";
        // newone.document.writeln(askconc, "?");
      }
      html += "<br/>";
      // newone.document.writeln("<br>");
      if (fin == 1 || fin == 3) {
        html += `k=${thek}${term1}<br/>`;
        // newone.document.writeln("k=", thek, term1, "<br>");
      }
      if (fin == 2 || fin == 3) {
        html += `rate=${rate} M-sec<sup>-1</sup><br/>`;
        // newone.document.writeln("rate=", rate, "M-sec<sup>-1</sup><br>");
      }
      if (opt != 1) {
        html += `${conct1} = ${conc1}M`;
        // newone.document.writeln(conct1, "=", conc1, "M");
      }
      if ((concterm2 != "") & (opt != 2)) {
        html += `<br/>${conct2} = ${conc2}M`;
        // newone.document.writeln("<br>", conct2, "=", conc2, "M");
      }
      $("#question").html(html);
      // newone.document.writeln("<form method='post'>");
      // newone.document.writeln(
      //   "<input type='text' name='second' size=18></td></tr>"
      // );
      // newone.document.writeln(
      //   "<TD><input type='button' value='Check Answer' onClick='opener.answer(this.form.second.value)'></TD></tr>"
      // );
      // newone.document.writeln("</form>");
      // newone.document.writeln("</font>");
      // newone.document.writeln("</html>");
      // newone.document.close();
      // newone.focus();
    }
    function makek() {
      k = 1000 * Math.random();
      if (Math.random() < 0.5) {
        k = 1 / k;
      }
      return sigfigs(k);
    }
    function makeconc() {
      theconc = Math.random();
      return sigfigs(theconc);
    }
    function sigfigs(f) {
      ex = 0;
      if (Math.abs(f) > 1000) {
        while (Math.abs(f) > 1000) {
          ex++;
          f = f / 10;
        }
        f = Math.round(f) / 100;
        ex = ex + 2;
        f = "" + f;
        if (f.length == 1) {
          f = f + ".";
        }
        while (f.length < 4) {
          f = f + "0";
        }
        f = f + "e" + ex;
        return f;
      } else {
        if (Math.abs(f) < 100) {
          while (Math.abs(f) < 100) {
            ex++;
            f = f * 10;
          }
          f = Math.round(f) / 100;
          ex = 2 - ex;
          f = "" + f;
          if (f.length == 1) {
            f = f + ".";
          }
          while (f.length < 4) {
            f = f + "0";
          }
          if (ex != 0) {
            f = f + "e" + ex;
          }
          return f;
        } else {
          f = Math.round(f) / 100 + "e" + 2;
          f = "" + f;
          if (f.length == 1) {
            f = f + ".";
          }
          while (f.length < 4) {
            f = f + "0";
          }
          return f;
        }
      }
    }
    function answer(ans) {
      if (tried == 1) {
        alert("You've already done this one. Get a new Problem!");
      } else {
        if (tried == 2) {
          totl++;
          document.forms[0].total.value = totl;
        }
        if (theanswer < 0) {
          if ((ans < 0.95 * theanswer) & (ans > 1.05 * theanswer)) {
            kk = 1;
          }
        } else {
          if ((ans < 1.05 * theanswer) & (ans > 0.95 * theanswer)) {
            kk = 1;
          }
        }
        if (kk == 1) {
          document.forms[0].results.value = "correct";
          corrt++;
          document.forms[0].correct.value = corrt;
          tried = 1;
        } else {
          document.forms[0].results.value = "incorrect";
          tried = 2;
        }
      }
    }
    function timer(z) {
      tt = z;
      var b = Math.floor(tt / 60);
      var j = tt % 60;
      if (j < 10) {
        c = "0";
      } else {
        c = "";
      }
      howlong = b + ":" + c + j;
      running = setTimeout("timer(tt+1)", 1000);
    }
    function update() {
      document.forms[0].total.value = totl;
      document.forms[0].correct.value = corrt;
      document.forms[0].time.value = howlong;
      document.forms[0].page.value = thepage;
      document.forms[0].verify.value = Math.round(10000 * Math.random());
    }

    // const answerPayload = [
    //   {
    //     answer: theanswer,
    //     type: "string",
    //   },
    // ];
    // window.cp.setAnswerPayload(answerPayload);
    begin();
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
