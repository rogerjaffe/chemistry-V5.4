(function (cp) {
  cp.generateNewQuestion = () => {
    let theanswer = 0;
    let which = 0;
    let gotit = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function equation(rxn) {
      this.rxn = rxn;
    }
    function system(rxn, ne, num, Eo, c1, c2, c3, c4) {
      this.rxn = rxn;
      this.Eo = Eo;
      this.ne = ne;
      this.num = num;
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
    }
    function fact(a, b, c, d) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    let reaction = new MakeArray(50);
    let facts = new MakeArray(50);
    reaction[1] = new system(
      "Fe(s) + Cd<SUP>2+</SUP>(aq) => Fe<SUP>2+</SUP>(aq) + Cd(s)",
      2,
      2,
      0.01,
      "[Cd<SUP>2+</SUP>]",
      "[Fe<SUP>2+</SUP>]"
    );
    facts[1] = new fact(-1, 1, 0, 0);
    reaction[2] = new system(
      "Zn(s) + Cu<SUP>2+</SUP>(aq) => Zn<SUP>2+</SUP>(aq) + Cu(s)",
      2,
      2,
      1.1,
      "[Cu<SUP>2+</SUP>]",
      "[Zn<SUP>2+</SUP>]"
    );
    facts[2] = new fact(-1, 1, 0, 0);
    reaction[3] = new system(
      "Mg(s) + 2Cu<SUP>+</SUP>(aq) => Mg<SUP>2+</SUP>(aq) + 2Cu(s)",
      2,
      2,
      2.91,
      "[Cu<SUP>+</SUP>]",
      "[Mg<SUP>2+</SUP>]"
    );
    facts[3] = new fact(-2, 1, 0, 0);
    reaction[4] = new system(
      "2Cl<SUB>2</SUB>(aq) + 4OH<SUP>-</SUP>(aq) => 2Cl<SUP>-</SUP>(aq) + 3ClO<SUP>-</SUP>(aq) + 2H<SUP>2</SUP>0",
      2,
      4,
      0.96,
      "[Cl<SUB>2</SUB>]",
      "[OH<SUP>-</SUP>]",
      "[Cl<SUP>-</SUP>]",
      "[ClO<SUP>-</SUP>]"
    );
    facts[4] = new fact(-1, -4, 2, 3);
    reaction[5] = new system(
      "3Pb(s) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq) => 3Pb<SUP>2+</SUP>(aq) + 2NO(g)  + 4H<SUB>2</SUB>O",
      6,
      4,
      1.0812,
      "[NO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]",
      "[NO]"
    );
    facts[5] = new fact(-2, -8, 3, 2);
    reaction[6] = new system(
      "Cu<SUP>2+</SUP>(aq) + Sn<SUP>2+</SUP>(aq) => Sn<SUP>4+</SUP>(aq) + Cu(s)",
      2,
      3,
      0.183,
      "[Cu<SUP>2+</SUP>]",
      "[Sn<SUP>2+</SUP>]",
      "[Sn<SUP>4+</SUP>]",
      ""
    );
    facts[6] = new fact(-1, -1, 1, 0);
    reaction[7] = new system(
      "2Al(s) + 3Cu<SUP>2+</SUP>(aq) => 3Cu(s) + 2Al<SUP>3+</SUP>(aq)",
      6,
      2,
      2.0,
      "[Cu<SUP>2+</SUP>]",
      "[Al<SUP>3+</SUP>]",
      "",
      ""
    );
    facts[7] = new fact(-3, 2, 0, 0);
    reaction[8] = new system(
      "3Sn(s) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  =>  3Sn<SUP>2+</SUP>(aq) + 2NO(g)  + 4H<SUB>2</SUB>O",
      6,
      4,
      1.093,
      "[NO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Sn<SUP>2+</SUP>]",
      "[NO]"
    );
    facts[8] = new fact(-2, -8, 3, 2);
    reaction[9] = new system(
      "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      1.806,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Cl<SUP>-</SUP>]"
    );
    facts[9] = new fact(-3, -1, -6, 1);
    reaction[10] = new system(
      "In(s)  +  3ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => In<SUP>3+</SUP> +  3ClO<SUB>2</SUB>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      1.463,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[In<SUP>3+</SUP>]",
      "[ClO<SUB>2</SUB>]"
    );
    facts[10] = new fact(-3, -6, -1, 3);
    reaction[11] = new system(
      "4Hg(l)  +  4Cl<SUP>-</SUP>(aq)  +  H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq) =>  4Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + S(s)  +  3H<SUB>2</SUB>O",
      4,
      3,
      0.181,
      "[Cl<SUP>-</SUP>]",
      "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
      "[H<SUP>+</SUP>]"
    );
    facts[11] = new fact(-4, -1, -4, 0);
    reaction[12] = new system(
      "5Ag(s) +  5Cl<SUP>-</SUP>(aq) + MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  8H<SUP>+</SUP>(aq) =>  5AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  4H<SUB>2</SUB>O",
      5,
      4,
      1.278,
      "[Cl<SUP>-</SUP>]",
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[12] = new fact(-5, -1, -8, 1);
    reaction[13] = new system(
      "Al(s)  +  MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  => Al<SUP>3+</SUP>(aq) + MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
      3,
      3,
      3.37,
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]"
    );
    facts[13] = new fact(-1, -4, 1, 0);
    reaction[14] = new system(
      "4Ag(s)  +  4Cl<SUP>-</SUP>(aq)  + O<SUB>2</SUB>(g)  +  4H<SUP>+</SUP>(aq)  =>  4AgCl(s) + 2H<SUB>2</SUB>O",
      4,
      3,
      1.007,
      "[Cl<SUP>-</SUP>]",
      "[O<SUB>2</SUB>]",
      "[H<SUP>+</SUP>]"
    );
    facts[14] = new fact(-4, -1, -4, 0);
    reaction[15] = new system(
      "6Hg(l)  +  5Cl<SUP>-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s)  +  3H<SUB>2</SUB>O",
      6,
      3,
      1.182,
      "[Cl<SUP>-</SUP>]",
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[15] = new fact(-5, -1, -6, 0);
    reaction[16] = new system(
      "5Pb(s)  +  2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  =>  5Pb<SUP>2+</SUP>(aq) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
      10,
      3,
      1.325,
      "[IO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]"
    );
    facts[16] = new fact(-2, 12, 5, 0);
    reaction[17] = new system(
      "2Al(s)  + 3MnO<SUB>2</SUB>(s)  +  12H<SUP>+</SUP> =>2Al<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  6H<SUB>2</SUB>O",
      6,
      3,
      2.9,
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[17] = new fact(-12, 2, 3, 0);
    reaction[18] = new system(
      "10Ag(s)  +  10Cl<SUP>-</SUP>(aq)  + 2BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUp>+</SUp>(aq) => 10AgCl(s) + Br<SUB>2</SUB>(l)  +  6H<SUB>2</SUB>O",
      10,
      3,
      1.258,
      "[Cl<SUP>-</SUP>]",
      "[BrO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUp>+</SUp>]"
    );
    facts[18] = new fact(-10, -2, -12, 0);
    reaction[19] = new system(
      "5Pb(s) + 2MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  16H<SUP>+</SUP>(aq) =>5Pb<SUP>2+</SUP>(aq) + 2Mn<SUP>2+</SUP>(aq)  +  8H<SUB>2</SUB>O",
      10,
      4,
      1.375,
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[19] = new fact(-2, -16, 5, 2);
    reaction[20] = new system(
      "2In(s) + ClO<SUB>3</SUB><SUP>-</SUP>(aq) + 6H<SUP>+</SUP>(aq) =>2In<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      1.788,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[In<SUP>3+</SUP>]",
      "[Cl<SUP>-</SUP>]"
    );
    facts[20] = new fact(-1, -6, 2, 1);
    reaction[21] = new system(
      "4Al(s) + 3H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  12H<SUP>+</SUP>(aq)  =>  4Al<SUP>3+</SUP>(aq) + 3S(s)  +  9H<SUB>2</SUB>O",
      12,
      3,
      0.785,
      "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]"
    );
    facts[21] = new fact(-3, -12, 4, 0);
    reaction[22] = new system(
      "10In(s)  + 3BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  36H<SUp>+</SUp>(aq) => 10In<SUP>3+</SUP>(aq) + 3Br<SUB>2</SUB>(l)  +  18H<SUB>2</SUB>O",
      30,
      3,
      1.815,
      "[BrO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUp>+</SUp>]",
      "[In<SUP>3+</SUP>]"
    );
    facts[22] = new fact(-3, -36, 10, 0);
    reaction[23] = new system(
      "Al(s)  + 3ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq) => Al<SUP>3+</SUP>(aq) + 3ClO<SUB>2</SUB>(aq)  +  3H<SUB>2</SUB>O",
      3,
      4,
      2.795,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]",
      "[ClO<SUB>2</SUB>]"
    );
    facts[23] = new fact(-3, -6, 1, 3);
    reaction[24] = new system(
      "5In(s)  + 3MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  24H<SUP>+</SUP>(aq) => 5In<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  12H<SUB>2</SUB>O",
      15,
      4,
      1.838,
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[In<SUP>3+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[24] = new fact(-3, -24, 5, 3);
    reaction[25] = new system(
      "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  16H<SUP>+</SUP>(aq) =>  5PbSO<SUB>4</SUB>(s) + 2Mn<SUP>2+</SUP>(aq)  +  8H<SUB>2</SUB>O",
      10,
      4,
      1.856,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[MnO<SUB>4</SUB><SUP>-</SUP>(aq)]",
      "[H<SUP>+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[25] = new fact(-5, -2, -16, 2);
    reaction[26] = new system(
      "5Ag(s)  +  5Cl<SUP>-</SUP>(aq)  +  MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  8H<SUP>+</SUP>(aq) => 5AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  4H<SUB>2</SUB>O",
      5,
      4,
      1.278,
      "[Cl<SUP>-</SUP>]",
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[26] = new fact(-5, -1, -8, 1);
    reaction[27] = new system(
      "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + 2NO(g)  + 4H<SUB>2</SUB>O",
      6,
      4,
      1.312,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[NO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[NO]"
    );
    facts[27] = new fact(-3, -2, -8, 2);
    reaction[28] = new system(
      "6Hg(l)  +  6Cl<SUP>-</SUP>(aq) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq) => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + 2NO(g)  + 4H<SUB>2</SUB>O",
      6,
      4,
      0.688,
      "[Cl<SUP>-</SUP>]",
      "[NO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[NO]"
    );
    facts[28] = new fact(-6, -2, -8, 2);
    reaction[29] = new system(
      "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  => 5PbSO<SUB>4</SUB>(s) + Br<SUB>2</SUB>(l)  +  6H<SUB>2</SUB>O",
      10,
      3,
      1.362,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[BrO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      ""
    );
    facts[29] = new fact(-5, -2, -12, 0);
    reaction[30] = new system(
      "3Ag(s)  +  3Cl<SUP>-</SUP>(aq)  + NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq) => 3AgCl(s) + NO(g)  + 2H<SUB>2</SUB>O",
      3,
      4,
      0.734,
      "[Cl<SUP>-</SUP>]",
      "[NO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[NO]"
    );
    facts[30] = new fact(-3, -1, -4, 1);
    reaction[31] = new system(
      "3Pb(s) + 2MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  =>3Pb<SUP>2+</SUP>(aq) + 2MnO<SUB>2</SUB>(s)  +  4H<SUB>2</SUB>O",
      6,
      3,
      1.825,
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]"
    );
    facts[31] = new fact(-2, -8, 3, 0);
    reaction[32] = new system(
      "Al(s) + MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  =>Al<SUP>3+</SUP>(aq) +  MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
      3,
      3,
      3.37,
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]"
    );
    facts[32] = new fact(-1, -4, 3, 0);
    reaction[33] = new system(
      "6Hg(l)  +  6Cl<SUP>-</SUP>(aq)  + 2MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + 2MnO<SUB>2</SUB>(s)  +  4H<SUB>2</SUB>O",
      6,
      3,
      1.432,
      "[Cl<SUP>-</SUP>]",
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[33] = new fact(-6, -2, -8, 0);
    reaction[34] = new system(
      "3Ag(s)  +  3Cl<SUP>-</SUP>(aq)  + MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  =>3AgCl(s) +  MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
      3,
      3,
      1.476,
      "[Cl<SUP>-</SUP>]",
      "[MnO<SUB>4</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[34] = new fact(-3, -1, -4, 0);
    reaction[35] = new system(
      "5Sn(s)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  => 5Sn<SUP>2+</SUP>(aq) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
      10,
      3,
      1.337,
      "[IO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Sn<SUP>2+</SUP>]"
    );
    facts[35] = new fact(-2, -12, 5, 0);
    reaction[36] = new system(
      "6Ag(s)  +  5Cl<SUP>-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 6AgCl(s) +  3H<SUB>2</SUB>O",
      6,
      3,
      1.228,
      "[Cl<SUP>-</SUP>]",
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[36] = new fact(-5, -1, -6, 0);
    reaction[37] = new system(
      "10Ag(s)  +  10Cl<SUP>-</SUP>(aq)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq) => 10AgCl(s) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
      10,
      3,
      0.978,
      "[Cl<SUP>-</SUP>]",
      "[IO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[37] = new fact(-10, -2, -12, 0);
    reaction[38] = new system(
      "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq) => 5PbSO<SUB>4</SUB>(s) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
      10,
      3,
      1.556,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[IO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]"
    );
    facts[38] = new fact(-5, -2, -12, 0);
    reaction[39] = new system(
      "2Pb(s)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq)  => 2Pb<SUP>2+</SUP>(aq) + S(s)  +  3H<SUB>2</SUB>O",
      4,
      3,
      0.574,
      "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]"
    );
    facts[39] = new fact(-1, -4, 2, 0);
    reaction[40] = new system(
      "4Ag(s)  +  4Cl<SUP>-</SUP>(aq)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq)  => 4AgCl(s) + S(s)  +  3H<SUB>2</SUB>O",
      4,
      3,
      0.227,
      "[Cl<SUP>-</SUP>]",
      "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
      "[H<SUP>+</SUP>]"
    );
    facts[40] = new fact(-4, -1, -4, 0);
    reaction[41] = new system(
      "4Hg(l)  +  4Cl<SUP>-</SUP>(aq)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq) => 2Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + S(s)  +  3H<SUB>2</SUB>O",
      4,
      3,
      0.181,
      "[Cl<SUP>-</SUP>]",
      "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
      "[H<SUP>+</SUP>]"
    );
    facts[41] = new fact(-4, -1, -4, 0);
    reaction[42] = new system(
      "3Pb(s) + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3Pb<SUP>2+</SUP>(aq) + 2As(s)  +  4H<SUB>2</SUB>O",
      6,
      3,
      0.365,
      "[HAsO<SUB>2</SUB>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]"
    );
    facts[42] = new fact(-2, -6, 3, 0);
    reaction[43] = new system(
      "3Sn(s) + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3Sn<SUP>2+</SUP>(aq) + 2As(s)  +  4H<SUB>2</SUB>O",
      6,
      3,
      0.377,
      "[HAsO<SUB>2</SUB>]",
      "[H<SUP>+</SUP>]",
      "[Sn<SUP>2+</SUP>]"
    );
    facts[43] = new fact(-2, -6, 3, 0);
    reaction[44] = new system(
      "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + 2As(s)  +  4H<SUB>2</SUB>O",
      6,
      3,
      0.596,
      "[SO<SUB>4</SUB><SUP>2-</SUP>]",
      "[HAsO<SUB>2</SUB>]",
      "[H<SUP>+</SUP>]"
    );
    facts[44] = new fact(-3, -2, -6, 0);
    reaction[45] = new system(
      "Pb(s)  + MnO<SUB>2</SUB>(s)  +  4H<SUP>+</SUP>(aq) => Pb<SUP>2+</SUP>(aq) + Mn<SUP>2+</SUP>(aq)  +  2H<SUB>2</SUB>O",
      2,
      3,
      1.355,
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[45] = new fact(-4, 1, 1, 0);
    reaction[46] = new system(
      "2In(s) + 3MnO<SUB>2</SUB>(s)  +  12H<SUP>+</SUP>(aq) => 2In<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  6H<SUB>2</SUB>O",
      6,
      3,
      1.568,
      "[H<SUP>+</SUP>]",
      "[In<SUP>3+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[46] = new fact(-12, 2, 3, 0);
    reaction[47] = new system(
      "2Ag(s)  +  2Cl<SUP>-</SUP>(aq)  + MnO<SUB>2</SUB>(s)  +  4H<SUP>+</SUP>(aq) => 2AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  2H<SUB>2</SUB>O",
      2,
      3,
      1.008,
      "[Cl<SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Mn<SUP>2+</SUP>]"
    );
    facts[47] = new fact(-2, -4, 1, 0);
    reaction[48] = new system(
      "3Pb(s)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3Pb<SUP>2+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      1.575,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Pb<SUP>2+</SUP>]",
      "[Cl<SUP>-</SUP>]"
    );
    facts[48] = new fact(-1, -6, 3, 1);
    reaction[49] = new system(
      "2In(s) + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 2In<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      1.788,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[In<SUP>3+</SUP>]",
      "[Cl<SUP>-</SUP>]"
    );
    facts[49] = new fact(-1, -6, 2, 1);
    reaction[50] = new system(
      "2Al(s)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 2Al<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
      6,
      4,
      3.12,
      "[ClO<SUB>3</SUB><SUP>-</SUP>]",
      "[H<SUP>+</SUP>]",
      "[Al<SUP>3+</SUP>]",
      "[Cl<SUP>-</SUP>]"
    );
    facts[50] = new fact(-1, -6, 2, 1);

    function start() {
      var conca = Math.round(100 * Math.random()) / 100;
      var concb = Math.round(100 * Math.random()) / 100;
      var concc = Math.round(100 * Math.random()) / 100;
      var concd = Math.round(100 * Math.random()) / 100;
      let f = Math.round(0.5 + 50 * Math.random());
      sendanswer(conca, concb, concc, concd, f);
      let reactn = reaction[f];
      var n = reaction[f]["num"];
      let rctn = reaction[f]["rxn"];
      var pot = "  E<sup>o</sup> = " + reaction[f]["Eo"];
      tryit(reactn, n, pot, rctn, conca, concb, concc, concd);
    }
    function sendanswer(conca, concb, concc, concd, f) {
      var Q =
        Math.pow(conca, facts[f]["a"]) *
        Math.pow(concb, facts[f]["b"]) *
        Math.pow(concc, facts[f]["c"]) *
        Math.pow(concd, facts[f]["d"]);
      var E =
        reaction[f]["Eo"] - (0.059 / reaction[f]["ne"]) * (Math.log(Q) / 2.303);
      theanswer = E;
    }
    function tryit(reactn, n, pot, rctn, conca, concb, concc, concd) {
      let html = `<h6>${rctn}</h6><h6>${pot}</h6>`;
      concs = new MakeArray(4);
      concs[1] = conca;
      concs[2] = concb;
      concs[3] = concc;
      concs[4] = concd;
      // display=new MakeArray(4)
      for (var i = 1; i <= n; i++) {
        html += "<h6>" + reactn["c" + i] + " = " + concs[i] + "<b>M</b></h6>";
        // display[i]=reactn["c"+i] + " = " +concs[i]+"<b>M</b>"}
        // parent.frames[0].document.clear();
        // parent.frames[0].document.open();
        // parent.frames[0].document.writeln ("<html>");
        // parent.frames[0].document.writeln ("<head>");
        // parent.frames[0].document.writeln ("</head>");
        // parent.frames[0].document.writeln ("<body bgcolor = FFFFFF>");
        // parent.frames[0].document.writeln ("<pre>");
        // parent.frames[0].document.writeln ("Using the balanced redox reaction and the concentrations given,")
        // parent.frames[0].document.writeln ("determine the potential.");
        // parent.frames[0].document.writeln ("<center><b>",rctn,"</b></center>");
        // parent.frames[0].document.write (pot,";");
        // for (var i=1;i<=n;i++){
        //   parent.frames[0].document.write (display[i],";");}
        // parent.frames[0].document.writeln ("</font>");
        // parent.frames[0].document.close();
      }
      $("#question").html(html);
    }
    // function answer(ansr){
    //   if(tried==1){
    //     alert("Sorry, you've already submitted this problem! We'll get you a new one!")
    //     start()}
    //   else{  gotit=0
    //     if(tried==2){totl++;document.forms[0].total.value=totl}
    //     if(theanswer<0){
    //       if (ansr>1.01*theanswer & ansr<.99*theanswer ){
    //         gotit=1}
    //     }
    //     else{
    //       if (ansr>1.01*theanswer & ansr<.99*theanswer ){
    //         gotit=1}
    //     }
    //     if(gotit==1){
    //       document.forms[0].results.value="correct"
    //       corrt++
    //       document.forms[0].correct.value=corrt
    //       tried=1}
    //     else {
    //       document.forms[0].results.value="incorrect"
    //       tried=2}
    //   }}
    // function timer(z){
    //   tt=z
    //   var b=Math.floor(tt/60)
    //   var j = (tt % 60)
    //   if (j<10){c="0"}
    //   else {c=""}
    //   howlong=b + ":" + c + j
    //   running=setTimeout("timer(tt+1)",1000)
    // }
    // function update(){
    //   document.forms[0].total.value=totl
    //   document.forms[0].correct.value=corrt
    //   document.forms[0].time.value=howlong
    //   document.forms[0].page.value=thepage
    //   document.forms[0].verify.value=Math.round(10000*Math.random())
    // }

    // const reactions = [
    //   {
    //     rxn: {
    //       formula: "Fe(s) + Cd<SUP>2+</SUP>(aq) => Fe<SUP>2+</SUP>(aq) + Cd(s)",
    //       ne: 2,
    //       num: 2,
    //       Eo: 0.01,
    //       c1: "[Cd<SUP>2+</SUP>]",
    //       c2: "[Fe<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -1, b: 1, c: 0, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula: "Zn(s) + Cu<SUP>2+</SUP>(aq) => Zn<SUP>2+</SUP>(aq) + Cu(s)",
    //       ne: 2,
    //       num: 2,
    //       Eo: 1.1,
    //       c1: "[Cu<SUP>2+</SUP>]",
    //       c2: "[Zn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -1, b: 1, c: 0, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Mg(s) + 2Cu<SUP>+</SUP>(aq) => Mg<SUP>2+</SUP>(aq) + 2Cu(s)",
    //       ne: 2,
    //       num: 2,
    //       Eo: 2.91,
    //       c1: "[Cu<SUP>+</SUP>]",
    //       c2: "[Mg<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: 1, c: 0, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Cl<SUB>2</SUB>(aq) + 4OH<SUP>-</SUP>(aq) => 2Cl<SUP>-</SUP>(aq) + 3ClO<SUP>-</SUP>(aq) + 2H<SUP>2</SUP>0",
    //       ne: 2,
    //       num: 4,
    //       Eo: 0.96,
    //       c1: "[Cl<SUB>2</SUB>]",
    //       c2: "[OH<SUP>-</SUP>]",
    //       c3: "[Cl<SUP>-</SUP>]",
    //       c4: "[ClO<SUP>-</SUP>]",
    //     },
    //     facts: { a: -1, b: -4, c: 2, d: 3 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq) => 3Pb<SUP>2+</SUP>(aq) + 2NO(g)  + 4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.0812,
    //       c1: "[NO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //       c4: "[NO]",
    //     },
    //     facts: { a: -2, b: -8, c: 3, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Cu<SUP>2+</SUP>(aq) + Sn<SUP>2+</SUP>(aq) => Sn<SUP>4+</SUP>(aq) + Cu(s)",
    //       ne: 2,
    //       num: 3,
    //       Eo: 0.183,
    //       c1: "[Cu<SUP>2+</SUP>]",
    //       c2: "[Sn<SUP>2+</SUP>]",
    //       c3: "[Sn<SUP>4+</SUP>]",
    //       c4: "",
    //     },
    //     facts: { a: -1, b: -1, c: 1, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Al(s) + 3Cu<SUP>2+</SUP>(aq) => 3Cu(s) + 2Al<SUP>3+</SUP>(aq)",
    //       ne: 6,
    //       num: 2,
    //       Eo: 2,
    //       c1: "[Cu<SUP>2+</SUP>]",
    //       c2: "[Al<SUP>3+</SUP>]",
    //       c3: "",
    //       c4: "",
    //     },
    //     facts: { a: -3, b: 2, c: 0, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Sn(s) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  =>  3Sn<SUP>2+</SUP>(aq) + 2NO(g)  + 4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.093,
    //       c1: "[NO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Sn<SUP>2+</SUP>]",
    //       c4: "[NO]",
    //     },
    //     facts: { a: -2, b: -8, c: 3, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.806,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[Cl<SUP>-</SUP>]",
    //     },
    //     facts: { a: -3, b: -1, c: -6, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "In(s)  +  3ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => In<SUP>3+</SUP> +  3ClO<SUB>2</SUB>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.463,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[In<SUP>3+</SUP>]",
    //       c4: "[ClO<SUB>2</SUB>]",
    //     },
    //     facts: { a: -3, b: -6, c: -1, d: 3 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "4Hg(l)  +  4Cl<SUP>-</SUP>(aq)  +  H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq) =>  4Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + S(s)  +  3H<SUB>2</SUB>O",
    //       ne: 4,
    //       num: 3,
    //       Eo: 0.181,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -4, b: -1, c: -4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Ag(s) +  5Cl<SUP>-</SUP>(aq) + MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  8H<SUP>+</SUP>(aq) =>  5AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  4H<SUB>2</SUB>O",
    //       ne: 5,
    //       num: 4,
    //       Eo: 1.278,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -5, b: -1, c: -8, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Al(s)  +  MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  => Al<SUP>3+</SUP>(aq) + MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
    //       ne: 3,
    //       num: 3,
    //       Eo: 3.37,
    //       c1: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Al<SUP>3+</SUP>]",
    //     },
    //     facts: { a: -1, b: -4, c: 1, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "4Ag(s)  +  4Cl<SUP>-</SUP>(aq)  + O<SUB>2</SUB>(g)  +  4H<SUP>+</SUP>(aq)  =>  4AgCl(s) + 2H<SUB>2</SUB>O",
    //       ne: 4,
    //       num: 3,
    //       Eo: 1.007,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[O<SUB>2</SUB>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -4, b: -1, c: -4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "6Hg(l)  +  5Cl<SUP>-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 1.182,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -5, b: -1, c: -6, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Pb(s)  +  2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  =>  5Pb<SUP>2+</SUP>(aq) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 1.325,
    //       c1: "[IO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: 12, c: 5, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Al(s)  + 3MnO<SUB>2</SUB>(s)  +  12H<SUP>+</SUP> =>2Al<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  6H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 2.9,
    //       c1: "[H<SUP>+</SUP>]",
    //       c2: "[Al<SUP>3+</SUP>]",
    //       c3: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -12, b: 2, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "10Ag(s)  +  10Cl<SUP>-</SUP>(aq)  + 2BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUp>+</SUp>(aq) => 10AgCl(s) + Br<SUB>2</SUB>(l)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 1.258,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[BrO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUp>+</SUp>]",
    //     },
    //     facts: { a: -10, b: -2, c: -12, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Pb(s) + 2MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  16H<SUP>+</SUP>(aq) =>5Pb<SUP>2+</SUP>(aq) + 2Mn<SUP>2+</SUP>(aq)  +  8H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 4,
    //       Eo: 1.375,
    //       c1: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //       c4: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -16, c: 5, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2In(s) + ClO<SUB>3</SUB><SUP>-</SUP>(aq) + 6H<SUP>+</SUP>(aq) =>2In<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.788,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[In<SUP>3+</SUP>]",
    //       c4: "[Cl<SUP>-</SUP>]",
    //     },
    //     facts: { a: -1, b: -6, c: 2, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "4Al(s) + 3H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  12H<SUP>+</SUP>(aq)  =>  4Al<SUP>3+</SUP>(aq) + 3S(s)  +  9H<SUB>2</SUB>O",
    //       ne: 12,
    //       num: 3,
    //       Eo: 0.785,
    //       c1: "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Al<SUP>3+</SUP>]",
    //     },
    //     facts: { a: -3, b: -12, c: 4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "10In(s)  + 3BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  36H<SUp>+</SUp>(aq) => 10In<SUP>3+</SUP>(aq) + 3Br<SUB>2</SUB>(l)  +  18H<SUB>2</SUB>O",
    //       ne: 30,
    //       num: 3,
    //       Eo: 1.815,
    //       c1: "[BrO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUp>+</SUp>]",
    //       c3: "[In<SUP>3+</SUP>]",
    //     },
    //     facts: { a: -3, b: -36, c: 10, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Al(s)  + 3ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq) => Al<SUP>3+</SUP>(aq) + 3ClO<SUB>2</SUB>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 3,
    //       num: 4,
    //       Eo: 2.795,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Al<SUP>3+</SUP>]",
    //       c4: "[ClO<SUB>2</SUB>]",
    //     },
    //     facts: { a: -3, b: -6, c: 1, d: 3 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5In(s)  + 3MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  24H<SUP>+</SUP>(aq) => 5In<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  12H<SUB>2</SUB>O",
    //       ne: 15,
    //       num: 4,
    //       Eo: 1.838,
    //       c1: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[In<SUP>3+</SUP>]",
    //       c4: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -3, b: -24, c: 5, d: 3 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  16H<SUP>+</SUP>(aq) =>  5PbSO<SUB>4</SUB>(s) + 2Mn<SUP>2+</SUP>(aq)  +  8H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 4,
    //       Eo: 1.856,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[MnO<SUB>4</SUB><SUP>-</SUP>(aq)]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -5, b: -2, c: -16, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Ag(s)  +  5Cl<SUP>-</SUP>(aq)  +  MnO<SUB>4</SUB><SUP>- </SUP>(aq) +  8H<SUP>+</SUP>(aq) => 5AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  4H<SUB>2</SUB>O",
    //       ne: 5,
    //       num: 4,
    //       Eo: 1.278,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -5, b: -1, c: -8, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + 2NO(g)  + 4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.312,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[NO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[NO]",
    //     },
    //     facts: { a: -3, b: -2, c: -8, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "6Hg(l)  +  6Cl<SUP>-</SUP>(aq) + 2NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq) => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + 2NO(g)  + 4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 0.688,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[NO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[NO]",
    //     },
    //     facts: { a: -6, b: -2, c: -8, d: 2 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq) + 2BrO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  => 5PbSO<SUB>4</SUB>(s) + Br<SUB>2</SUB>(l)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 1.362,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[BrO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "",
    //     },
    //     facts: { a: -5, b: -2, c: -12, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Ag(s)  +  3Cl<SUP>-</SUP>(aq)  + NO<SUB>3</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq) => 3AgCl(s) + NO(g)  + 2H<SUB>2</SUB>O",
    //       ne: 3,
    //       num: 4,
    //       Eo: 0.734,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[NO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //       c4: "[NO]",
    //     },
    //     facts: { a: -3, b: -1, c: -4, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s) + 2MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  =>3Pb<SUP>2+</SUP>(aq) + 2MnO<SUB>2</SUB>(sSUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -8, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Al(s) + MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  =>Al<SUP>3+</SUP>(aq) +  MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
    //       ne: 3,
    //       num: 3,
    //       Eo: 3.37,
    //       c1: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Al<SUP>3+</SUP>]",
    //     },
    //     facts: { a: -1, b: -4, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "6Hg(l)  +  6Cl<SUP>-</SUP>(aq)  + 2MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  8H<SUP>+</SUP>(aq)  => 3Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + 2MnO<SUB>2</SUB>(s)  +  4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 1.432,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -6, b: -2, c: -8, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Ag(s)  +  3Cl<SUP>-</SUP>(aq)  + MnO<SUB>4</SUB><SUP>-</SUP>(aq)  +  4H<SUP>+</SUP>(aq)  =>3AgCl(s) +  MnO<SUB>2</SUB>(s)  +  2H<SUB>2</SUB>O",
    //       ne: 3,
    //       num: 3,
    //       Eo: 1.476,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[MnO<SUB>4</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -3, b: -1, c: -4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Sn(s)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq)  => 5Sn<SUP>2+</SUP>(aq) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 1.337,
    //       c1: "[IO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Sn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -12, c: 5, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "6Ag(s)  +  5Cl<SUP>-</SUP>(aq)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 6AgCl(s) +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 1.228,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -5, b: -1, c: -6, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "10Ag(s)  +  10Cl<SUP>-</SUP>(aq)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq) => 10AgCl(s) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 0.978,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[IO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -10, b: -2, c: -12, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "5Pb(s)  +  5SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + 2IO<SUB>3</SUB><SUP>-</SUP>(aq)  +  12H<SUP>+</SUP>(aq) => 5PbSO<SUB>4</SUB>(s) + I<SUB>2</SUB>(s)  +  6H<SUB>2</SUB>O",
    //       ne: 10,
    //       num: 3,
    //       Eo: 1.556,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[IO<SUB>3</SUB><SUP>-</SUP>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -5, b: -2, c: -12, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Pb(s)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq)  => 2Pb<SUP>2+</SUP>(aq) + S(s)  +  3H<SUB>2</SUB>O",
    //       ne: 4,
    //       num: 3,
    //       Eo: 0.574,
    //       c1: "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -1, b: -4, c: 2, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "4Ag(s)  +  4Cl<SUP>-</SUP>(aq)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq)  => 4AgCl(s) + S(s)  +  3H<SUB>2</SUB>O",
    //       ne: 4,
    //       num: 3,
    //       Eo: 0.227,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -4, b: -1, c: -4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "4Hg(l)  +  4Cl<SUP>-</SUP>(aq)  + H<SUB>2</SUB>SO<SUB>3</SUB>(aq)  +  4H<SUP>+</SUP>(aq) => 2Hg<SUB>2</SUB>Cl<SUB>2</SUB>(s) + S(s)  +  3H<SUB>2</SUB>O",
    //       ne: 4,
    //       num: 3,
    //       Eo: 0.181,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[H<SUB>2</SUB>SO<SUB>3</SUB>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -4, b: -1, c: -4, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s) + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3Pb<SUP>2+</SUP>(aq) + 2As(s)  +  4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 0.365,
    //       c1: "[HAsO<SUB>2</SUB>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -6, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Sn(s) + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3Sn<SUP>2+</SUP>(aq) + 2As(s)  +  4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 0.377,
    //       c1: "[HAsO<SUB>2</SUB>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Sn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -6, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s)  +  3SO<SUB>4</SUB><SUP>2-</SUP>(aq)  + 2HAsO<SUB>2</SUB>(aq) +  6H<SUP>+</SUP>(aq)  => 3PbSO<SUB>4</SUB>(s) + 2As(s)  +  4H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 0.596,
    //       c1: "[SO<SUB>4</SUB><SUP>2-</SUP>]",
    //       c2: "[HAsO<SUB>2</SUB>]",
    //       c3: "[H<SUP>+</SUP>]",
    //     },
    //     facts: { a: -3, b: -2, c: -6, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "Pb(s)  + MnO<SUB>2</SUB>(s)  +  4H<SUP>+</SUP>(aq) => Pb<SUP>2+</SUP>(aq) + Mn<SUP>2+</SUP>(aq)  +  2H<SUB>2</SUB>O",
    //       ne: 2,
    //       num: 3,
    //       Eo: 1.355,
    //       c1: "[H<SUP>+</SUP>]",
    //       c2: "[Pb<SUP>2+</SUP>]",
    //       c3: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -4, b: 1, c: 1, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2In(s) + 3MnO<SUB>2</SUB>(s)  +  12H<SUP>+</SUP>(aq) => 2In<SUP>3+</SUP>(aq) + 3Mn<SUP>2+</SUP>(aq)  +  6H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 3,
    //       Eo: 1.568,
    //       c1: "[H<SUP>+</SUP>]",
    //       c2: "[In<SUP>3+</SUP>]",
    //       c3: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -12, b: 2, c: 3, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Ag(s)  +  2Cl<SUP>-</SUP>(aq)  + MnO<SUB>2</SUB>(s)  +  4H<SUP>+</SUP>(aq) => 2AgCl(s) + Mn<SUP>2+</SUP>(aq)  +  2H<SUB>2</SUB>O",
    //       ne: 2,
    //       num: 3,
    //       Eo: 1.008,
    //       c1: "[Cl<SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Mn<SUP>2+</SUP>]",
    //     },
    //     facts: { a: -2, b: -4, c: 1, d: 0 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "3Pb(s)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 3Pb<SUP>2+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.575,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Pb<SUP>2+</SUP>]",
    //       c4: "[Cl<SUP>-</SUP>]",
    //     },
    //     facts: { a: -1, b: -6, c: 3, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2In(s) + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 2In<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 1.788,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[In<SUP>3+</SUP>]",
    //       c4: "[Cl<SUP>-</SUP>]",
    //     },
    //     facts: { a: -1, b: -6, c: 2, d: 1 },
    //   },
    //   {
    //     rxn: {
    //       formula:
    //         "2Al(s)  + ClO<SUB>3</SUB><SUP>-</SUP>(aq)  +  6H<SUP>+</SUP>(aq)  => 2Al<SUP>3+</SUP>(aq) + Cl<SUP>-</SUP>(aq)  +  3H<SUB>2</SUB>O",
    //       ne: 6,
    //       num: 4,
    //       Eo: 3.12,
    //       c1: "[ClO<SUB>3</SUB><SUP>-</SUP>]",
    //       c2: "[H<SUP>+</SUP>]",
    //       c3: "[Al<SUP>3+</SUP>]",
    //       c4: "[Cl<SUP>-</SUP>]",
    //     },
    //     facts: { a: -1, b: -6, c: 2, d: 1 },
    //   },
    // ];
    //
    // const conca = cp.Random.float();
    // const concb = cp.Random.float();
    // const concc = cp.Random.float();
    // const concd = cp.Random.float();
    // const r = reactions[cp.Random.int(0, reactions.length - 1)];
    // const Q =
    //   Math.pow(conca, r.facts.a) *
    //   Math.pow(concb, r.facts.b) *
    //   Math.pow(concc, r.facts.c) *
    //   Math.pow(concd, r.facts.d);
    // const E = r.rxn.E0 - (0.059 / r.rxn.ne) * (Math.log(Q) / 2.303);
    // const n = r.rxn.num;
    // const formula = r.rxn.formula;
    // const pot = " E<sup>o</sup> = " + r.rxn.Eo;
    // const concs = [
    //   conca.toFixed(2),
    //   concb.toFixed(2),
    //   concc.toFixed(2),
    //   concd.toFixed(2),
    // ];
    // const display = [];
    // for (let i = 1; i <= n; i++) {
    //   display.push(`${r.rxn["c" + i]} = ${concs[i - 1]} <span>M</span>`);
    // }
    //
    // const line1 = `<div class="parameter formula">${r.rxn.formula}</div>`;
    // const line2 = `<div>${pot}</div>`;
    // const disp = display.map((d) => `<div>${d}</div>`).join("");
    //
    // $("#q").html(line1 + line2 + disp);
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
