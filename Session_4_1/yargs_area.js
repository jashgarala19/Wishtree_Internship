require("yargs")
  .scriptName("areascript")
  .usage("$0 <cmd> [args]")
  .command(
    "getarea [l][w]","Description:Get Area of SQUARE",
    (yargs) => {
      yargs.options({"l":{
        type: "number",
        default: false,
        describe: "The length to get",
        alias:"length",
        demandOption:true

        
      },
      
      
      "w":{
        type: "number",
        default: false,
        describe: "The width to get " ,
        alias:"width",
        demandOption:true
      }
      
    });
    },
    (argv) => {
    //   console.log("Your username is :", argv.name);
    console.log(`Area of square is :  ${argv.l * argv.w}`);
    console.log(argv);
    

    }
  )
  .help().argv;
