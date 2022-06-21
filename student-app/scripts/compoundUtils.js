(function (cp) {
  cp.compoundUtils = {
    getHtml: (formula) => {
      const html = formula.replace(/[0-9]+/g, (match) => `<sub>${match}</sub>`);
      return `<span class="bold">${html}</span>`;
    },

    getHtmlWithCoefficient: (coefficient, formula) => {
      const _c =
        coefficient === 1 ? "" : `<span class="bold">${coefficient}</span>`;
      return `${_c}${cp.compoundUtils.getHtml(formula)}`;
    },

    getElements: (formula) => {
      const els = Array.from(cp.compoundParse(formula));
      return els.map((el) => {
        return {
          symbol: el[0],
          n: el[1],
          info: cp.periodicTable.findBySymbol(el[0]),
        };
      });
    },

    getCompoundMass: (formula) => {
      const compoundInfo = cp.compoundUtils.getElements(formula);
      // compoundInfo.forEach((c) => console.log(c));
      // console.log("*******");
      return compoundInfo.reduce((sum, el) => {
        if (!el.info) debugger;
        // console.log(el);
        // console.log(el.info);
        sum + el.info.atomic_mass * el.n;
      }, 0);
    },

    getMassRatios: (formula) => {
      let elements = cp.compoundUtils.getElements(formula);
      const totalMass = cp.compoundUtils.getCompoundMass(formula);
      return elements.map((el) => {
        el.pct = (el.info.atomic_mass * el.n) / totalMass;
        return el;
      });
    },

    getCompoundBySymbol: (formula) => {
      return cp.compoundList.find((c) => c.formula === formula) ?? null;
    },

    getCompoundsBySeq: (seq) => {
      return cp.compoundList.filter((c) => c.seq.includes(seq));
    },

    getRandomCompoundBySeq: (seq) => {
      const cList = cp.compoundUtils.getCompoundsBySeq(seq);
      return cList[cp.Random.int(0, cList.length - 1)];
    },

    getRandomCompound: (seq) => {
      console.log("STOPPED - UNKNOWN FUNCTION");
      const filtered = cp.compounds.getCompound(seq);
      if (filtered.length === 0) {
        return null;
      }
      return filtered[cp.Random.int(0, filtered.length - 1)];
    },
  };
})((window.cp = window.cp || {}));
