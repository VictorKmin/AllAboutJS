function a() {
    return new Promise((resolve, reject) => {
        let a = 10 * 10;
        resolve(a);
    })
}

function b(val) {
    return new Promise((resolve, reject) => {
        let result = val / 2;
        resolve(result);
    })
}

// Я ПОНЯВ !!!!!!!!!!!!!!!
// ІДЕМО ПО ЦЕПОЧЦІ. Вкикликаємо одну функцію, яка при виконанні повертає нам якесь значення
// то значення в свою чергу переходить параментром в наступний then

a()
    .then(resolve => a())
    .then(() => getUsers())
    .then(ЗначеняЯкеВіддавThenВище => {
        if (!ЗначеняЯкеВіддавThenВище) return reject(new Error('users was not found'))
        b(ЗначеняЯкеВіддавThenВище)
    })
    .then(КінцевийРезультут => console.log(КінцевийРезультут))
    .catch(function (e) {
        console.log(e);
    });


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});

async function add2(x) {
    const a = resolveAfter2Seconds(20);
    const b = resolveAfter2Seconds(a);
    return x + await a + await b;
}

add2(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});


function randNum() {
    let r = Math.random()
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (r > .5) {
                console.log(r);
                resolve(r)
            } else {
                reject('Ooops')
            }
        }, 1000)

    })
};

function multRand(number) {
    setTimeout(function () {
        console.log(number + 10)
    }, 1000)
}


randNum().then(res => {
    console.log(res);
    return res
}).then(res => {
    multRand(res)
})
    .catch(reason => {
        console.log(reason)
    })