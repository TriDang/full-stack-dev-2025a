const http = require("http");

/**
 * another option:
import { createServer } from "http";
 */

const server = http.createServer((req, res) => {
  res.write('Hello, world! Can I see this new');
  res.end();
});

server.listen(2222, () => {
  console.log("Server started");
});
