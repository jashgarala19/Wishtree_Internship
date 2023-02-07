const fs = require("fs");
const path = require("path");

try {
  const f = fs.readFileSync(path.join(__dirname, "file.txt"), {
    encoding: "utf8",
    flag: "r",
  });
  console.log(f);
} catch (err) {
  console.log(`${err}`);
}
