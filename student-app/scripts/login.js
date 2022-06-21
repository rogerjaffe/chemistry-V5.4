const API_URL = "https://f1p8ypwf67.execute-api.us-west-1.amazonaws.com/prod";
const teacherComparison = (a, b) =>
  a.school.S.toLowerCase() +
    "," +
    a.lastName.S.toLowerCase() +
    "," +
    a.firstName.S.toLowerCase() <
  b.school.S.toLowerCase() +
    "," +
    b.lastName.S.toLowerCase() +
    "," +
    b.firstName.S.toLowerCase()
    ? -1
    : 1;

const getTeacherList = () => {
  const API_GATEWAY_URL = `${API_URL}/get-teacher-list`;
  fetch(API_GATEWAY_URL, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      const optionEl = $("option");
      if (!data.items || data.items.length === 0) {
        $("#no-teacher-list").show();
        $("#blank-footer").hide();
        optionEl.html("There are no teachers");
        return;
      }
      optionEl.remove();
      const teacherEmailEl = $("#teacherEmail");
      teacherEmailEl.append(
        $('<option value="">Select your teacher...</option>')
      );

      data.items.sort(teacherComparison);
      data.items.forEach((t) => {
        const oEl = $(
          `<option value="${t.email.S}">${t.lastName.S}, ${t.firstName.S} (${t.school.S})</option>`
        );
        teacherEmailEl.append(oEl);
      });
      teacherEmailEl.removeAttr("disabled");
    });
};

// @ts-ignore
const onChange = () => {
  const teacher = $("#teacherEmail").val() === "";
  const studentId = $("#id").val() === "";
  const password = $("#password").val() === "";
  $("button").prop("disabled", teacher || studentId || password);
};

const onLoginClick = () => {
  $("button").html("Logging in...").prop("disabled", true);
  const API_GATEWAY_URL = `${API_URL}/student-login`;
  fetch(API_GATEWAY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teacherEmail: $("#teacherEmail").val(),
      studentId: $("#id").val(),
      password: $("#password").val(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        $("button").html("Login");
        $("#invalid-password").show();
        $("#blank-footer").hide();
      } else {
        const { jwt } = data;
        sessionStorage.removeItem("summary");
        sessionStorage.setItem("jwt", jwt);
        window.location.href = "/select.html";
      }
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  getTeacherList();
};
