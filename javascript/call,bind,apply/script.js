// // call()
// const fullName = function (city, country) {
//     console.log(this.firName + '  ' + this.lastName, city, country)
// }

// const person1 = {
//     firName: 'John',
//     lastName: 'Smith',
// }

// fullName.call(person1, "oslo", "Norway");

// // Apply()
// const fullName = function (city, country) {
//     console.log(this.firName + '  ' + this.lastName, city, country)
// }

// const person1 = {
//     firName: 'John',
//     lastName: 'Smith',
// }

// fullName.apply(person1, ["Oslo", "Norway"]);

// bind()
function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}
const greeting = {
    korGreeting: "안녕",
    engGreeting: "Hello",
}

const boundFunc = func.bind(greeting);
boundFunc("kor");