const users = require("./users.json");

const u = users.find((e) => {
  return e.name.startsWith("J");
});

const u2 = users.find((e) => {
  return e.username.length == 7;
});

console.log(u);
console.log(u2);
