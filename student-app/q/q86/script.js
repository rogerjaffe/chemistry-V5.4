(function (cp) {
  cp.generateNewQuestion = () => {
    let pK = 0;
    let pH = 0;
    let theacid = "";
    let thebase = "";
    let acidconc = 0;
    let baseconc = 0;
    let basesym = "";
    let ratio = 0;
    let askit = "";
    let newratio = 0;
    let which = 0;
    let vbuffer = 0;
    let vadd = 0;
    let adsymbol;
    let pHend;
    // totl=0
    // corrt=0
    // tried=0
    // howlong=""
    let theanswer = 0;
    function MakeArray(n) {
      this.length = n;
      for (var i = 1; i <= n; i++) {
        this[i] = 0;
      }
    }
    function dataset(acid, base, Ka, formacid, formbase) {
      this.acid = acid;
      this.base = base;
      this.Ka = Ka;
      this.formacid = formacid;
      this.formbase = formbase;
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
    let quest = new MakeArray(10);
    quest[1] = new question(
      "A ",
      " buffer solution has the following concentrations:<br> ",
      "If ",
      " mL of ",
      " is added to ",
      " mL of the buffer, what is the resultant pH?"
    );
    let species = new MakeArray(50);
    species[1] = new dataset(
      "acetic acid",
      "acetate",
      1.75e-5,
      "CH<SUB>3</SUB>COOH",
      "CH<SUB>3</SUB>COO<SUP>-</SUP>"
    );
    species[2] = new dataset(
      "acrylic acid",
      "acrylate",
      5.5e-5,
      "C<SUB>3</SUB>H<SUB>4</SUB>O<SUB>2</SUB>",
      "C<SUB>3</SUB>H<SUB>3</SUB>O<SUB>2</SUB><SUP>-</SUP>"
    );
    species[3] = new dataset(
      "arsenous acid",
      "arsenate",
      6.6e-10,
      "H<SUB>3</SUB>AsO<SUB>3</SUB>",
      "H<SUB>2</SUB>AsO<SUB>3</SUB><SUP>-</SUP>"
    );
    species[4] = new dataset(
      "benzoic acid",
      "benzoate",
      6.3e-5,
      "C<SUB>7</SUB>H<SUB>5</SUB>O<SUB>2</SUB>",
      "C<SUB>7</SUB>H<SUB>4</SUB>O<SUB>2</SUB><SUP>-</SUP>"
    );
    species[5] = new dataset(
      "bromoacetic acid",
      "bromoacetate",
      1.3e-3,
      "C<SUB>2</SUB>H<SUB>3</SUB>BrO<SUB>2</SUB>",
      "C<SUB>2</SUB>H<SUB>2</SUB>BrO<SUB>2</SUB><SUP>-</SUP>"
    );
    species[6] = new dataset(
      "butyric acid",
      "butyrate",
      1.5e-5,
      "C<SUB>4</SUB>H<SUB>8</SUB>O<SUB>2</SUB>",
      "C<SUB>2</SUB>H<SUB>7</SUB>O<SUB>2</SUB><SUP>-</SUP>"
    );
    species[7] = new dataset(
      "chloroacetic acid",
      "chloroacetate",
      1.4e-3,
      "C<SUB>2</SUB>H<SUB>3</SUB>ClO<SUB>2</SUB>",
      "C<SUB>2</SUB>H<SUB>2</SUB>ClO<SUB>2</SUB><SUP>-</SUP>"
    );
    species[8] = new dataset(
      "cyanic acid",
      "cyanate",
      3.5e-4,
      "HOCN",
      "OCN<SUP>-</SUP>"
    );
    species[9] = new dataset(
      "formic",
      "formate",
      1.8e-4,
      "H<SUB>2</SUB>CO<SUB>2</SUB>",
      "HCO<SUB>2</SUB><SUP>-</SUP>"
    );
    species[10] = new dataset(
      "hydrofluoric acid",
      "fluoride",
      6.6e-4,
      "HF",
      "F-"
    );
    species[11] = new dataset(
      "nitrous acid",
      "nitrite",
      7.2e-4,
      "HNO<SUB>2</SUB>",
      "NO<SUB>2</SUB><SUP>-</SUP>"
    );
    species[12] = new dataset(
      "propionic acid",
      "propionate",
      1.3e-5,
      "C<SUB>3</SUB>H<SUB>6</SUB>O<SUB>2</SUB>",
      "C<SUB>3</SUB>H<SUB>5</SUB>O<SUB>2</SUB><SUP>-</SUP>"
    );
    species[13] = new dataset("");
    species[14] = new dataset("");
    species[15] = new dataset("");
    species[16] = new dataset("");
    species[17] = new dataset("");
    species[18] = new dataset("");
    species[19] = new dataset("");
    species[20] = new dataset("");
    species[21] = new dataset("");
    species[22] = new dataset("");
    species[23] = new dataset("");
    species[24] = new dataset("");
    species[25] = new dataset("");
    species[26] = new dataset("");
    species[27] = new dataset("");
    species[28] = new dataset("");
    species[29] = new dataset("");
    species[30] = new dataset("");
    species[31] = new dataset("");
    species[32] = new dataset("");
    species[33] = new dataset("");
    species[34] = new dataset("");
    species[35] = new dataset("");
    species[36] = new dataset("");
    species[37] = new dataset("");
    species[38] = new dataset("");
    species[39] = new dataset("");
    species[40] = new dataset("");
    species[41] = new dataset("");
    species[42] = new dataset("");
    species[43] = new dataset("");
    species[44] = new dataset("");
    species[45] = new dataset("");
    species[46] = new dataset("");
    species[47] = new dataset("");
    species[48] = new dataset("");
    species[49] = new dataset("");
    species[50] = new dataset("");
    //obviously the timer function

    function begin() {
      which = Math.ceil(12 * Math.random());
      theacid = species[which]["acid"];
      thebase = species[which]["base"];
      ratio = 0;
      while (ratio < 0.1) {
        ratio = Math.random();
      }
      if (Math.random() < 0.5) {
        ratio = Math.pow(10, Math.random());
      }
      ratio = Math.round(100 * ratio) / 100;
      acidconc = 0;
      while (acidconc < 0.1) {
        acidconc = Math.round(100 * Math.random()) / 100;
      }
      baseconc = 0;
      baseconc = Math.round(100 * acidconc * ratio) / 100;
      pK = -Math.log(1 * species[which]["Ka"]) / 2.303;
      pK = Math.round(100 * pK) / 100;
      pH = pK + Math.log(ratio) / 2.303;
      let pHstart = Math.round(100 * pH) / 100;
      if (Math.random() > 0.5) {
        newratio = addacid();
        adsymbol = "M HCl";
      } else {
        newratio = addbase();
        adsymbol = "M NaOH";
      }
      pHend = pK + Math.log(newratio) / 2.303;
      pHend = Math.round(100 * pHend) / 100;
      //whichask=Math.ceil(4*Math.random())
      makequestion(1);
      showit(pHstart, pHend);
    }
    function addbase() {
      vbuffer = getvbuffer();
      vadd = getvadded();
      let addconc = concadd();
      let newbaseconc = baseconc * vbuffer + addconc * vadd;
      let newacidconc = acidconc * vbuffer - addconc * vadd;
      newratio = newbaseconc / newacidconc;
      return newratio;
    }
    function addacid() {
      vbuffer = getvbuffer();
      vadd = getvadded();
      let addconc = concadd();
      let newbaseconc = baseconc * vbuffer - addconc * vadd;
      let newacidconc = acidconc * vbuffer + addconc * vadd;
      newratio = newbaseconc / newacidconc;
      return newratio;
    }
    function concadd() {
      let h = Math.ceil(5 * Math.random());
      if (h == 1) {
        addconc = 0.1;
      }
      if (h == 2) {
        addconc = 0.15;
      }
      if (h == 3) {
        addconc = 0.2;
      }
      if (h == 4) {
        addconc = 0.25;
      }
      if (h == 5) {
        addconc = 0.3;
      }
      return addconc;
    }
    function getacidsym() {
      let acidsym =
        "[" + species[which]["formacid"] + "]=" + acidconc + "M<br>";
      return acidsym;
    }
    function getbasesym() {
      basesym = "[" + species[which]["formbase"] + "]=" + baseconc + "M<br>";
      return basesym;
    }

    function makequestion(f) {
      let acidsym = getacidsym();
      basesym = getbasesym();
      if (f == 1) {
        askit =
          quest[1]["p1"] +
          theacid +
          quest[1]["p2"] +
          acidsym +
          basesym +
          quest[1]["p3"] +
          vadd +
          quest[1]["p4"] +
          addconc +
          adsymbol +
          quest[1]["p5"] +
          vbuffer +
          quest[1]["p6"];
        theanswer = pHend;
      }
    }
    function getvbuffer() {
      vbuffer = 100 + 50 * Math.round(10 * Math.random());
      return vbuffer;
    }
    function getvadded() {
      vadd = 10 + 5 * Math.round(10 * Math.random());
      return vadd;
    }
    function showit(a, b) {
      $("#question").html(askit);
      // var newone=window.open("","newone","width=400,height=200")
      // newone.document.writeln ("<html>");
      // newone.document.writeln ("<head>");
      // newone.document.writeln ("</head>");
      // newone.document.writeln ("<body bgcolor = FFFFFF>");
      // newone.document.writeln (askit);
      // newone.document.writeln ("<form><input type=text size=8 name=ans>");
      // newone.document.writeln ("<input type=button value='Submit' onClick='opener.answer(this.form.ans.value)'");
      // newone.document.writeln ("</form>");
      // newone.document.writeln ("</body>");
      // newone.document.writeln ("</html>");
      // newone.document.close();
      // newone.focus();
    }
    // function answer(f){
    //   if(tried==1){
    //     alert("You've already done this one. Get a new problem!")
    //   }
    //   else{
    //     if(tried==2){totl++;document.forms[0].total.value=totl}
    //     if(f>.995*theanswer & f<1.005*theanswer){
    //       document.forms[0].results.value="correct"
    //       corrt++
    //       document.forms[0].correct.value=corrt
    //       tried=1}
    //     else{document.forms[0].results.value="incorrect"
    //       tried=2}
    //   }}
    // function update(){
    //   document.forms[0].total.value=totl
    //   document.forms[0].correct.value=corrt
    //   document.forms[0].time.value=howlong
    //   document.forms[0].page.value=thepage
    //   document.forms[0].verify.value=Math.round(10000*Math.random())
    // }

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
