const fs = require("fs");
const path = require("path");

fs.appendFile(path.join(__dirname, "file.txt"), "Hello!!\n", (err) => {
  if (err) throw err;
});
