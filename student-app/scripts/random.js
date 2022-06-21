(function (cp) {
  cp.Random = {
    int: (s, f) => {
      return Math.trunc(cp.Random.float(s, f));
    },

    float: (s, f) => {
      if (f) {
        return Math.random() * (f - s) + s;
      } else if (s) {
        return Math.random() * s;
      } else {
        return Math.random();
      }
    },

    boolean: () => {
      return Math.random() > 0.5;
    },
  };
})((window.cp = window.cp || {}));
