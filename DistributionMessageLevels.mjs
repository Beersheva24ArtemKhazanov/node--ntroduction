export default class DistributionMessageLevels {
    #distribution
    constructor(logger) {
        this.#distribution = {};
        logger.on('message', ({level}) => this.#messageProcessing(level))
    }

    #messageProcessing(level) {
        if (!this.#distribution[level]) {
            this.#distribution[level] = 0;
        }
        this.#distribution[level]++;
    }

    getDistribution() {
        return this.#distribution;
    }
}