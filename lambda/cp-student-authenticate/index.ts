import sha512 from "crypto-js/sha512";
import { StudentType } from "../cp-types";

/**
 * Refresh a JWT using the JWT_SECRET
 * @param event Shape: {
 *   PEPPER, (from AWS Secrets Manager)
 *   studentListJSON, (from DynamoDB teachers table)
 *   studentId,
 *   password
 * }
 * @returns {Promise<{jwt: string}>}
 */

exports.handler = async (event: {
  secrets: { PEPPER: string };
  studentListJSON: string;
  studentId: string;
  password: string;
}): Promise<{ student: StudentType }> => {
  const { secrets, studentListJSON, studentId, password } = event;
  const studentList: StudentType[] = JSON.parse(studentListJSON);
  const student = studentList.find(
    (s: StudentType) => s.studentId === studentId
  );
  if (!student) {
    throw new Error("StudentNotFoundError");
  }
  const hash = sha512(student.salt + password + secrets.PEPPER).toString();
  if (hash !== student.passwordHash) {
    throw new Error("AuthenticationError");
  } else {
    return { student };
  }
};
