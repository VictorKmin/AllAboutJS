function a() {
    return new Promise((resolve, reject) => {
        let a = 10*10;
        resolve(a);
    })
}

function b(val) {
    return new Promise((resolve, reject) => {
        let result = val/2;
        resolve(result);
    })
}

// Я ПОНЯВ !!!!!!!!!!!!!!!
// ІДЕМО ПО ЦЕПОЧЦІ. Вкикликаємо одну функцію, яка при виконанні повертає нам якесь значення
// то значення в свою чергу переходить параментром в наступний then

a()
    .then(resolve => a())
    .then(ЗначеняЯкеВіддавThenВище => b(ЗначеняЯкеВіддавThenВище))
    .then(КінцевийРезультут => console.log(КінцевийРезультут))
    // .catch(console.log('Коли щось пішло не так'));