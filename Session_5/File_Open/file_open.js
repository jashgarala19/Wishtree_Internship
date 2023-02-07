const fs = require("fs");
const path = require("path");

//
// fs.open(path.join(__dirname, "file.txt"), "r", (err, fd) => {
//   if (err) throw err;
//   fs.read(fd, (err, byteReads, buffer) => {
//     if (err) throw err;
//     console.log(buffer.toString());
//     console.log(byteReads);
//   });

//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });

const buffer = Buffer.alloc(1000);
const buffer2 = Buffer.from("JAVASCRIPT IS 🔥 🔥 🔥 🔥 🔥");

fs.open(path.join(__dirname, "file.txt"), "r+", (err, fd) => {
  if (err) throw err;
  else {
    // fs.writeFileSync(path.join(__dirname, "file.txt"),'JAVASCRIPT IS 🔥 🔥 🔥 🔥 🔥');

    fs.write(fd, buffer2, function (err, n, buffer) {
      console.log(err);
    });
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
      if (err) throw err;
      else {
        console.log(buffer.toString());
        console.log(`Bytes written:${bytes}`);
      }
    });
  }
});
