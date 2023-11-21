// const sum = (x, y) => x + y;

// const curriedSum = x => y => x + y;

// console.log(sum(1, 2))
// console.log(curriedSum(10))
// console.log(curriedSum(10)(20))

const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
}

const hamburger = makeFood('Bread')("ham")("Tomato")
console.log(hamburger)

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 => `${ingredient1} ${ingredient2} ${ingredient3}`
const NewHamburger = cleanerMakeFood('Bread')("ham")("Tomato")
console.log(NewHamburger)

function log(date, importance, message) {
    alert(`${date.getHours()}:${date.getMinutes()}:[${importance}] ${message}`)
}

log(new Date(), 'DEBUG', 'some bug')

// currying function 

function curry(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)
            }
        }
    }
}

const curriedLog = curry(log)
// log(new Date(), 'DEBUG', 'some bug')
curriedLog(new Date(), 'DEBUG', 'some bug')