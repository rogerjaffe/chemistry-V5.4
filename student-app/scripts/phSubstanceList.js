(function (cp) {
  const phSubstanceList = [
    { name: "Acetic acid", type: "a", K: 1.8e-5 },
    { name: "Ammonia", type: "b", K: 1.8e-5 },
    { name: "Acrylic acid", type: "a", K: 5.5e-5 },
    { name: "Aniline", type: "b", K: 7.4e-10 },
    { name: "Benzoic acid", type: "a", K: 6.3e-5 },
    { name: "Codeine", type: "b", K: 8.8e-7 },
    { name: "Chloroacetic acid", type: "a", K: 1.4e-3 },
    { name: "Ethylamine", type: "b", K: 4.3e-4 },
    { name: "Formic acid", type: "a", K: 1.8e-4 },
    { name: "Pyridine", type: "b", K: 1.5e-9 },
  ];
  cp.getRandomPhSubstance = () => {
    const idx = cp.Random.int(0, phSubstanceList.length - 1);
    return phSubstanceList[idx];
  };
})((window.cp = window.cp || {}));
