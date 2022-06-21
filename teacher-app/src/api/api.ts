const URL = "https://laqywsahf8.execute-api.us-west-1.amazonaws.com/prod/api/";
const api = async (path: string, body: object | null) => {
  if (path.length === 0) {
    console.log("api -> no path");
    return;
  }

  try {
    const res = await fetch(URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body ? body : ""),
    });
    const data = res.json();
    return data;
  } catch (err) {
    return { error: true, type: "UnknownError", err };
  }
  // fetch(URL+path, {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(body ? body : ''),
  // })
  //   .then(res => res.json())
  //   .then(data => cb(data))
  //   .catch(err => {
  //     cb(err);
  //   })
};

export default api;
