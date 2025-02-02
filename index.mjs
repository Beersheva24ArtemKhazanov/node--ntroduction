// console.log(global);
// console.log(module);
// (function(exports, __dirname, __filename, require, module) {
//     //code
// })();
// console.log(__);
// const {logger} = require('./logger.cjs');
// logger.log("kuku");
// console.log(logger);
// console.log(process);
import { fileURLToPath } from "url";
import logger from "./logger.mjs"; 
import path from 'path';

const {argv} = process;
logger.log(path.parse(fileURLToPath(import.meta.url)));