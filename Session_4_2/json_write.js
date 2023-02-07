const { readFile, writeFile } = require("fs");

const path = require("path");

const users = require("./users.json");

users.push({ name: "Jay", username: "jayp100", password: "123" });

writeFile(
  (path.join(__dirname, "users.json"),
  JSON.stringify(users),
  { flag: "a", encoding: "utf8" }),
  (err) => {
    if (err) throw err;
  }
);
