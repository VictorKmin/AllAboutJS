let comps = require("./computer");
let comp = comps;

class pc extends comp{
    constructor(producer,processor, ram, isDoubleMonitor, yearOfProduced){
        super(producer,processor, ram);
        this._isDoubleMonitor = isDoubleMonitor;
        this._yearOfProduced = yearOfProduced;
    }

    get isDoubleMonitor() {
        return this._isDoubleMonitor;
    }

    set isDoubleMonitor(value) {
        this._isDoubleMonitor = value;
    }

    get yearOfProduced() {
        return this._yearOfProduced;
    }

    set yearOfProduced(value) {
        this._yearOfProduced = value;
    }
}

module.exports = pc;