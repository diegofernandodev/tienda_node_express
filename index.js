const server = require("./src/config/server");
require("./src/config/database");

server.listen(server.get("port"), () => {
  console.log("Server run in port");
});
