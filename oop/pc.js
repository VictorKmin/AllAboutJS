const comp = require("./computer");
const err = require("./validatinError");

class pc extends comp{
    constructor(producer,processor, ram, isDoubleMonitor, yearOfProduced){
        super(producer,processor, ram);
        this._isDoubleMonitor = isDoubleMonitor;
        this._yearOfProduced = yearOfProduced;
    }

    get isDoubleMonitor() {
        if (typeof this._isDoubleMonitor ==='boolean') {
            return this._isDoubleMonitor;
        } else {
            throw new err('Field must be boolean');
        }
    }

    set isDoubleMonitor(value) {
        this._isDoubleMonitor = value;
    }

    get yearOfProduced() {
       if (this._yearOfProduced.length === 4 && typeof this._yearOfProduced === "number"){
           return this._yearOfProduced
       } else {
           throw new err(this._yearOfProduced + ' must have 4 symbols and be a number')
       }
    }

    set yearOfProduced(value) {
        this._yearOfProduced = value;
    }
}

module.exports = pc;