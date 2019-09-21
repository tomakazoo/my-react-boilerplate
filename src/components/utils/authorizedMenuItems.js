import { siteRoutes } from "../../routes/siteRoutes";
import { roles } from "./roles";

const frcsItems = [
  {
    label: "Home",
    route: siteRoutes.FINPLDASHBOARD
  },
  {
    label: "FinPL Dashboard History",
    route: siteRoutes.FINPLDASHBOARDHISTORY
  }
];

const frcsSuperItems = [
  {
    label: "GDW Rollback",
    route: siteRoutes.FINPLROLLBACKGDW
  }
];

const frcsDetailItems = [
  {
    label: "FinPL Job Load Tracking",
    route: siteRoutes.FINPLJOBLOADTRACKING
  }
];

const convertRoles = (userRoles = []) => {
  return typeof userRoles === "string" ? [userRoles] : userRoles;
};

const getGroupedItems = user => {
  const groupedItems = {
    Frcs: {
      authorized: [
        roles.ADMIN,
        roles.OPERTOR,
        roles.FINPL_SUPERUSER,
        roles.FINPL_OPERATOR,
        roles.FINPL_READONLY
      ],
      items: frcsItems
    },
    FrcsDetais: {
      authorized: [roles.FRCS_ADMIN],
      items: frcsDetailItems
    },
    FrcsSuperUsers: {
      authorized: [roles.FINPL_SUPERUSER],
      items: frcsSuperItems
    }
  };
  const items = Object.keys(groupedItems)
    .filter(k => isAuthorized(user, groupedItems[k].authorized))
    .map(k => ({ name: k, items: groupedItems[k].items }));

  return items;
};

const isAuthorized = (user, allowedRoles) => {
  const userRoles = convertRoles(user.roles);
  return userRoles.filter(r => -1 !== allowedRoles.indexOf(r)).length !== 0;
};

export const getAuthorizedMenuItems = user => {
  const items = getGroupedItems(user).reduce(
    (acc, i) => acc.concat(i.items),
    []
  );

  return items;
};
