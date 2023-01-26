const users = require("./users.json");

const  a = users.filter((e, index) => {
  return e.name.length == 4;
});

// console.log(a);

const  b = users.filter((e, index) => {
    return e.password=='123';
})

console.log(b);
