import logger from "./logger.mjs"; 
import fs from 'node:fs';

// const data = fs.readFileSync('./index.mjs');
// logger.debug(data);
fs.writeFileSync('./file.txt', ['kuku', 'kukureku', 'Hello World'].join('\n'));