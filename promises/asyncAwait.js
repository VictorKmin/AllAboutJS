async function a() {
    return new Promise((resolve, reject) => {
        let res = 10 * 10;
       resolve(res)
    })
}

async function b(value) {
    let res = value / 2;
    console.log(typeof res);
    return new Promise((resolve, reject) => {
        resolve(res);
    })
}

async function calcRes() {
    let valA = await a();
    let valB = await b(valA);
    return valB
}

calcRes().then(
    result => {
    console.log(result)
}, err=> {
    console.log(err)
});


// _______________________________________
//

// try catch бажано юзати і в асинхронних функціях.
async function firstFunc() {
   try {
       let a = 20*10;
       return a;
   } catch (e) {
       console.log(e);
   }
}

async function secondFunc(value) {
    let b = value/2;
    return b;
}

//Треба створити ще одну асинхронну функцію, а яку ми будемо
// засувати всі наші асинхронні операції.
//Тоді її треба викликати
// Помилки ловим стандартний try catch
async function main() {
    try {
        let firstVal = await firstFunc();
        let result = await secondFunc(firstVal);
        console.log(firstVal);
        console.log(result);
    } catch (e) {
        console.log(e)
    }
}

main();
