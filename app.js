// FILTER SOME EVERY
// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = [5, 2, 6];
// // let a2 = a.filter(a1 =>{
// //     const isExist = b.some(b1 => {
// //         if(b1 === a1) {
// //             return true;
// //         } else {
// //             return false;
// //         }
// //     });
// //     if(isExist) {
// //         return true
// //     } else {
// //         return false;
// //     }
// // });
// //
// //
// // let a2 = a.filter(a1 =>{
// //     return b.some(b1 => b1 === a1);
// // });
// //
// // console.log(a2);
// //
// //
// // const isExists = b.every(elB => {
// //     // if(elB === 5){
// //     //     return true
// //     // }else{
// //     //     return false;
// //     // }
// //     return elB === ;
// // })
//
// let c = a.filter((everyA, index) => {
//     return index % 2 === 0;
// });
// let d = c.filter(everyC => {
//     let some = b.some(everyB => {
//         console.log(everyB + '  B');
//         console.log(everyC + '  C');
//         return everyB === everyC
//     });
//     console.log(some);
//     console.log('  ');
//     return some;
// });
// console.log(c);
// console.log(d);

//REDUCE
//
// Що б просумувати всі значення Х, потрібно вказати initialValue після дій.
// Інакше воно поверне [object Object]23
// let arrObj = [{x: 1}, {x: 2}, {x: 3} ];
// let f = arrObj.reduce((acc, currentValue) =>  acc + currentValue.x, 0
// );
// console.log(f);
//
// let arrInArr = [[1,2], ['Hello', 'World'], [3,4], ['5', 6]];
//
// let normal = arrInArr.reduce((a,b) => {
//     console.log(a + '   a');
//     console.log(b + '   b');
//     console.log('   ');
//
//     return a.concat(b);
//    });
// console.log(normal);
//
//
// function f2(array) {
//     array.reduce((prev,curr)=> {
//         return prev.concat(curr);
//     });
// }
//
// let array = [[1,2,3],[4,5]];
// //     .reduce((a, b) => {
// //     return a.concat(b);
// // });
// let flatt = [[0, 1], [2]]
//     .reduce((a, b) => {
//     return a.concat(b);
// });
// console.log(flatt);
// console.log(array);

// MAP
// let a = [1, 2, 3, 4, 5, 6, 7];
//
// let c = a.filter((currVal, index) => {
//    return index % 2 === 0;
// });
//
// let res = c.map(currVal => {
//     return currVal.toString().indexOf('3')
// });
//
// let str = "Please locate where 'locate' occurs!";
// // Другий параметр вкахує з якого чара починати пошук.
// // Please має 6 чарів. тому перший locate стартує з 7 чару.
// // Якщо почати пошук з 8, то воно знайже тільки другий locate
// let pos = str.indexOf('locate', 8);
// console.log('Please'.length);
//
// console.log(pos);
//
//
// console.log(c);
//
// console.log(res);

// FILTER REDUCE AND SOME STRING METHODS
//replace заміняє тільки першу знайдену частинку та заміняє її.
//з реплейс треба бути уважним з кей сенсетів.
//Що б не було проблем з кей сенсетів треба юзати регулярки
// флажок i в регулярках нівелює кей сенсетів
// флажок g заміняє всі знайжені співпідіння
// let str = 'Hello World I am so eXciteD';
// let newStr = str.replace(/excited/i, 'happy');
// console.log(newStr);
//
//
//
// let users = [
//     {name: 'Oleg', age: 22, mail: 'oleg@site.com'},
//     {name: 'Dima', age: 10, mail: 'dimesite.com'},
//     {name: 'Ivan', age: 40, mail: 'ivan@site.com'},
//     {name: 'Petro', age: 8, mail: 'petro@site.com'},
//     {name: 'Kolya', age: 18, mail: 'kolyasite.com'}
//     ];
//
//
// let isMailValid = users.filter(user => {
//   return user.mail.indexOf('@') > 0 ? user : null;
// });
// console.log(isMailValid);
//
// let oldUsers = users.filter(user =>  user.age >= 18 );
// console.log(oldUsers);
//
// let oldestUser = oldUsers.reduce((prev, curr) => {
//     console.log(prev.age);
//     console.log(curr.age);
//     console.log('');
//     return prev.age > curr.age ? prev : curr;
// });
//
// console.log(oldestUser.age);
//
// let arr = [1, 2, 3, 0, 5];
//
// let res = arr.reduce((prev, curr) => {
//     console.log(prev);
//     console.log(curr);
//     console.log('');
//     // return prev + curr;
//     return prev < curr ? prev : curr;
// });
//
// console.log(res);

//PROMISES
//
// function isClick(documents) {
//     console.log('Wiating');
//     return new Promise((resolve, reject) => {
//         const number = Math.random();
//         // setTimeout(()=>{
//         return resolve(number > 0.2 ? resolve(number) : reject('Відмова'));
//         // },1000)
//     });
// };
//
// function bookHotel(visa) {
//     // return setTimeout(()=> {
//     return new Promise((resolve, reject) => {
//         console.log('booking');
//         console.log(visa);
//         return resolve({hotel: true});
//     })
//
//     // },1000)
// };
//
// function buyTickets(hotel) {
//     return new Promise((resolve, reject) => {
//         console.log('tickets');
//         console.log('______________');
//         console.log(hotel);
//         console.log('______________');
//     });
// }
//
// isClick({})
//     .then(random => {
//         console.log(random);
//         console.log('Hell');
//         return {visa: true}
//     })
//     .then(bookHotel)
//     .then(buyTickets)
//     .catch(reject => console.log(reject));

