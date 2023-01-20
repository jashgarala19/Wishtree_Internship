

const calculator = {
  add: function (a, b) {
    return `${a} + ${b} = ${a+b}`;
  },
  sub : function (a, b) {
    return `${a} - ${b} = ${a-b}`;

  },
  mul : function (a, b) {
    return `${a} * ${b} = ${a*b}`;

  },
  div: function (a, b) {
    return `${a} / ${b} = ${a/b}`;

  }
  
};

module.exports = calculator;