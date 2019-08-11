module.exports = {
  FINPLDASHBOARD_STATUSES: "http://localhost:3004/data",
  ADAL_CONFIG: {
    tenant: "2f57b6c4-17e4-4965-ac1a-85ccccbe6c4a",
    clientId: "6aefb113-8727-48d4-b373-84c8c1ac81c1",
    endpoints: {
      api: "https://graph.microsoft.com",
      finopsApi: "ccfe1492-ef91-430f-a173-626fc44c1748"
    },
    cacheLocation: "localStorage",
    extraQueryParameter: "domain_hint=schroders.com",
    redirectUri: "http://localhost:9001"
  }
};
