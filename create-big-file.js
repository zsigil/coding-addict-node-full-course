//create big file

const { writeFileSync } = require("fs");
for (let index = 0; index < 10000; index++) {
  writeFileSync("./bigfile.txt", `Hello world ${index}`, { flag: "a" });
}
