import winston from "winston";
import { EventEmitter } from 'node:events';

class Logger extends EventEmitter {
    #logger;
    constructor() {
        super();
        this.#logger = winston.createLogger({
            level: process.env.LEVEL ?? 'info',
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console()
            ]
        });
    }
    log(level, message) {
        this.#logger.log(level, message);
        this.emit(level, message);
        this.emit('message',  {level, message});
    }
}
const logger = new Logger()
export default logger;