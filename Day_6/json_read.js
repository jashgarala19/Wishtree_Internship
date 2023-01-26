const { readFile, writeFile } = require("fs");

const path = require("path");

// console.log(path.join(__dirname, 'users.js'));
readFile(path.join(__dirname, "users.json"), (err, data) => {
  console.log(data);

  const myjson = JSON.parse(data);
  console.log(myjson);
});
