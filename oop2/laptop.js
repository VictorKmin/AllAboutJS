let comp = require("./computer");
function laptop(producer,processor, ram, weight, isDiskSSD) {
    comp.apply(this, arguments);
}
module.exports = laptop();