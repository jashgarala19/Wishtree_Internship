const calculator = require("./calculator");

console.log(calculator.add(10, 20));
console.log(calculator.sub(100, 20));
console.log(calculator.mul(9, 2));
console.log(calculator.div(100, 2));

const {getdate,gettime} = require("./date");


console.log("Date: "+getdate());
console.log("Time: "+gettime());

