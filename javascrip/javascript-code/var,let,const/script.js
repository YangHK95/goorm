// var greeting = 'hello'
// console.log(greeting);

// var greeting = 'hi'
// console.log(greeting)

// var greeting = 'how are you?'
// console.log(greeting)

// let greeting = "hello" // let 중복 선언 불가, 재할당은 가능
// console.log(greeting)

// greeting = 'hi'
// console.log(greeting)

// 중복 선언 불가, 재할당 불가,
// const greeting = "hello"
// console.log(greeting)

// 변수의 참조 레벨
// var 함수 레벨 스코프
// function func() {
//     if (true) {
//         var a = "a"
//         console.log(a)
//     }
//     console.log(a)
// }
// // console.log(a)
// func()
// let const => black 레벨 스코프
function func() {
    if (true) {
        let a = "a"
        console.log(a)
    }
    console.log(a)
}
func()