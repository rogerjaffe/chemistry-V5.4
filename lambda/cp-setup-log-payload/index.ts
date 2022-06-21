import { StudentType } from "../cp-types";
import getUnixTime from "date-fns/getUnixTime";
import addYears from "date-fns/addYears";
import { nanoid } from "nanoid";

type JWTStudentPayloadType = StudentType & {
  teacherEmail: string;
  iat: number;
  exp: number;
};

/**
 * Set up the log payload for the AWS step function
 * @param event Shape: {
 *   student: {teacherEmail, studentId, lastName, firstName, period, className},
 *   jwt
 *   seq
 *   isCorrect
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = async (event: {
  student: JWTStudentPayloadType;
  jwt: string;
  seq: string;
  isCorrect: boolean;
}): Promise<{
  emailToken: string;
  studentId: string;
  isCorrect: boolean;
  timestamp: string;
  expiration: string;
  seq: string;
  jwt: string;
}> => {
  const now = new Date();
  return {
    seq: event.seq,
    emailToken: event.student.teacherEmail + ":" + nanoid(20),
    studentId: event.student.studentId,
    isCorrect: event.isCorrect,
    timestamp: getUnixTime(now) + "",
    expiration: getUnixTime(addYears(now, 1)) + "",
    jwt: event.jwt,
  };
};
