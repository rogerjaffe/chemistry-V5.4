(function (cp) {
  cp.generateNewQuestion = () => {
    //global variables
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function atom(name, sym, mass, density) {
      this.name = name;
      this.sym = sym;
      this.mass = mass;
      this.density = density;
    }
    function ask(p1, p2, p3, p4, p5) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
      this.p5 = p5;
    }
    questions = new MakeArray(30);
    questions[1] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same mass as ",
      " moles of ",
      "?"
    );
    questions[2] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same mass as ",
      " <span class='parameter'>cm<sup>3</sup></span> of ",
      "?"
    );
    questions[3] = new ask(
      "How many <span class='parameter'>moles</span> of ",
      " will have the same mass as ",
      " <span class='parameter'>moles</span> of ",
      "?"
    );
    questions[4] = new ask(
      "How many <span class='parameter'>moles</span> of ",
      " will have the same mass as ",
      " <span class='parameter'>cm<sup>3</sup></span> of ",
      "?"
    );
    questions[5] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same number of <span class='parameter'>moles</span> as ",
      " <span class='parameter'>grams</span> of ",
      "?"
    );
    questions[6] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same number of <span class='parameter'>moles</span> as ",
      " <span class='parameter'>cm<sup>3</sup></span>  of ",
      "?"
    );
    questions[7] = new ask(
      "What mass of ",
      " in <span class='parameter'>grams</span> will have the same number of <span class='parameter'>moles</span> as ",
      " <span class='parameter'>grams</span> of ",
      "?"
    );
    questions[8] = new ask(
      "What mass of ",
      " in <span class='parameter'>grams</span> will have the same number of <span class='parameter'>moles</span> as ",
      " <span class='parameter'>cm<sup>3</sup></span> of ",
      "?"
    );
    questions[9] = new ask(
      "What mass of ",
      " in <span class='parameter'>grams</span> will have the same volume as ",
      " <span class='parameter'>moles</span> of ",
      "?"
    );
    questions[10] = new ask(
      "What mass of ",
      " in <span class='parameter'>grams</span> will have the same volume as ",
      " <span class='parameter'>grams</span> of ",
      "?"
    );
    questions[11] = new ask(
      "How many <span class='parameter'>moles</span> of ",
      " will have the same volume as ",
      " <span class='parameter'>moles</span> of ",
      "?"
    );
    questions[12] = new ask(
      "How many <span class='parameter'>moles</span> of ",
      " will have the same volume as ",
      " <span class='parameter'>grams</span> of ",
      "?"
    );
    questions[13] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same mass as ",
      " of ",
      "?"
    );
    questions[14] = new ask(
      "What volume of ",
      " in <span class='parameter'>cm<sup>3</sup></span> will have the same mass as ",
      " of ",
      "?"
    );
    questions[15] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[16] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[17] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[18] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[19] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[20] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[21] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[22] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );
    questions[23] = new ask(
      "What volume of ",
      " will have the same mass as ",
      " of ",
      "?"
    );

    function startit(first, second) {
      let z = Math.ceil(3 * Math.random());
      if (z == 1) {
        samemass(first, second);
      }
      if (z == 2) {
        samevolume(first, second);
      }
      if (z == 3) {
        samemoles(first, second);
      }
    }

    function samemass(first, second) {
      let mass = 0;
      while (mass < 1) {
        mass = Math.round(Math.pow(1000, Math.random())) / 10;
      }
      let massfirst = mass;
      let masssecond = mass;
      let molesfirst = mass / first.atomic_mass;
      molesfirst = Math.round(1000 * molesfirst) / 1000;
      let molessecond = mass / second.atomic_mass;
      molessecond = Math.round(1000 * molessecond) / 1000;
      let volumefirst = mass / first.density;
      volumefirst = Math.round(100 * volumefirst) / 100;
      let volumesecond = mass / second.density;
      volumesecond = Math.round(100 * volumesecond) / 100;
      let which = Math.ceil(4 * Math.random());
      quest(
        which,
        first,
        second,
        massfirst,
        masssecond,
        molesfirst,
        molessecond,
        volumefirst,
        volumesecond
      );
    }
    function samemoles(first, second) {
      let moles = 0;
      while (moles < 0.1 || moles > 2) {
        moles = 10 * Math.random();
      }
      moles = Math.round(1000 * moles) / 1000;
      let molesfirst = moles;
      let molessecond = moles;
      let massfirst = moles * first.atomic_mass;
      massfirst = Math.round(100 * massfirst) / 100;
      let masssecond = moles * second.atomic_mass;
      masssecond = Math.round(100 * masssecond) / 100;
      let volumefirst = massfirst / first.density;
      volumefirst = Math.round(100 * volumefirst) / 100;
      let volumesecond = masssecond / second.density;
      volumesecond = Math.round(100 * volumesecond) / 100;
      let which = 4 + Math.ceil(4 * Math.random());
      quest(
        which,
        first,
        second,
        massfirst,
        masssecond,
        molesfirst,
        molessecond,
        volumefirst,
        volumesecond
      );
    }
    function samevolume(first, second) {
      let volume = 0;
      while (volume < 0.1) {
        volume = Math.pow(10, Math.random());
      }
      volume = Math.round(100 * volume) / 100;
      let volumefirst = volume;
      let volumesecond = volume;
      let massfirst = volume * first.density;
      massfirst = Math.round(100 * massfirst) / 100;
      let masssecond = volume * second.density;
      masssecond = Math.round(100 * masssecond) / 100;
      let molesfirst = massfirst / first.atomic_mass;
      molesfirst = Math.round(100 * molesfirst) / 100;
      let molessecond = masssecond / second.atomic_mass;
      molessecond = Math.round(100 * molessecond) / 100;
      let which = 8 + Math.ceil(4 * Math.random());
      quest(
        which,
        first,
        second,
        massfirst,
        masssecond,
        molesfirst,
        molessecond,
        volumefirst,
        volumesecond
      );
    }

    function quest(
      which,
      first,
      second,
      massfirst,
      masssecond,
      molesfirst,
      molessecond,
      volumefirst,
      volumesecond
    ) {
      if (which == 1 || which == 2 || which == 5 || which == 6) {
        part1 = volumefirst;
      }
      if (which == 3 || which == 4 || which == 11 || which == 12) {
        part1 = molesfirst;
      }
      if (which == 7 || which == 8 || which == 9 || which == 10) {
        part1 = massfirst;
      }
      if (which == 2 || which == 4 || which == 6 || which == 8) {
        part2 = volumesecond;
      }
      if (which == 5 || which == 7 || which == 10 || which == 12) {
        part2 = masssecond;
      }
      if (which == 1 || which == 3 || which == 9 || which == 11) {
        part2 = molessecond;
      }
      answer = part1;
      question = `${questions[which]["p1"]} <span class="parameter">${first.name}</span> ${questions[which]["p2"]} <span class="parameter">${part2}</span> ${questions[which]["p3"]} <span class="parameter">${second.name}</span> ${questions[which]["p4"]}`;
      tryit(question);
    }

    function tryit(question) {
      $("#question").html(question);
    }

    const elements = [
      3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 28,
      27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47,
      48, 49, 50, 51, 53, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
    ];
    const [firstAn, secondAn] = cp.library.chooseN(elements, 2);
    const first = cp.periodicTable.findByNumber(firstAn);
    const second = cp.periodicTable.findByNumber(secondAn);

    startit(first, second);
    const answerPayload = [
      {
        answer: answer,
        type: "number",
        tolerance: 0.05,
      },
    ];
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
