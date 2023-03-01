const path = require("path");

// process.mainModule.file -> return the current directory path
module.exports = path.dirname(process.mainModule.filename);
