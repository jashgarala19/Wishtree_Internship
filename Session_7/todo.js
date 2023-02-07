// const path = require('path');
// const lodash = require('lodash');

const yargs = require("yargs");
const {
  addoption,
  deleteoption,
  updateoption,
} = require("./options");
const { addtodo, gettodos, deletetodo, updatetodo } = require("./todo_op");

// console.log(yargs.argv);
// const argv = yargs.argv._

// console.log("Hello world");
yargs

  .usage(
    `
    -----------------------------------------
    Add UPDATE DELETE and READ your TODOLIST
    -----------------------------------------
  `
  )
  .command(
    "addtodo [title] [desc]",
    "Add a todo in your todolist",
    (yargs) => {
      yargs.options(addoption);
    },
    (argv) => {
      // addtodo()
      const { title, desc } = argv;
      addtodo(title, desc).then((e) => {
        console.log(e);
      });
    }
  )

  .command(
    "gettodos [title]",
    "Read all your todos",
    (yargs) => {
     
    },
    (argv) => {
      //readtodo
      const todolist = gettodos();

    todolist.forEach((v)=>{
    
      console.log(`                       `)
      console.log(`Title: ${v.title}`);
      console.log(`Description: ${v.description}`);
      console.log(`Status: ${v.status}`);
     
      console.log(`                        `)
     
      
    })
    }
  )
  .command(
    "updatetodo [title] [updatedtitle] [updateddesc] [updatedstatus]",
    "Update a todo from your todolist",
    (yargs) => {
      yargs.options(updateoption);
    },
    (argv) => {
      // console.log(argv);

      const { title, ut, ud, us } = argv;
      console.log(updatetodo({ title, ut, ud, us }));
    }
  )

  .command(
    "deletetodo [title]",
    "Delete a todo from your todolist",
    (yargs) => {
      yargs.options(deleteoption);
    },
    (argv) => {
      // deletetodo()
      const { title } = argv;
      console.log(deletetodo(title));
    }
  )
  .help().argv;
