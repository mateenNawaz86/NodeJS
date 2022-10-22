import path from "path";
import addTwoNumber from "./add.js";

// It return a full path basename
console.log(
  path.basename("D:Development/60-Day-of-codeNODEJS_!!PATH_MODULEindex.js")
);

// It return a directory name
console.log(
  path.dirname("D:Development/60-Day-of-codeNODEJS_!!PATH_MODULEindex.js")
);
// It return a extension name of your file
console.log(
  path.extname("D:Development/60-Day-of-codeNODEJS_!!PATH_MODULEindex.js")
);

// It return the whole path names in section format
console.log(
  path.parse("D:Development/60-Day-of-codeNODEJS_!!PATH_MODULEindex.js")
);

// If you access the object properties separatly
const fullPath = path.parse(
  "D:Development/60-Day-of-codeNODEJS_!!PATH_MODULEindex.js"
);
console.log(fullPath.name);
console.log(fullPath.root);


// Calling a function which is declared another file
console.log(addTwoNumber(28, 23));