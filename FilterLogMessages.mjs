export default class FIlterLogMessages{
    #logs
    #words
    constructor(logger, words, level) {
        this.#logs = [];
        this.#words = words.map(w => w.toLowerCase());
        logger.on(level, (message) => this.#messageProcess(message))
    }

    #messageProcess(message) {
        if (this.#matches(message)) {
            this.#logs.push(message);
        }
    }

    #matches(message) {
        message = message.toLowerCase();
        return this.#words.some(w => message.includes(w));
    }

    getMessages() {
        return this.#logs;
    }
}
