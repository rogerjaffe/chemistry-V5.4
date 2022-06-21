import jsonwebtoken from "jsonwebtoken";
import { StudentType } from "../cp-types";

type JWTStudentPayloadType = StudentType & {
  iat: number;
  exp: number;
};

/**
 * Refresh a JWT using the JWT_SECRET
 * @param event Shape: {
 *   JWT_SECRET,
 *   EXPIRE_SECONDS,
 *   jwt
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = async (event: {
  secrets: string | { JWT_SECRET: string };
  EXPIRE_SECONDS?: number;
  jwt: string;
}): Promise<{ jwt: string; decoded: StudentType }> => {
  const THIRTY_MINUTES = 60 * 30; // seconds
  const expiresIn = event.EXPIRE_SECONDS ?? THIRTY_MINUTES;
  const secrets =
    typeof event.secrets === "string"
      ? JSON.parse(event.secrets)
      : event.secrets;
  try {
    const decoded = (await jsonwebtoken.verify(
      event.jwt,
      secrets.JWT_SECRET
    )) as JWTStudentPayloadType;
    if (typeof decoded === "string") {
      throw new Error("RefreshJWTError: decoded is a string!");
    }
    const { iat, exp, ...decodedRest } = decoded;
    const jwt = await jsonwebtoken.sign(decodedRest, secrets.JWT_SECRET, {
      expiresIn,
    });
    return { jwt, decoded: decodedRest };
  } catch (err: any) {
    throw new Error("RefreshJWTError: " + err.message);
  }
};