// CALL
// let worker1 = {
//     name: 'Anna',
//     position: 'PM',
//     money: 100
// };
// let worker2 = {
//     name: 'Dima',
//     position: 'Junik',
//     money: 0
// };
//
// function levelUP(newPosition, newMoney) {
//     this.position = newPosition;
//     this.money += newMoney
// }
// levelUP.call(worker1, 'CEO', 100);
// levelUP.call(worker2, 'Middle', -100);
//
// console.log(worker1);
// console.log(worker2);

//SPREAD
// let a = [1,2,3];
// ...a
//
// let b = {
//     a: 12
// };
// let {
//     a
// } = b;
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(a);
// console.log(b);

//ASYNC
// console.log('start');
//
// async function fName() {
//     console.log('ASYNC FUNC');
// }
// fName()
//     .then(
//         () => {
//             fName()
//        }
//     );
// console.log('finish');
// console.log('');
// console.log('');
//
//
// async function longTask() {
//     console.log('Синхронно');
//     await null;
//     console.log('Асинхронно');
// }
//
// console.log('Старт');
// longTask()
//     .then(() => console.log('Фініш'));
// console.log('Ще не кінець');
//
//
// function timeout(message, time = 0) {
//     return new Promise(done => {
//         setTimeout(() => done(message), time);
//     });
// }
// async function msg() {
//     const message = 'Привітики';
//     return timeout(message, 1000);
// }
// async function chat() {
//     const message = await msg();
//     console.log(message);
// }
//
// console.log('Начало');
// chat();
// console.log('Конец');

//Наслідування
// let Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };
//
// // пртотип додає якісь параметри до обєкта, які не добре
// // вказувати у конструкторі. Наприклад функції.
// // прототип не наслудується !!!
// Person.prototype.greet = function (massage) {
//     console.log(this.name + ' say ' + massage);
// };
// let Developer = function (name, age, language) {
//     Person.apply(this,arguments);
//     this.language = language;
// };
// // Так відбувається наслідування прототипів
// Developer.prototype.__proto__ = Person.prototype;
//
// let homer = new Person('homie', 40);
// let phpist = new Developer('bart', 90, 'PeHaPe')
//
// homer.greet('Hello there');
// phpist.greet('I like boys');
// console.log(phpist);
// console.log(homer);

//DESTRUCTURISATION
// function f1(...args) {
//     console.log( args.length );
//     console.log(args.values().next());
// }
//
// let testArr = [8,4,'hello', {name : 'userName', age:15}, [1,3,5]];
// f1(testArr);
//
// console.log('_____');
//
// f1(8,4,'hello', {name : 'userName', age:15}, [1,3,5]);

// КУСОЧОК ООП.
// // запсукати через консольку ноди
// let Person = require('./class');
//
// let pers = new Person('Igor', 24, 'male');
//
// pers.greet()

//OBJECT ASSIGN
// let persona = {
//     name :'Igor',
//     age: 24,
//     gender: 'male'
// };
//
// let car = {
//     name: 'red',
//     wheels: 4,
//     power: 200
// };
//
// // Персону поміняли, додавши до неї кару.
// Object.assign(persona, car);
// // Що б такого не було, першйи параметром передаємо пустий обєкт
// let persWithCar = Object.assign({}, persona, car);
// console.log(persWithCar);
// console.log(persona);
// console.log(car);
//
// let b = car;
// let b = JSON.parse(JSON.stringify(car));
//
// let objInObj = {
//     friend :{
//         val: 10
//     },
//     bool: true
// };
// // обєкти не розкриваються (((
// let assignedObj = Object.assign({}, car, objInObj);
// console.log(assignedObj);
//

// ЧОМУ !!!
// let string = 'string';
// let integer = '10';
// let bool = false;
//
// // Тому що стрінга це масив чарів, а відповідно і обєкт.
// // {0:s, 1:t, 2:r, 3:i, ...}
// // воно пише це в новий обєкт через assign. Далі додає обєкт 10,
// // який теж є масивом стрнгів {0:1, 1:0}
// // через це воно перезатирає значення першого записаногообєкту
// let allInOne = Object.assign({}, string, integer, bool);
// console.log(allInOne);
//
//
//

//FOR..IN FOR..OF
//
// //FOR..IN
// // обходить тільки ключі в обєкті. На значення не дивиться
// let a = {
//     name: 'Dima',
//     surname: 'Petrov',
//     age: 10
// };
// for (let prop in a) {
//     if (prop.length < 5) {
//         console.log(prop)
//     }
// }
// console.log('_____');
//
// //FOR OF обходить вже значення масиву. Але не обєкту.
// let b = [
//     'Dima',
//     'Petrov',
//     10
// ];
// for (let prop of b) {
//     if (prop.length < 5) {
//         console.log(prop)
//     }
// }

let obj = {
    value: 10
};

let prot = Object.create(obj);
console.log(obj.value);
console.log(prot.value);
console.log('___');
prot.value = 1;
console.log(obj.value);
console.log(prot.value);
