// // const sym1 = Symbol()
// // const sym2 = Symbol()
// // const sym3 = Symbol('hi')
// // console.log(sym1 === sym2)

// // console.log(sym3.description)

// let carA = {
//     id: 1,
//     name: 'moring',
//     brand: 'kia',
//     price: 1000
// }

// // carA.id = 300

// // console.log(carA)
// const idSym = Symbol('id')
// carA[idSym] = 300;


// // console.log(carA)
// console.log(Object.getOwnPropertyNames(carA))

// for (const key in carA) {
//     console.log(key)
// }

// console.log(Object.getOwnPropertySymbols(carA))

// const Red = Symbol("red")
// const ORANGE = Symbol("range")
// const YELLOW = Symbol("yellow")
// const BLUE = Symbol("blue")
// const dog = "blue"

// function getImportantLEvel(color) {
//     switch (color) {
//         case Red:
//             return "very important"
//         case ORANGE:
//             return "important"
//         case YELLOW:
//             return "little important"
//         case BLUE:
//             return "not important"
//         default:
//             console.log(`${color} not included`)

//     }
// }

// console.log(getImportantLEvel(BLUE))
// console.log(getImportantLEvel(dog))

const length = Symbol('length')

class Car {
    constructor() {
        this[length] = 0;
    }
    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tuscon');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
    console.log(car, myCars[car])
}