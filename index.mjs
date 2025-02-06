import logger from "./logger.mjs";
import DistributionMessageLevels from "./DistributionMessageLevels.mjs";
import FilterLogMessages from "./FilterLogMessages.mjs";

const distr = new DistributionMessageLevels(logger);
const filterLog1 = new FilterLogMessages(logger, ["hello"], "debug");
const filterLog2 = new FilterLogMessages(logger, ["hello", "debugging"], "debug");


logger.log('info', 'Hello, world!');
logger.log('info', 'Just a message');
logger.log('info', 'Hello again');
logger.log('debug', 'Here is debugging and hello');
logger.log('debug', 'This is another debugging');
logger.log('warn', 'Something is not correct');
logger.log('warn', 'Please correct something');
logger.log('warn', 'correct or delay');


console.log(distr.getDistribution());
console.log(filterLog2.getMessages());
console.log(filterLog1.getMessages());
console.log(filterLog1.getMessages());
console.log(filterLog1.getMessages());
