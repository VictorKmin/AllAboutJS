//FATHER ELEMENT
//
class computer {
    constructor(producer,processor, ram) {
        this._producer = producer;
        this._processor = processor;
        this._ram = ram;
    }

    get producer() {
        return this._producer;
    }

    set producer(value) {
        this._producer = value;
    }

    get processor() {
        return this._processor;
    }

    set processor(value) {
        this._processor = value;
    }

    get ram() {
        return this._ram;
    }

    set ram(value) {
        this._ram = value;
    }
}

module.exports = computer;