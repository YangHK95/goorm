class Person {
    constructor(name, email, birthday) {
        this.mane = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }

    introdouce() {
        return `Heelo my name is ${this.name}`;
    }
    static multipleNumbers(x, y) {
        return x * y;
    }
}

const john = new Person('john', 'jonh@example.com', '10-3-98')
console.log(john)