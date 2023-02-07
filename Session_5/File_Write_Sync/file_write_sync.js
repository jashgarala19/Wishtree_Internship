const fs = require("fs");
const path = require("path");
const data = "Hello there JS 📢";

fs.writeFileSync(path.join(__dirname, "file.txt"), data, (err) => {
  console.log(err);
});
console.log("I will execute after file read  ,I have to wait😢");
