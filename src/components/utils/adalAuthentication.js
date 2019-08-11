import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const adalConfig = __ENVIRONMENT_CONFIG__.ADAL_CONFIG; // eslint-disable-line

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.finopsApi, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  adalConfig.endpoints.api
);
