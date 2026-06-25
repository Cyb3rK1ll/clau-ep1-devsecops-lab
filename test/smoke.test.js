const app = require("../src/server.js");
if (!app) { console.error("server module failed to load"); process.exit(1); }
console.log("smoke test ok");
