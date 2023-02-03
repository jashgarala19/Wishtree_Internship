const options = {
  addoption: {
    title: {
      type: "string",
      default: false,
      describe: "The title of your todolist",
      alias: "t",
      demandOption: true,
    },

    desc: {
      type: "string",
      default: false,
      describe: "Add desc for your todo",
      alias: "d",
      demandOption: true,
    },
  },
  deleteoption: {
    title: {
      type: "string",
      default: false,
      describe: "The title of your todolist to del",
      alias: "t",
      demandOption: true,
    },
  },
  updateoption: {
    title: {
      type: "string",
      default: false,
      describe: "The title of your todolist to update",
      alias: "t",
      demandOption: true,
    },
    up_title: {
        type: "string",
        default: false,
        describe: "The Updated title of your todo",
        alias: "ut",
        demandOption: false,
      },
      up_desc: {
        type: "string",
        default: false,
        describe: "The Updated description of your todo",
        alias: "ud",
        demandOption: false,
      },
      up_status: {
        type: "string",
        default: false,
        describe: "The Updated status of your todo ( true|false )" ,
        alias: "us",
        demandOption: false,
      },
  },
};

module.exports = options;
