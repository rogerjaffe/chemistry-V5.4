(function (cp) {
  cp.api = {
    post: (url, body, cb) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => cb(data))
        .catch((err) => console.log(err));
    },
    get: (url, cb) => {
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.text())
        .then((data) => cb(data))
        .catch((err) => console.log(err));
    },
  };
})((window.cp = window.cp || {}));
