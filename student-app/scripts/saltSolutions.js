(function (cp) {
  const saltSolutions = [
    { formula: "AgCl", gfw: 143, K: 1.8e-10, cation: 1, anion: 1 },
    { formula: "BaCO<sub>3</sub>", gfw: 197, K: 5.1e-9, cation: 1, anion: 1 },
    { formula: "CaF<sub>2</sub>", gfw: 78, K: 5.3e-9, cation: 1, anion: 2 },
    { formula: "FeS", gfw: 88, K: 6e-19, cation: 1, anion: 1 },
    { formula: "PbCrO<sub>4</sub>", gfw: 323, K: 2.8e-19, cation: 1, anion: 1 },
    { formula: "Fe(OH)<sub>3</sub>", gfw: 107, K: 4e-38, cation: 1, anion: 3 },
    { formula: "LiF", gfw: 26, K: 3.8e-3, cation: 1, anion: 1 },
    { formula: "Co(OH)<sub>2</sub>", gfw: 93, K: 1.6e-15, cation: 1, anion: 2 },
    { formula: "TlBr", gfw: 284, K: 3.4e-6, cation: 1, anion: 1 },
    { formula: "Mg(OH)<sub>2</sub>", gfw: 58, K: 1.8e-11, cation: 1, anion: 2 },
  ];
  cp.getRandomSaltSolution = () => {
    const idx = cp.Random.int(0, saltSolutions.length - 1);
    return saltSolutions[idx];
  };
})((window.cp = window.cp || {}));
