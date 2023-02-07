const fs = require("fs");
const path = require("path");
fs.unlink(path.join(__dirname,"file.txt"), (err) => {
if(err) {
    console.log('File not found')
}
});
