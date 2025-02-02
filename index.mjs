import { fileURLToPath } from "url";
import logger from "./logger.mjs"; 
import path from 'path';

logger.log(path.parse(fileURLToPath(import.meta.url)));