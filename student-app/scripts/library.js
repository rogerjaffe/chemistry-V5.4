!(function (c) {
  c.library = {
    format: (o, n) => o.toFixed(n),
    chooseN: (o, t) => {
      if (t >= o.length) throw Error("cp.chooseN: List not long enough");
      const e = JSON.parse(JSON.stringify(o));
      let n = [];
      res = [];
      for (let i = 0; i < e.length; i++) {
        n.push(i);
      }
      for (let o = 0; o < t; o++) {
        var r = c.Random.int(0, n.length - 1);
        var idx = n[r];
        n.splice(idx, 1);
        // e.splice(n[r], 1);
        res = res.concat(e[idx]);
      }
      return res;
    },
    inputFactory: (idx = 0, type = "number", className = "input-small") => {
      return $(
        `<input type="${type}" name="input" idx="${idx}" class="${className}" onkeyup="window.cp.onAnswerChange(this)" />`
      );
    },
    spanFactory: (idx = 0, html = "") => {
      return $(`<span id="${idx}">${html}</span>`);
    },
    configureTableFields: (tableEls, flags, vals, types = null) => {
      let spanIdx = 0;
      inputIdx = 0;
      for (let i = 0; i < tableEls.length; i++) {
        if (flags[i]) {
          const inputEl = cp.library.inputFactory(
            inputIdx,
            types ? types[i] : "number",
            "input-small"
          );
          $(tableEls[i]).append(inputEl);
          inputIdx++;
        } else {
          const spanEl = cp.library.spanFactory(spanIdx);
          spanEl.html(vals[i]);
          $(tableEls[i]).append(spanEl);
          spanIdx++;
        }
      }
    },
    cm3: () => "cm<sup>3</sup>",
  };
})((window.cp = window.cp || {}));
