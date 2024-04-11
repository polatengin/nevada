import * as fs from "node:fs/promises";

(async () => {
  while (true) {
    console.log(await fs.readFile("/tmp/server.fifo", "utf8"));
  }
})();
