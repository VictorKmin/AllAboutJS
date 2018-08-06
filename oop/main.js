//import {peka as PC} from "./pc"
const typeValid = require("./validatinError");
const PC = require("./pc");
const laptop = require("./laptop");
// import laptop from "./laptop";

let dellPC = new PC('5', 'CoreI7', 5, true, 11);
let customPC = new PC('HP', 'CoreI3', 8, true, 2016);
let appleLaptop = new laptop('fruit', 'Core2Duo', 1, 2.5, false);
let dellLaptop = new laptop('dell', 'AMD', 1, 2.3, true);


console.log(dellPC);
console.log(typeof dellPC.producer);
console.log(typeof dellPC.processor);
console.log(typeof dellPC.ram);
console.log(typeof dellPC.isDoubleMonitor);
console.log(typeof dellPC.yearOfProduced);
