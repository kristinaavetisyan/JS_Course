class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        return this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        return this._lastName = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        return this._gender = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        return this._age = value;
    }
}

class Student extends Person {
    constructor(program, year, fee) {
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    get program() {
        return this._program;
    }
    set program(value) {
        return this._program = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        return this._year = value;
    }
    get fee() {
        return this._fee;
    }
    set fee(value) {
        return this._fee = value;
    }
    passExam(program, grade) {
        // I didn't understand the problem 
    }
    toString() {
        console.log("Custom toString method")
    }

}

class Teacher extends Person {
    constructor(program, pay) {
        this.program = program;
        this.pay = pay;
    }
    get program() {
        return this._program;
    }
    set program(value) {
        return this._program = value;
    }
    get pay() {
        return this._pay;
    }
    set pay(value) {
        return this._pay = value;
    }
    toString() {
        console.log("Custom toString method")
    }
}


