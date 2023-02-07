const http = require("http");
// const server = http.createServer(function (req, res) {
//   res.write("Hello world");
//   res.end(); 
// });

// server.listen(5000);

const fs = require("fs");
const path = require("path");


http
  .createServer((req, res) => {
    // res.write("<p>Jash</p>");

    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.write(data);
   console.log("Hello");
      res.end();
    });

    console.log("Server running on port 5000 ");

  
  })
  .listen(5000);

  