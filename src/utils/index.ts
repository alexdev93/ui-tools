import { jwtDecode, JwtPayload } from "jwt-decode";

/**
 * Decodes a JWT token and returns the decoded payload.
 * @param token - The JWT token to decode.
 * @returns The decoded payload if the token is valid, otherwise undefined.
 */
export const decodeToken = (token: string) => {
  let decoded: JwtPayload | undefined = undefined;
  try {
    decoded = jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

/**
 * Checks if a JWT token is expired.
 * @param token - The JWT token to check.
 * @returns `true` if the token is expired, `false` otherwise.
 */
export const isJwtTokenExpired = (token: string) => {
  if (!token) return true;
  try {
    const decoded = decodeToken(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    if (!decoded || !decoded.exp) return true;
    return currentTime > decoded.exp;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return true; // Assume the token is expired if there's an error
  }
};
