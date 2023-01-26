
require("yargs")
  .scriptName("myscript")
  .usage("$0 <cmd> [args]")
  .command(
    "getname [name]","Description:Get username",
    (yargs) => {
      yargs.options("name", {
        type: "string",
      
        describe: "The name to get",
        alias:"n",
        demandOption:true
      });
    },
    (argv) => {
      console.log("Your username is :", argv.name);
      console.log(argv);

    }
  ).argv;


