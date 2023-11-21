// // shallow copy
// const aArray = [1, 2, 3]

// // shallow copy with spread operator
// const bArray = [...aArray, 4]
// console.log('aAray', aArray)
// console.log('bAray', bArray)
// console.log('aArray === bArray', aArray === bArray)

// // shallow copy with Object.assign()
// const cArray = Object.assign([], bArray)
// console.log('cArray', cArray)
// console.log('aArray === cArray', aArray === cArray)

// // Nested Araay and Object
// cArray.push([5, 6, 7])
// console.log('cArray', cArray)
// const dArray = [...cArray, 10]
// console.log('dArray', dArray)
// dArray[4].push(8)
// console.log('cArray', cArray)
// console.log('dArray', dArray)

// //얕은 동결
// const aObject = {
//     "a": "a",
//     "b": "b",
//     "cObject": { "a": 1, "b": 2 }
// }

// Object.freeze(aObject)
// aObject.a = "c"
// console.log('aObject', aObject)

// aObject.cObject.a = 3;
// console.log('aObject', aObject)

const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

// deep copy with Json.parse(json.stringify())
// const newAOject = JSON.parse(JSON.stringify(aObject))

// console.log('aObject', aObject)
// console.log('newAOject', newAOject)
// aObject.cObject.a = 3;
// console.log('aObject', aObject)
// console.log('newAOject', newAOject)

//deep copy with nested spread operator
const newAOject = { ...aObject, cObject: { ...aObject.cObject } }
console.log('aObject', aObject)
console.log('newAOject', newAOject)
aObject.cObject.a = 3;
console.log('aObject', aObject)
console.log('newAOject', newAOject)