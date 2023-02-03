const { log } = require("console");
const { writeFile, readFileSync, writeFileSync } = require("fs");
const { forEach } = require("lodash");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
class todoOperation {
  constructor() {}
  statuses = ["unassigned", "pending", "accepted", "started", "completed"];
  todoproperties = { title: "", description: "", status: "unassigned" };

  fetchtodolist = () => {
    return JSON.parse(readFileSync(path.join(__dirname, "todolist.json")));
  };

  addtodo = async (t, d) => {
    this.todoproperties.title = t;
    this.todoproperties.description = d;
    // console.log(this.todoproperties);
    let todolist = this.fetchtodolist();
    // const f = todolist.filter((e) => e.title === t);
    const todo = this.gettodo(todolist, t);
    todolist.push(this.todoproperties);
    if (todo) {
      return "Sorry but a todo with the same title exists!!";
    } else {
      this.savetodo(todolist);
      return "Sucessfully inserted your todo";
    }
  };

  gettodo = (todolist, t) => {
    const f = todolist.filter((e) => e.title === t);

    if (f.length !== 0) {
      return f;
    } else {
      return false;
    }
  };
  gettodos = ()=> {

    return  this.fetchtodolist();
  
   
  }

  updatetodo = (a) => {
    // console.log("Hello")
    const { title, ut, ud, us } = a;
    let todolist = this.fetchtodolist();
    const todo = this.gettodo(todolist, title);

    if (todo) {
      if (ut !== false || ud !== false || us !== false) {
        let invalid_status;
        todolist.forEach((e, i) => {
          if (e.title === title) {
            if (ut !== false) {
              todolist[i].title = ut;
            }
            if (ud !== false) {
              todolist[i].description = ud;
            }
            if (us !== false) {
              const e = this.statuses.find((i) => i == us);
              if (e === undefined) {
                invalid_status = `Invalid option ${us} Valid options for status update are unassigned | pending | accepted | started | completed `;
              } else {
                todolist[i].status = us;
              }
            }
          }
        });
        if (invalid_status) {
          return invalid_status;
        } else {
          this.savetodo(todolist);
          return "Updated succesfully";
        }
        // console.log(todolist);
      } else {
        return "No updates!";
      }
      // console.log(todolist);
    } else {
      return `Sorry but a todo with title ${title} does not exist`;
    }
  };

  savetodo = (todolist) => {
    return writeFileSync(
      path.join(__dirname, "todolist.json"),
      JSON.stringify(todolist),
      (err) => {
        if (err) throw err;
      }
    );
  };

  deletetodo = (t) => {
    const mytodos = this.fetchtodolist();
    const filtered = mytodos.filter((e) => e.title !== t);
    // console.log(filtered);

    if (filtered.length !== mytodos.length) {
      this.savetodo(filtered);
      return `Deleted todo with title ${t}`;
    } else {
      return `Sorry no todo found with title ${t}`;
    }
  };
}

const todoOp = new todoOperation();

module.exports = {
  addtodo: todoOp.addtodo,
  gettodos: todoOp.gettodos,
  deletetodo: todoOp.deletetodo,
  updatetodo: todoOp.updatetodo,
};
