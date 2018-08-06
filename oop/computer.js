//FATHER ELEMENT
//
let err = require('./validatinError');

class computer {
    constructor(producer, processor, ram) {
        this._producer = producer;
        this._processor = processor;
        this._ram = ram;
    }

    get producer() {
        if (typeof this._producer === 'string') {
            return this._producer
        } else {
            throw new err(this._producer + ' in producer must be string');
        }
    }

    set producer(value) {
        this._producer = value;
    }

    get processor() {
        if (typeof this._processor === 'string') {
            return this._processor
        } else {
            throw new err(this._processor + ' in processor must be a string');
        }
    }

    set processor(value) {
        this._processor = value;
    }

    get ram() {
        // typeof this._ram === 'number' ?  this._ram :  console.log('fdf');
        if (typeof this._ram === 'number') {
            return this._ram
        } else {
            throw new err(this._ram + ' in RAM must be a number');
        }
    }

    set ram(value) {
        this._ram = value;
    }
}

module.exports = computer;