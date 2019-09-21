module.exports = {
  API_HOST: "#{Web.API.URL}",
  FINPLDASHBOARD_STATUSES: "/jobs/status",
  FINPLDASHBOARD_CURRENT_STATUSES: "/jobs/summary",
  FINPLDASHBOARD_JOB_DETAILS: "/jobs/jobdetails",
  FINPL_GET_PROCESS_STAGED_DETAILS: "/jobs/stagedetails",
  FINPL_GET_ERROR_DETAILS: "/jobs/errors",
  FINPL_GET_FILE_ERROR_DETAILS: "/jobs/fileerrors",
  FINPL_RUN_GDW_ROLLBACK: "/jobs/rollback",
  FINPLROLLBACKGDW_GET_JOBNAMES: "/jobs/jobname", //"http://localhost:3010/data",
  FINPLROLLBACKGDW_GET_PERIODNAMES: "/jobs/periodname", // "http://localhost:3011/data",
  FINPLROLLBACKGDW_GET_ROLLBACK_DETAILS: "/jobs/rollback", //"http://localhost:3012/data",
  FINPL_HISTORY_INTERFACES: "/interface",
  TRACE_CLIENT_ID: "FinPL UI",
  ADAL_CONFIG: {
    tenant: "#{Azure.TenantId}",
    clientId: "#{Azure.Web.UI.ClientId}",
    endpoints: {
      api: "#{Azure.Graph.ApiEndpoint}"
    },
    cacheLocation: "localStorage",
    extraQueryParameter: "#{Azure.Web.UI.Adal.ExtraQueryParameter}",
    redirectUri: "#{Azure.Web.UI.RedirectUri}"
  }
};
