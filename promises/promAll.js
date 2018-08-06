let a = () => {
        let res = 57392 * 595784;
        console.log('function A done with ' + res);
        return res;
};

let b = value=>{
    console.log('function B done with ' + value/2);
    return value/2;
};

let pr2 = new Promise((resolve, reject) => {
    resolve(b(a()));
});
pr2.then(data=>{
    console.log(data);
});