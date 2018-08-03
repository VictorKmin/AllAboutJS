class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    a(){
        Person.greet()
    }

    // статичний метода.
    static greet() {
        console.log(this.name + ' hello')
    };
}

module.exports = Person;