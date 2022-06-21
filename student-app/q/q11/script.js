(function (cp) {
  cp.generateNewQuestion = () => {
    const fieldEls = $('[name="fields"]');
    fieldEls.empty();
    // true if input element is an input box
    const inputs = [false, false, false, false, false, false];

    // Index into the inputs array for the different field names
    const PROTONS = 1,
      MASS = 2,
      CHARGE = 3,
      ELECTRONS = 4,
      NEUTRONS = 5;

    // Get an element and figure out the information for the question
    let element = cp.periodicTable.getRandomElement();
    let _charge = null;
    if (element.number <= 2) {
      _charge = cp.Random.boolean() ? 1 : 0;
    } else {
      _charge = cp.Random.int(0, 3);
    }
    const charge = _charge * (cp.Random.boolean() ? -1 : 1); // Set charge sign

    // Compute question values
    const mass =
      element.isotopes[cp.Random.int(0, element.isotopes.length - 1)];
    const atomicNumber = element.number;
    const protons = element.number;
    const electrons = atomicNumber - charge;
    const neutrons = mass - atomicNumber;

    // Decide which fields should be inputs and which should be displayed
    inputs[PROTONS] = cp.Random.boolean();
    if (cp.Random.float() > 0.5) {
      inputs[MASS] = true;
      mass.known = false;
    } else {
      inputs[NEUTRONS] = true;
    }
    if (cp.Random.float() > 0.5) {
      inputs[CHARGE] = true;
    } else {
      inputs[ELECTRONS] = true;
    }
    const values = [element.symbol, protons, mass, charge, electrons, neutrons];

    // Configure answer
    let answerPayload = [];
    if (inputs[PROTONS]) {
      answerPayload.push({ answer: protons + "", type: "number" });
    }
    if (inputs[MASS]) {
      answerPayload.push({
        answer: mass + "",
        tolerance: 0.05,
        type: "number",
      });
    }
    if (inputs[CHARGE]) {
      answerPayload.push({ answer: charge + "", type: "number" });
    }
    if (inputs[ELECTRONS]) {
      answerPayload.push({ answer: electrons + "", type: "number" });
    }
    if (inputs[NEUTRONS]) {
      answerPayload.push({ answer: neutrons + "", type: "number" });
    }

    // Inject into HTML
    cp.library.configureTableFields(fieldEls, inputs, values);
    window.cp.setAnswerPayload(answerPayload);
  };
  cp.setIsLoaded("script");
})((window.cp = window.cp || {}));
