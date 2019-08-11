export const roles = {
  ADMIN: "Admin",
  OPERATOR: "Editor",
  READONLY: "Viewer"
};

export const hasRole = (allowedRoles = [], userRoles = []) => {
  let includes = false;

  userRoles.forEach(role => {
    if (allowedRoles.includes(role)) {
      includes = true;
    }
  });

  return includes;
};

export const convertRoles = (userRoles = []) => {
  return typeof userRoles === "string" ? [userRoles] : userRoles;
};
