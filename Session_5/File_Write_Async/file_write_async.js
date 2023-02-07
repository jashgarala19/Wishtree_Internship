const fs = require("fs");
const path = require("path");
const data = "Hello there JS 📢 📢 📢";

fs.writeFile(path.join(__dirname, "file.txt"), data, (err) => {
//   console.log(err);
});
console.log("I don't have to wait for file write to complete, I will execute 😃");
