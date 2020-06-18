class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        return this._email = value;
    }

    get gender() {
        return this._gender;
    }
    set gender(value) {
        return this._gender = value;
    }

    toString() {
        alert("Custom toString method");
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        return this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        return this._author = value;
    }

    get price() {
        return this._price;
    }
    set price(value) {
        return this._price = value;
    }

    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        return this._quantity = value;
    }

    getProfit() {
        console.log("The profit is " + (this._quantity * this._price));
    }

    toString() {
        alert("Custom toString method")
    }

}

let author = new Author("Bernard Werber", "bw@gmail.com", "fantasy");
let book = new Book("Angels Empire", author.name, 25, 1);

