// // iterator 생성하는 함수
// function makeIterator(numbers) {
//     let nextIndex = 0

//     return {
//         next: function () {
//             return nextIndex < numbers.length ? {
//                 value: numbers[nextIndex++], done: false
//             } :
//                 { vlaue: undefined, done: true }
//         }
//     }
// }

// // 숫자 배열 생성
// const numbersArray = [1, 2, 3]
// // const numbersIterator = makeIterator(numbersArray)

// // [Symbal.iterator]()를 이용하면 반복가능한 값을 반복기로 생성가능
// const numbersIterator = numbersArray[Symbol.iterator]()

// console.log(numbersIterator.next())
// console.log(numbersIterator.next())
// console.log(numbersIterator.next())
// console.log(numbersIterator.next())

// const numbersIterable = [1, 2, 3]
// const numbersNotIterable = { a: 1, b: 2, c: 3 }
// console.log(typeof numbersIterable)
// console.log(typeof numbersNotIterable)
// for (const n of numbersNotIterable) {
//     console.log(n)
// }

const set = new Set([1, 2, 3, 4, 5])
console.log('set', set)
const map = new Map([['a', 1], ['b', 2]])
console.log('map', map)

console.log(set[Symbol.iterator]().next())
console.log(map[Symbol.iterator]().next())