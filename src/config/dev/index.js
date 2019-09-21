module.exports = {
  API_HOST: "http://localhost:52432",
  FINPLDASHBOARD_STATUSES: "/jobs/status",
  FINPLDASHBOARD_CURRENT_STATUSES: "/jobs/summary",
  FINPLDASHBOARD_JOB_DETAILS: "/jobs/jobdetails",
  FINPL_GET_PROCESS_STAGED_DETAILS: "/jobs/stagedetails",
  FINPL_GET_ERROR_DETAILS: "/jobs/errors",
  FINPL_GET_FILE_ERROR_DETAILS: "/jobs/fileerrors",
  FINPL_RUN_GDW_ROLLBACK: "/jobs/rollback",
  FINPLROLLBACKGDW_GET_JOBNAMES: "/jobs/jobname", //"http://localhost:3010/data",
  FINPLROLLBACKGDW_GET_PERIODNAMES: "/jobs/periodname", // "http://localhost:3011/data",
  FINPLROLLBACKGDW_GET_ROLLBACK_DETAILS: "/jobs/rollback", // "http://localhost:3012/data",
  FINPL_HISTORY_INTERFACES: "/interface",
  TRACE_CLIENT_ID: "FinPL UI",
  ADAL_CONFIG: {
    tenant: "2f57b6c4-17e4-4965-ac1a-85ccccbe6c4a",
    clientId: "36123fbf-283a-4ca4-aee9-e08e54beac17",
    endpoints: {
      api: "https://graph.microsoft.com"
    },
    cacheLocation: "localStorage",
    extraQueryParameter: "domain_hint=schroders.com",
    redirectUri: "http://localhost:9001"
  }
};
