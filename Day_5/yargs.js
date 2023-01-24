require("yargs")
  .scriptName("myscript")
  .usage("$0 <cmd> [args]")
  .command(
    "getage [age]",
    "Description:To Get Age",
    (y) => {
      y.positional("age", {
        type: "number",
        default: 22,
        describe: "Number that returns the inputed age",
      });
    },
    function (argv) {
      console.log(argv);

      console.log("Your age is", argv.age, "!!");
    }
  )
  .help().argv;
