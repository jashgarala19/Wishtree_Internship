const { readFile, read } = require("fs");
// const path = require("path");
readFile("./Session_5/File_Read_ASync/file.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
console.log("Hello i will be consoled first before because file read is async");
