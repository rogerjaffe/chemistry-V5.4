(function (cp) {
  cp.generateNewQuestion = () => {
    // thepage = "Mass relationships in Chemical Formulas(18)";
    // howlng = "";
    // totl = 0;
    // corrt = 0;
    // tried = 0;
    let which = "";
    let relation = "";
    // tried = 0;
    let theanswer = "";
    let ans = new Array();
    // function clear() {
    //   theanswer = "";
    //   document.forms[0].results.value = "";
    //   tried = 0;
    // }
    // function cleanse() {
    //   clear();
    //   document.forms[0].total.value = 0;
    //   document.forms[0].correct.value = 0;
    //   document.forms[0].time.value = "";
    // }

    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function element(atom, mass) {
      this.atom = atom;
      this.mass = mass;
    }
    function formula(form, gfw, num) {
      this.form = form;
      this.gfw = gfw;
      this.num = num;
    }
    function percents(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    function parts(e1, e2, e3, e4) {
      this.e1 = e1;
      this.e2 = e2;
      this.e3 = e3;
      this.e4 = e4;
    }
    function question(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
    let quest = new MakeArray(10);
    quest[1] = new question(
      " has a mass of ",
      " grams. How many grams of ",
      " does it contain?",
      ""
    );
    quest[2] = new question(
      " has a mass of ",
      " grams. How many moles of ",
      " does it contain?",
      ""
    );
    quest[3] = new question(
      " contains ",
      " moles of compound. How many grams of ",
      " does it contain?",
      ""
    );
    quest[4] = new question(
      " contains ",
      " moles of compound. How many moles of ",
      " does it contain?",
      ""
    );
    quest[5] = new question(
      " contains ",
      " grams of ",
      ". What is the total mass of the sample?",
      ""
    );
    quest[6] = new question(
      " contains ",
      " grams of ",
      ". How many moles of compound are present?",
      ""
    );
    quest[7] = new question(
      " contains ",
      " grams of ",
      ". How many grams of ",
      " does it contain?"
    );
    quest[8] = new question(
      " contains ",
      " grams of ",
      ". How many moles of ",
      " does it contain?"
    );
    quest[9] = new question(
      " contains ",
      " moles of ",
      ". What is the total mass of the sample?",
      ""
    );
    quest[10] = new question(
      " contains ",
      " moles of ",
      " How many moles of compound are present?",
      ""
    );
    quest[11] = new question(
      " contains ",
      " moles of ",
      ". How many grams of ",
      " does it contain?"
    );
    quest[12] = new question(
      " contains ",
      " moles of ",
      ". How many moles of ",
      " does it contain?"
    );

    let atoms = new MakeArray(110);
    let pcents = new MakeArray(110);
    let compound = new MakeArray(110);
    compound[1] = new formula(
      "C<SUB>6</SUB>H<SUB>14</SUB>O<SUB>3</SUB>",
      134.2,
      3
    );
    atoms[1] = new parts("C", "H", "O");
    pcents[1] = new percents(53.71, 10.52, 35.77);
    compound[2] = new formula(
      "C<SUB>10</SUB>H<SUB>4</SUB>Cl<SUB>2</SUB>O<SUB>2</SUB>",
      227.1,
      4
    );
    atoms[2] = new parts("C", "H", "Cl", "O");
    pcents[2] = new percents(52.9, 1.78, 31.33, 14.09);
    compound[3] = new formula(
      "Na<SUB>2</SUB>S<SUB>2</SUB>O<SUB>5</SUB>",
      190.1,
      3
    );
    atoms[3] = new parts("Na", "S", "O");
    pcents[3] = new percents(24.19, 33.73, 42.08);
    compound[4] = new formula("C<SUB>10</SUB>H<SUB>10</SUB>Fe", 186, 3);
    atoms[4] = new parts("C", "H", "Fe");
    pcents[4] = new percents(64.56, 5.42, 30.02);
    compound[5] = new formula(
      "C<SUB>8</SUB>H<SUB>7</SUB>NO<SUB>4</SUB>",
      181.1,
      4
    );
    atoms[5] = new parts("C", "H", "N", "O");
    pcents[5] = new percents(53.04, 3.9, 7.73, 35.33);
    compound[6] = new formula(
      "C<SUB>4</SUB>H<SUB>7</SUB>Br<SUB>3</SUB>O",
      310.8,
      4
    );
    atoms[6] = new parts("C", "H", "Br", "O");
    pcents[6] = new percents(15.45, 2.27, 77.13, 5.15);
    compound[7] = new formula("Li<SUB>2</SUB>SiO<SUB>3</SUB>", 89.97, 3);
    atoms[7] = new parts("Li", "Si", "O");
    pcents[7] = new percents(15.43, 31.22, 53.35);
    compound[8] = new formula("KH<SUB>2</SUB>PO<SUB>2</SUB>", 104.1, 4);
    atoms[8] = new parts("K", "H", "P", "O");
    pcents[8] = new percents(37.56, 1.94, 30.74, 29.79);
    compound[9] = new formula(
      "C<SUB>9</SUB>H<SUB>7</SUB>O<SUB>2</SUB>Na",
      170.1,
      4
    );
    atoms[9] = new parts("C", "H", "O", "Na");
    pcents[9] = new percents(63.53, 4.15, 18.81, 13.52);
    compound[10] = new formula(
      "C<SUB>2</SUB>H<SUB>5</SUB>NO<SUB>2</SUB>",
      75.1,
      4
    );
    atoms[10] = new parts("C", "H", "N", "O");
    pcents[10] = new percents(32, 6.71, 18.66, 42.63);
    compound[11] = new formula("C<SUB>6</SUB>H<SUB>5</SUB>MgCl", 136.9, 4);
    atoms[11] = new parts("C", "H", "Mg", "Cl");
    pcents[11] = new percents(52.64, 3.68, 17.77, 25.91);
    compound[12] = new formula(
      "C<sub>12</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub>",
      218.25,
      4
    );
    atoms[12] = new parts("C", "H", "N", "O");
    pcents[12] = new percents(66.03, 6.47, 12.84, 14.66);
    compound[13] = new formula(
      "C<sub>16</sub>H<sub>12</sub>O<sub>5</sub>",
      284.26,
      3
    );
    atoms[13] = new parts("C", "H", "O");
    pcents[13] = new percents(67.6, 4.26, 28.14);
    compound[14] = new formula("C<sub>2</sub>H<sub>4</sub>O", 44.05, 3);
    atoms[14] = new parts("C", "H", "O");
    pcents[14] = new percents(54.53, 9.15, 36.32);
    compound[15] = new formula("C<sub>2</sub>H<sub>7</sub>NO", 61.08, 4);
    atoms[15] = new parts("C", "H", "N", "O");
    pcents[15] = new percents(39.32, 11.55, 22.93, 26.19);
    compound[16] = new formula("C<sub>2</sub>H<sub>5</sub>NO", 59.07, 4);
    atoms[16] = new parts("C", "H", "N", "O");
    pcents[16] = new percents(40.66, 8.53, 23.72, 27.09);
    compound[17] = new formula(
      "C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub>",
      151.16,
      4
    );
    atoms[17] = new parts("C", "H", "N", "O");
    pcents[17] = new percents(63.56, 6.0, 9.27, 21.17);
    compound[18] = new formula(
      "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>",
      60.05,
      3
    );
    atoms[18] = new parts("C", "H", "O");
    pcents[18] = new percents(40.0, 6.71, 53.29);
    compound[19] = new formula(
      "C<sub>4</sub>H<sub>6</sub>O<sub>3</sub>",
      102.09,
      3
    );
    atoms[19] = new parts("C", "H", "O");
    pcents[19] = new percents(47.06, 5.92, 47.02);
    compound[20] = new formula(
      "C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>",
      88.1,
      3
    );
    atoms[20] = new parts("C", "H", "O");
    pcents[20] = new percents(54.53, 9.15, 36.32);
    compound[21] = new formula("C<sub>3</sub>H<sub>6</sub>O", 58.08, 3);
    atoms[21] = new parts("C", "H", "O");
    pcents[21] = new percents(62.04, 10.41, 27.55);
    compound[22] = new formula(
      "C<sub>9</sub>H<sub>8</sub>O<sub>4</sub>",
      180.15,
      3
    );
    atoms[22] = new parts("C", "H", "O");
    pcents[22] = new percents(60.0, 4.48, 35.52);
    compound[23] = new formula("C<sub>2</sub>H<sub>3</sub>ClO", 78.5, 4);
    atoms[23] = new parts("C", "H", "Cl", "O");
    pcents[23] = new percents(30.6, 3.85, 45.17, 20.38);
    compound[24] = new formula("C<sub>2</sub>H<sub>3</sub>IO", 169.96, 4);
    atoms[24] = new parts("C", "H", "I", "O");
    pcents[24] = new percents(14.13, 1.78, 74.68, 9.41);
    compound[25] = new formula(
      "C<sub>3</sub>H<sub>4</sub>O<sub>2</sub>",
      72.06,
      3
    );
    atoms[25] = new parts("C", "H", "O");
    pcents[25] = new percents(50.0, 5.6, 44.4);
    compound[26] = new formula(
      "C<sub>5</sub>H<sub>5</sub>N<sub>5</sub>",
      135.14,
      3
    );
    atoms[26] = new parts("C", "H", "N");
    pcents[26] = new percents(44.45, 3.73, 51.82);
    compound[27] = new formula(
      "C<sub>4</sub>H<sub>6</sub>N<sub>2</sub>O<sub>2</sub>",
      114.1,
      4
    );
    atoms[27] = new parts("C", "H", "N", "O");
    pcents[27] = new percents(42.1, 5.3, 24.55, 28.05);
    compound[28] = new formula(
      "C<sub>3</sub>H<sub>7</sub>N<sub>3</sub>O<sub>4</sub>",
      149.11,
      4
    );
    atoms[28] = new parts("C", "H", "N", "O");
    pcents[28] = new percents(24.16, 4.73, 28.18, 42.92);
    compound[29] = new formula("C<sub>2</sub>H<sub>6</sub>O", 46.07, 3);
    atoms[29] = new parts("C", "H", "O");
    pcents[29] = new percents(52.14, 13.13, 34.74);
    compound[30] = new formula(
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
      180.16,
      3
    );
    atoms[30] = new parts("C", "H", "O");
    pcents[30] = new percents(40.0, 6.71, 53.29);
    compound[31] = new formula("C<sub>6</sub>H<sub>10</sub>O", 98.14, 3);
    atoms[31] = new parts("C", "H", "O");
    pcents[31] = new percents(73.43, 10.27, 16.3);
    compound[32] = new formula("AlN<sub>3</sub>O<sub>9</sub>", 213.0, 3);
    atoms[32] = new parts("Al", "N", "O");
    pcents[32] = new percents(12.67, 19.73, 67.6);
    compound[33] = new formula("Al<sub>2</sub>SiO<sub>5</sub>", 162.05, 3);
    atoms[33] = new parts("Al", "Si", "O");
    pcents[33] = new percents(33.3, 49.37, 17.33);
    compound[34] = new formula("AlKO<sub>8</sub>S<sub>2</sub>", 258.2, 4);
    atoms[34] = new parts("Al", "K", "O", "S");
    pcents[34] = new percents(10.45, 15.14, 49.57, 24.83);
    compound[35] = new formula(
      "Al<sub>2</sub>O<sub>12</sub>S<sub>3</sub>",
      342.14,
      3
    );
    atoms[35] = new parts("Al", "O", "S");
    pcents[35] = new percents(15.77, 56.12, 28.11);
    compound[36] = new formula(
      "C<sub>4</sub>H<sub>6</sub>N<sub>2</sub>S",
      114.18,
      4
    );
    atoms[36] = new parts("C", "H", "N", "S");
    pcents[36] = new percents(42.07, 5.3, 24.54, 28.09);
    compound[37] = new formula(
      "H<sub>6</sub>N<sub>2</sub>O<sub>3</sub>S",
      114.13,
      4
    );
    atoms[37] = new parts("H", "N", "O", "S");
    pcents[37] = new percents(5.3, 24.55, 42.06, 28.1);
    compound[38] = new formula("C<sub>5</sub>H<sub>11</sub>Cl", 106.6, 3);
    atoms[38] = new parts("C", "H", "Cl");
    pcents[38] = new percents(56.34, 10.4, 33.26);
    compound[39] = new formula(
      "C<sub>8</sub>H<sub>10</sub>O<sub>2</sub>",
      138.16,
      3
    );
    atoms[39] = new parts("C", "H", "O");
    pcents[39] = new percents(69.54, 7.3, 23.16);
    compound[40] = new formula(
      "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O<sub>2</sub>",
      174.2,
      4
    );
    atoms[40] = new parts("C", "H", "N", "O");
    pcents[40] = new percents(41.36, 8.1, 32.16, 18.37);
    compound[41] = new formula(
      "C<sub>4</sub>H<sub>7</sub>NO<sub>4</sub>",
      133.1,
      4
    );
    atoms[41] = new parts("C", "H", "N", "O");
    pcents[41] = new percents(36.09, 5.3, 10.52, 48.08);
    compound[42] = new formula("BaCO<sub>3</sub>", 197.37, 3);
    atoms[42] = new parts("Ba", "C", "O");
    pcents[42] = new percents(69.58, 6.09, 24.32);
    compound[43] = new formula("Ba(CN)<sub>2</sub>", 189.4, 3);
    atoms[43] = new parts("Ba", "C", "N");
    pcents[43] = new percents(72.52, 12.98, 14.79);
    compound[44] = new formula("Ba(ClO<sub>4</sub>)<sub>2</sub>", 336.27, 3);
    atoms[44] = new parts("Ba", "Cl", "O");
    pcents[44] = new percents(40.85, 21.09, 38.06);
    compound[45] = new formula("Ba(MnO<sub>4</sub>)<sub>2</sub>", 375.22, 3);
    atoms[45] = new parts("Ba", "Mn", "O");
    pcents[45] = new percents(36.61, 29.28, 34.12);
    compound[46] = new formula("BaSO<sub>3</sub>", 217.42, 3);
    atoms[46] = new parts("Ba", "S", "O");
    pcents[46] = new percents(63.16, 14.75, 22.08);
    compound[47] = new formula(
      "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>",
      194.19,
      4
    );
    atoms[47] = new parts("C", "H", "N", "O");
    pcents[47] = new percents(49.48, 5.19, 28.85, 16.48);
    compound[48] = new formula("Ca(CN)<sub>2</sub>", 92.12, 3);
    atoms[48] = new parts("Ca", "C", "N");
    pcents[48] = new percents(26.08, 43.52, 30.41);
    compound[49] = new formula("Ca(OCl)<sub>2</sub>", 142.99, 3);
    atoms[49] = new parts("Ca", "O", "Cl");
    pcents[49] = new percents(28.03, 22.38, 49.59);
    compound[50] = new formula("CaMoO<sub>4</sub>", 200.03, 3);
    atoms[50] = new parts("Ca", "Mo", "O");
    pcents[50] = new percents(20.04, 47.98, 32.0);
    compound[51] = new formula("Ca(MnO<sub>4</sub>)<sub>2</sub>", 277.94, 3);
    atoms[51] = new parts("Ca", "Mn", "O");
    pcents[51] = new percents(14.42, 39.53, 46.05);
    compound[52] = new formula("COF<sub>2</sub>", 66.01, 3);
    atoms[52] = new parts("C", "O", "F");
    pcents[52] = new percents(18.19, 24.24, 57.57);
    compound[53] = new formula("Cs<sub>2</sub>SO<sub>4</sub>", 361.89, 3);
    atoms[53] = new parts("Cs", "S", "O");
    pcents[53] = new percents(73.45, 8.86, 17.69);
    compound[54] = new formula("C<sub>2</sub>H<sub>3</sub>ClO", 78.5, 4);
    atoms[54] = new parts("C", "H", "Cl", "O");
    pcents[54] = new percents(30.6, 3.85, 45.17, 20.38);
    compound[55] = new formula("C<sub>6</sub>H<sub>5</sub>Cl", 112.56, 3);
    atoms[55] = new parts("C", "H", "Cl");
    pcents[55] = new percents(64.02, 4.48, 31.5);
    compound[56] = new formula("CHCl<sub>3</sub>", 119.39, 3);
    atoms[56] = new parts("C", "H", "Cl");
    pcents[56] = new percents(10.05, 0.84, 89.1);
    compound[57] = new formula("Cr(NO<sub>3</sub>)<sub>3</sub>", 238.03, 3);
    atoms[57] = new parts("Cr", "N", "O");
    pcents[57] = new percents(21.85, 17.65, 60.5);
    compound[58] = new formula("CrSO<sub>4</sub>", 148.07, 3);
    atoms[58] = new parts("Cr", "S", "O");
    pcents[58] = new percents(35.13, 21.65, 43.22);
    compound[59] = new formula("CrO<sub>2</sub>Cl<sub>2</sub>", 154.92, 3);
    atoms[59] = new parts("Cr", "O", "Cl");
    pcents[59] = new percents(33.57, 20.66, 45.77);
    compound[60] = new formula("CrO<sub>2</sub>F<sub>2</sub>", 122.01, 3);
    atoms[60] = new parts("Cr", "O", "F");
    pcents[60] = new percents(42.63, 26.23, 31.14);
    compound[61] = new formula(
      "C<sub>9</sub>H<sub>6</sub>O<sub>2</sub>",
      146.14,
      3
    );
    atoms[61] = new parts("C", "H", "O");
    pcents[61] = new percents(73.96, 4.14, 21.9);
    compound[62] = new formula("C<sub>7</sub>H<sub>8</sub>O", 108.13, 3);
    atoms[62] = new parts("C", "H", "O");
    pcents[62] = new percents(77.75, 7.46, 14.8);
    compound[63] = new formula("CuC<sub>2</sub>O<sub>4</sub>", 151.16, 3);
    atoms[63] = new parts("Cu", "C", "O");
    pcents[63] = new percents(41.92, 15.85, 42.23);
    compound[64] = new formula("Cu(ClO<sub>4</sub>)<sub>2</sub>", 262.45, 3);
    atoms[64] = new parts("Cu", "Cl", "O");
    pcents[64] = new percents(24.21, 27.02, 48.77);
    compound[65] = new formula("CuCN", 89.56, 3);
    atoms[65] = new parts("Cu", "C", "N");
    pcents[65] = new percents(70.95, 13.41, 15.64);
    compound[66] = new formula("CNI", 152.94, 3);
    atoms[66] = new parts("C", "N", "I");
    pcents[66] = new percents(7.85, 9.16, 82.99);
    compound[67] = new formula(
      "C<sub>4</sub>H<sub>10</sub>O<sub>4</sub>S",
      154.19,
      4
    );
    atoms[67] = new parts("C", "H", "O", "S");
    pcents[67] = new percents(31.16, 6.54, 41.5, 20.8);
    compound[68] = new formula("Zn(CH<sub>3</sub>)<sub>2</sub>", 95.45, 3);
    atoms[68] = new parts("Zn", "C", "H");
    pcents[68] = new percents(68.5, 25.17, 6.34);
    compound[69] = new formula(
      "Mg(C<sub>6</sub>H<sub>5</sub>)<sub>2</sub>",
      178.52,
      3
    );
    atoms[69] = new parts("Mg", "C", "H");
    pcents[69] = new percents(13.62, 80.73, 5.65);
    compound[70] = new formula(
      "C<sub>8</sub>H<sub>11</sub>NO<sub>2</sub>",
      153.18,
      4
    );
    atoms[70] = new parts("C", "H", "N", "O");
    pcents[70] = new percents(62.72, 7.24, 9.14, 20.89);
    compound[71] = new formula(
      "C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>",
      119.12,
      4
    );
    atoms[71] = new parts("C", "H", "N", "O");
    pcents[71] = new percents(40.33, 7.62, 11.76, 40.29);
    compound[72] = new formula("H<sub>3</sub>NO", 33.03, 3);
    atoms[72] = new parts("H", "N", "O");
    pcents[72] = new percents(9.15, 42.41, 48.44);
    compound[73] = new formula("HClO", 52.47, 3);
    atoms[73] = new parts("H", "Cl", "O");
    pcents[73] = new percents(1.92, 67.58, 30.5);
    compound[74] = new formula("C<sub>4</sub>H<sub>9</sub>Cl", 92.53, 3);
    atoms[74] = new parts("C", "H", "Cl");
    pcents[74] = new percents(51.9, 9.8, 38.3);
    compound[75] = new formula(
      "C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>",
      90.08,
      3
    );
    atoms[75] = new parts("C", "H", "O");
    pcents[75] = new percents(40.0, 6.71, 53.29);
    compound[76] = new formula("PbC<sub>2</sub>O<sub>4</sub>", 295.23, 3);
    atoms[76] = new parts("Pb", "C", "O");
    pcents[76] = new percents(70.19, 8.14, 21.68);
    compound[77] = new formula("Pb(ClO<sub>3</sub>)<sub>2</sub>", 374.12, 3);
    atoms[77] = new parts("Pb", "Cl", "O");
    pcents[77] = new percents(55.39, 18.95, 25.66);
    compound[78] = new formula("PbSO<sub>3</sub>", 287.28, 3);
    atoms[78] = new parts("Pb", "S", "O");
    pcents[78] = new percents(72.13, 11.16, 16.71);
    compound[79] = new formula(
      "C<sub>2</sub>H<sub>4</sub>S<sub>5</sub>",
      188.38,
      3
    );
    atoms[79] = new parts("C", "H", "S");
    pcents[79] = new percents(12.75, 2.14, 85.11);
    compound[80] = new formula("Li<sub>2</sub>CO<sub>3</sub>", 73.89, 3);
    atoms[80] = new parts("Li", "C", "O");
    pcents[80] = new percents(18.78, 16.25, 64.96);
    compound[81] = new formula("LiClO<sub>4</sub>", 106.4, 3);
    atoms[81] = new parts("Li", "Cl", "O");
    pcents[81] = new percents(6.52, 33.33, 60.15);
    compound[82] = new formula(
      "C<sub>9</sub>H<sub>15</sub>N<sub>3</sub>O<sub>7</sub>",
      277.23,
      4
    );
    atoms[82] = new parts("C", "H", "N", "O");
    pcents[82] = new percents(38.99, 5.45, 15.16, 40.4);
    compound[83] = new formula("Mg(IO<sub>3</sub>)<sub>2</sub>", 374.14, 3);
    atoms[83] = new parts("Mg", "I", "O");
    pcents[83] = new percents(6.49, 67.84, 25.66);
    compound[84] = new formula("MgSO<sub>4</sub>", 120.38, 3);
    atoms[84] = new parts("Mg", "S", "O");
    pcents[84] = new percents(20.2, 53.16, 26.63);
    compound[85] = new formula(
      "C<sub>4</sub>H<sub>5</sub>NO<sub>3</sub>",
      115.09,
      4
    );
    atoms[85] = new parts("C", "H", "N", "O");
    pcents[85] = new percents(41.74, 4.38, 12.17, 41.71);
    compound[86] = new formula("MnSO<sub>3</sub>", 135.0, 3);
    atoms[86] = new parts("Mn", "S", "O");
    pcents[86] = new percents(40.69, 23.75, 35.56);
    compound[87] = new formula(
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
      180.16,
      3
    );
    atoms[87] = new parts("C", "H", "O");
    pcents[87] = new percents(40.0, 6.71, 53.29);
    compound[88] = new formula(
      "C<sub>7</sub>H<sub>4</sub>O<sub>7</sub>",
      200.1,
      3
    );
    atoms[88] = new parts("C", "H", "O");
    pcents[88] = new percents(42.01, 2.01, 55.97);
    compound[89] = new formula(
      "C<sub>5</sub>H<sub>4</sub>N<sub>4</sub>S",
      152.19,
      4
    );
    atoms[89] = new parts("C", "H", "N", "S");
    pcents[89] = new percents(39.46, 2.65, 36.82, 21.07);
    compound[90] = new formula(
      "C<sub>4</sub>H<sub>6</sub>HgO<sub>4</sub>",
      318.7,
      4
    );
    atoms[90] = new parts("C", "H", "Hg", "O");
    pcents[90] = new percents(15.07, 1.9, 62.95, 20.08);
    compound[91] = new formula("HgSO<sub>4</sub>", 296.68, 3);
    atoms[91] = new parts("Hg", "S", "O");
    pcents[91] = new percents(67.62, 10.81, 21.57);
    compound[92] = new formula("HgClO<sub>3</sub>", 284.07, 3);
    atoms[92] = new parts("Hg", "Cl", "O");
    pcents[92] = new percents(70.62, 12.48, 16.9);
    compound[92] = new formula(
      "C<sub>11</sub>H<sub>17</sub>NO<sub>3</sub>",
      211.25,
      4
    );
    atoms[92] = new parts("C", "H", "N", "O");
    pcents[92] = new percents(62.54, 8.11, 6.63, 22.72);
    compound[93] = new formula(
      "C<sub>11</sub>H<sub>8</sub>O<sub>2</sub>",
      172.17,
      3
    );
    atoms[93] = new parts("C", "H", "O");
    pcents[93] = new percents(76.73, 4.68, 18.58);
    compound[94] = new formula("C<sub>10</sub>H<sub>13</sub>Cl", 168.67, 3);
    atoms[94] = new parts("C", "H", "Cl");
    pcents[94] = new percents(71.21, 7.77, 21.02);
    compound[95] = new formula("Ni(CO)<sub>4</sub>", 170.73, 3);
    atoms[95] = new parts("Ni", "C", "O");
    pcents[95] = new percents(28.13, 34.38, 37.48);
    compound[96] = new formula("NiSeO<sub>3</sub>", 185.65, 3);
    atoms[96] = new parts("Ni", "Se", "O");
    pcents[96] = new percents(31.61, 42.53, 25.85);
    compound[97] = new formula(
      "C<sub>6</sub>H<sub>7</sub>N<sub>3</sub>O",
      137.14,
      4
    );
    atoms[97] = new parts("C", "H", "N", "O");
    pcents[97] = new percents(52.54, 5.15, 30.64, 11.67);
    compound[98] = new formula("NOCl", 65.47, 3);
    atoms[98] = new parts("N", "O", "Cl");
    pcents[98] = new percents(21.4, 24.44, 54.16);
    compound[99] = new formula("NO<sub>2</sub>F", 65.01, 3);
    atoms[99] = new parts("N", "O", "F");
    pcents[99] = new percents(21.55, 49.22, 29.23);
    compound[100] = new formula("Pd(NO<sub>3</sub>)<sub>2</sub>", 230.42, 3);
    atoms[100] = new parts("Pd", "N", "O");
    pcents[100] = new percents(46.18, 12.16, 41.66);
    compound[101] = new formula("H<sub>5</sub>IO<sub>6</sub>", 227.96, 3);
    atoms[101] = new parts("H", "I", "O");
    pcents[101] = new percents(2.21, 55.68, 42.11);
    compound[102] = new formula(
      "C<sub>6</sub>H<sub>6</sub>O<sub>4</sub>S",
      174.17,
      4
    );
    atoms[102] = new parts("C", "H", "O", "S");
    pcents[102] = new percents(41.37, 3.47, 36.74, 18.41);
    compound[103] = new formula(
      "C<sub>2</sub>H<sub>3</sub>KO<sub>2</sub>",
      98.14,
      4
    );
    atoms[103] = new parts("C", "H", "K", "O");
    pcents[103] = new percents(24.48, 3.08, 39.85, 32.6);
    compound[104] = new formula("C<sub>3</sub>H<sub>8</sub>O", 60.09, 3);
    atoms[104] = new parts("C", "H", "O");
    pcents[104] = new percents(59.96, 13.42, 26.62);
    compound[105] = new formula(
      "C<sub>7</sub>H<sub>8</sub>O<sub>2</sub>",
      124.13,
      3
    );
    atoms[105] = new parts("C", "H", "O");
    pcents[105] = new percents(67.73, 6.5, 25.78);
    compound[106] = new formula("Na<sub>2</sub>SeO<sub>3</sub>", 172.95, 3);
    atoms[106] = new parts("Na", "Se", "O");
    pcents[106] = new percents(26.59, 45.65, 27.75);

    //Symbols and gaws for 30 common elements
    let gaws = new MakeArray(10);
    gaws[1] = new element("C", 12);
    gaws[2] = new element("H", 1);
    gaws[3] = new element("N", 14);
    gaws[4] = new element("O", 16);
    gaws[5] = new element("F", 19);
    gaws[6] = new element("Cl", 35.45);
    gaws[7] = new element("S", 32);
    gaws[8] = new element("Br", 80);
    gaws[9] = new element("Na", 23);
    gaws[10] = new element("Fe", 55.85);
    gaws[11] = new element("Si", 28.1);
    gaws[12] = new element("Mg", 24.3);
    gaws[13] = new element("Cr", 52);
    gaws[14] = new element("Li", 6.94);
    gaws[15] = new element("P", 30.97);
    gaws[16] = new element("Al", 26.98);
    gaws[17] = new element("B", 10.81);
    gaws[18] = new element("Ag", 107.87);
    gaws[19] = new element("K", 39.1);
    gaws[20] = new element("I", 126.9);
    gaws[21] = new element("Zn", 65.4);
    gaws[22] = new element("Cs", 132.9);
    gaws[23] = new element("Pb", 207.2);
    gaws[24] = new element("Sn", 118.7);
    gaws[25] = new element("Ca", 40.1);
    gaws[26] = new element("Hg", 200.6);
    gaws[27] = new element("Ni", 58.7);
    gaws[28] = new element("Cu", 63.55);
    gaws[29] = new element("Ba", 137.3);
    gaws[30] = new element("Co", 58.9);

    function choose() {
      // totl++;
      // document.forms[0].total.value = totl;
      // document.forms[0].results.value = "";
      // tried = 0;
      // clear();
      //choose compound,total mass,moles and make arrays of components and masses
      let f = Math.ceil(106 * Math.random());
      //document.forms[0].elements[1].value=f
      let cmpd = compound[f]["form"];
      let masst = Math.round(50000 * Math.random()) / 100;
      let molest = Math.round((100 * masst) / compound[f]["gfw"]) / 100;
      let elem = new MakeArray(4);
      let masse = new MakeArray(4);
      let molese = new MakeArray(4);
      //masses of component elements
      for (let i = 1; i <= compound[f]["num"]; i++) {
        elem[i] = atoms[f]["e" + i];
        masse[i] = 0.01 * masst * pcents[f]["p" + i];
        masse[i] = Math.round(100 * masse[i]) / 100;
      }
      //determine moles of component elements
      for (let i = 1; i <= compound[f]["num"]; i++) {
        for (let d = 1; d <= 30; d++) {
          if (elem[i] == gaws[d]["atom"]) {
            molese[i] = masse[i] / gaws[d]["mass"];
          }
          molese[i] = Math.round(100 * molese[i]) / 100;
        }
      }
      //select elem1 and elem2
      //elem1
      var k = Math.round(0.5 + compound[f]["num"] * Math.random());
      let elem1 = atoms[f]["e" + k];
      let moles1 = molese[k];
      let mass1 = masse[k];
      let elem2, moles2, mass2;
      //elem2
      for (let t = 0; t < 100; t++) {
        var j = Math.round(0.5 + compound[f]["num"] * Math.random());
        if (j != k) {
          elem2 = atoms[f]["e" + j];
          moles2 = molese[j];
          mass2 = masse[j];
          break;
        }
      }
      // console.log(cmpd)
      // console.log(masst)
      // console.log(molest)
      // console.log(elem)
      // console.log(masse)
      // console.log(molese)
      //select question
      var choice = Math.round(0.5 + 12 * Math.random());
      let a = quest[choice]["p1"];
      let b = quest[choice]["p2"];
      let c = quest[choice]["p3"];
      let d = quest[choice]["p4"];
      //select the remaining variables
      //select n: first variable-displayed as known
      let n;
      if (choice === 1 || choice === 2) {
        n = masst;
      }
      if (choice === 3 || choice === 4) {
        n = molest;
      }
      if (5 <= choice && choice <= 8) {
        n = mass1;
      }
      if (choice >= 9) {
        n = moles1;
      }
      //select o: element needed
      var o = elem1;
      //select p:second element
      let p;
      if (choice === 7 || choice === 8 || choice === 11 || choice === 12) {
        p = elem2;
      } else {
        p = "";
      }
      //pass the answer to document
      if (choice === 1 || choice === 3) {
        theanswer = mass1;
      }
      if (choice === 2 || choice === 4) {
        theanswer = moles1;
      }
      if (choice === 5 || choice === 9) {
        theanswer = masst;
      }
      if (choice === 6 || choice === 10) {
        theanswer = molest;
      }
      if (choice === 7 || choice === 11) {
        theanswer = mass2;
      }
      if (choice === 8 || choice === 12) {
        theanswer = moles2;
      }
      //pass variables to function and display question in top frame
      tryit(cmpd, a, b, c, d, n, o, p);
    }
    function tryit(cmpd, a, b, c, d, n, o, p) {
      let html = `A sample of <b>${cmpd}</b>${a}<b>${n}</b>${b}<b>${o}</b>${c}<b>${p}</b>${d}`;
      $("#question").html(html);
      // parent.frames[0].document.clear();
      // parent.frames[0].document.open();
      // parent.frames[0].document.writeln("<html>");
      // parent.frames[0].document.writeln("<head>");
      // parent.frames[0].document.writeln("</head>");
      // parent.frames[0].document.writeln("<body bgcolor = FFFFFF");
      // parent.frames[0].document.writeln("<pre>");
      // parent.frames[0].document.write("A sample of ");
      // parent.frames[0].document.write("<b>", cmpd, "</b>");
      // parent.frames[0].document.write(a);
      // parent.frames[0].document.write("<b>", n, "</b>");
      // parent.frames[0].document.write(b);
      // parent.frames[0].document.write("<b>", o, "</b>");
      // parent.frames[0].document.write(c);
      // parent.frames[0].document.write("<b>", p, "</b>");
      // parent.frames[0].document.write(d);
      // parent.frames[0].document.close();
      // document.forms[0].fanswer.focus();
      // document.forms[0].fanswer.select();
    }
    // function answer() {
    //   if (tried == 1) {
    //     alert(
    //       "Sorry, you've already submitted this problem! We'll get you a new one!"
    //     );
    //     choose();
    //   } else {
    //     if (tried == 2) {
    //       totl++;
    //       document.forms[0].total.value = totl;
    //     }
    //     if (
    //       (document.forms[0].fanswer.value > 0.99 * theanswer) &
    //       (document.forms[0].fanswer.value < 1.01 * theanswer)
    //     ) {
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
    //
    // function timer(z) {
    //   tt = z;
    //   var b = Math.floor(tt / 60);
    //   var j = tt % 60;
    //   if (j < 10) {
    //     c = "0";
    //   } else {
    //     c = "";
    //   }
    //   howlng = b + ":" + c + j;
    //   running = setTimeout("timer(tt+1)", 1000);
    // }
    // function update() {
    //   document.forms[0].total.value = totl;
    //   document.forms[0].correct.value = corrt;
    //   document.forms[0].time.value = howlng;
    //   document.forms[0].page.value = thepage;
    //   document.forms[0].verify.value = Math.round(10000 * Math.random());
    // }
    //
    // const masst = cp.Random.float(1, 500);
    // const compound = cp.compoundUtils.getRandomCompoundBySeq(18);
    // const massc = cp.compoundUtils.getCompoundMass(compound.formula);
    // const molest = masst / massc;
    // const _elements = cp.compoundUtils.getMassRatios(compound.formula);
    // const elements = _elements.map((el) => {
    //   el.moles = molest * el.n;
    //   el.mass = el.moles * el.info.atomic_mass;
    //   return el;
    // });
    // const useThese = cp.library.chooseN(elements, 2);
    // console.log(useThese);
    //
    // let n, p, answer;
    // const o = useThese[0].symbol;
    // const questionChoice = cp.Random.int(0, 11);
    // switch (questionChoice) {
    //   case 0:
    //     n = masst;
    //     answer = useThese[0].mass;
    //     break;
    //
    //   case 1:
    //     n = masst;
    //     answer = useThese[0].moles;
    //     break;
    //
    //   case 2:
    //     n = molest;
    //     answer = useThese[0].mass;
    //     break;
    //
    //   case 3:
    //     n = molest;
    //     answer = useThese[0].moles;
    //     break;
    //
    //   case 4:
    //     n = useThese[0].mass;
    //     answer = masst;
    //     break;
    //
    //   case 5:
    //     n = useThese[0].mass;
    //     answer = molest;
    //     break;
    //
    //   case 6:
    //     n = useThese[0].mass;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].mass;
    //     break;
    //
    //   case 7:
    //     n = useThese[0].mass;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].moles;
    //     break;
    //
    //   case 8:
    //     n = useThese[0].moles;
    //     answer = masst;
    //     break;
    //
    //   case 9:
    //     n = useThese[0].moles;
    //     answer = molest;
    //     break;
    //
    //   case 10:
    //     n = useThese[0].moles;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].mass;
    //     break;
    //
    //   case 11:
    //     n = useThese[0].moles;
    //     p = useThese[1].symbol;
    //     answer = useThese[1].moles;
    //     break;
    // }
    //
    // const questions = [
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} has a mass of <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams.  How many grams of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} has a mass of <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams.  How many moles of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of compound.  How many grams of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of compound.  How many moles of <span class="parameter">${o}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  What is the total mass of the sample?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many moles of compound are present?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many grams of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> grams of <span class="parameter">${o}</span>.  How many moles of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  What is the total mass of the sample?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many moles of the compound are present?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many grams of <span class="parameter">${p}</span> does it contain?</h6>`,
    //   `<h6>A sample of ${cp.compoundUtils.getHtml(
    //     compound.formula
    //   )} contains <span class="parameter">${n.toFixed(
    //     2
    //   )}</span> moles of <span class="parameter">${o}</span>.  How many moles of <span class="parameter">${p}</span> does it contain?</h6>`,
    // ];

    choose();
    const answerPayload = [
      {
        answer: theanswer,
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ];

    // $("#question").html(questions[questionChoice]);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
