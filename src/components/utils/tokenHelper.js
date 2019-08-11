import jwt from "jsonwebtoken";
import { authContext, adalConfig } from "./adalAuthentication";

export function getUserFromToken(accessToken) {
  let token = accessToken
    ? accessToken
    : authContext.getCachedToken(adalConfig.clientId);
  return token ? jwt.decode(token) : {};
}
