import jsonwebtoken from "jsonwebtoken";

/**
 * Generates a JWT using the JWT_SECRET
 * @param event Shape: {
 *   secrets,
 *   EXPIRE_SECONDS,
 *   payload: {object}
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = async (event: {
  secrets: { JWT_SECRET: string };
  EXPIRE_SECONDS?: number;
  payload: object;
}): Promise<{ jwt: string }> => {
  const FIVE_MINUTES = 300; // seconds
  const expiresIn = event.EXPIRE_SECONDS ?? FIVE_MINUTES;
  try {
    const jwt = await jsonwebtoken.sign(
      event.payload,
      event.secrets.JWT_SECRET,
      {
        expiresIn,
      }
    );
    return { jwt };
  } catch (err: any) {
    throw new Error("GenerateJWTError: " + err.message);
  }
};
