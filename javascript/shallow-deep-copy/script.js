// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer function: ' + outerVariable)
//         console.log('Inner function:' + innerVariable)
//     }
// }

// const newFunction = outerFunction('outerVariable')
// newFunction('innerVariable')

let a = 'a'

function functionA() {
    let b = 'b'
    console.log(a, b)
}

functionA()

