// const { readFile, writeFile } = require("fs"); //asynchronous!!!
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./test.txt", "utf8");
    const second = await readFile("./test2.txt", "utf8");
    await writeFile("./result.txt", `this is awesome: ${first}+${second}`);
    // console.log(first, second);
  } catch (err) {}
};
start();
// readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   }
//   console.log(data);
// });
