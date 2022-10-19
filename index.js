import { addTwoNumber } from "./second.js";
import os from "os";
import path from "path";
import {fileURLToPath} from 'url';

console.log(addTwoNumber(2, 3));

console.log("Hello World!");
console.log(os.release);
console.log(path.dirname("/foo/bar/baz/asdf/quux"));
console.log(path.basename("C:\\temp\\myfile.html"));

const __filename = fileURLToPath(import.meta.url);
console.log(path.extname(__filename));
