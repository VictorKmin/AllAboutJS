function computer(producer,processor, ram) {
    this.producer = producer;
    this.processor = processor;
    this.ram = ram;
}
module.exports.comp = computer;