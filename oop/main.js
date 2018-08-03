//import {peka as PC} from "./pc"
let PCs = require("./pc");
let laptops = require("./laptop");
//import laptop from "./laptop";

let laptop = laptops;
let PC = PCs;
//НЕ ЗНАЙШОВ НЕТІ ІНФИ ПРО ENUMS в JS. Тут є такі ?
//
let dellPC = new PC('DELL', 'CoreI7', 16, false, 2017);
let customPC = new PC('HP', 'CoreI3', 8, true, 2016);


let appleLaptop = new laptop('fruit', 'Core2Duo', 1, false, 2017);
let dellLaptop = new laptop('dell', 'AMD', 1, false, 2017);

console.log(appleLaptop);