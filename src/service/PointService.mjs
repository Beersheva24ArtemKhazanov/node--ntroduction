class PointService {
    #points
    constructor() {
        this.#points = {}
    }
    addPoint({id,x}) {
        if (this.#points[id]) {
            throw Error(`point wirh id ${id} already exists`)
        }
        this.#points[id] = {id, x}
        console.log(this.#points)
    }
    getPoint(id) {
        if (!this.#points[id]) {
            throw Error(`point wirh id ${id} doesn't exists`)
        }
        return this.#points[id];
    }
}
const service = new PointService();
export default service;