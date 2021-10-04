const { createReadStream } = require("fs");
const stream = createReadStream("./bigfile.txt");

//gives data in chunks (buffer), default: 64kbyte

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
