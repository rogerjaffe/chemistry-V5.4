(function (cp) {
  cp.loadStatus = {
    instructions: false,
    panel1: false,
    panel2: false,
    script: false,
    styles: false,
  };

  cp.setIsLoaded = (prop) => {
    cp.loadStatus[prop] = true;
    if (Object.values(cp.loadStatus).every((b) => b)) {
      // console.log(cp.loadStatus);
      window.cp.generateNewQuestion();
    }
  };

  cp.injectTitle = (q) => {
    if (!q) return;
    $("#title").html(`<div>${q.seq}: ${q.text}</div>`);
  };

  cp.injectHidden = (q) => {
    if (!q) return;
    $("#text").val(q.text);
    $("#seq").val(q.seq);
  };

  cp.loadHtml = (section, seq) => {
    cp.api.get(`/q/q${seq}/${section}.html`, (data) => {
      $(`#${section}`).html(data);
      cp.setIsLoaded(section);
      $(`.skeleton.${section}`).removeClass(".skeleton").removeClass(section);
    });
  };

  cp.loadScript = (seq) => {
    cp.api.get(`/q/q${seq}/script.js`, (data) => {
      $(`#script`).text(data);
      cp.setIsLoaded("script");
    });
  };

  cp.loadCss = (seq) => {
    cp.api.get(`/q/q${seq}/styles.css`, (data) => {
      $(`#style`).text(data);
      cp.setIsLoaded("styles");
    });
  };

  cp.loadContent = (q) => {
    cp.injectHidden(q);
    cp.injectTitle(q);
    cp.loadHtml("instructions", q.seq);
    cp.loadHtml("panel1", q.seq);
    cp.loadHtml("panel2", q.seq);
    cp.loadScript(q.seq);
    cp.loadCss(q.seq);
  };
})((window.cp = window.cp || {}));
