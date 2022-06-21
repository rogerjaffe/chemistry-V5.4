import jsonwebtoken from "jsonwebtoken";
const { handler } = require("../lambda/cp-generate-jwt/index");

const payload = {
  teacherEmail: "rogerjaffe@gmail.com",
  studentId: "394129",
  lastName: "Aris",
  firstName: "Joseph",
  period: "1",
  className: "AP Computer Science Principles",
};
const secrets = { JWT_SECRET: "uLS67oQy0rWlpiZ63VKf" };

const f = async () => {
  const output = await handler({ secrets, payload });
  console.log(output.jwt);
};

f();
