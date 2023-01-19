const a = require("./LocalModules");

console.log(a.add(10, 20));
console.log(a.sub(20, 10));

const { Computer, sample } = require("./LocalModules2");

console.log(Computer.comp_name);
console.log(Computer.getallcompname());

const s = new sample();

s.hey();
