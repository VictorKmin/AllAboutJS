// import comp from "./computer";
const comp = require("./computer");

class laptop extends comp {
    constructor(producer, processor, ram, weight, isDiskSSD) {
        super(producer, processor, ram);
        this._weight = weight;
        this._isDiskSSD = isDiskSSD;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get isDiskSSD() {
        return this._isDiskSSD;
    }

    set isDiskSSD(value) {
        this._isDiskSSD = value;
    }
}

module.exports = laptop;