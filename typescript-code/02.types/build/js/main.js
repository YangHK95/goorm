"use strict";
// Boolean
let boolean;
let falseBoolean = false;
//Number
let number;
let integer;
let float = 1.2345;
//String
let string;
let firstName = "Doe";
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = [
    'John', 1, 2
];
let array2 = [
    'John', 1, 2
];
//여러 타입을 단어할 수 없을때 anny
let someArray = ['John', 1, [], {}, false];
//Interface,Type
//읽기 전용 배열 생성 (readonly, ReadonlyArray)
let stirngArray = ['A', 'b'];
let numberArray = [1, 2];
// stirngArray.push('C')
// numberArray[0] = 3
//Tuple
let tuple1;
tuple1 = ['a', 1];
let users;
users = [[1, 'John']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2); // tupel은 push가 가능하다
console.log(tuple2);
//any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: boolean = unknown
let string2 = unknown;
//object
let obj = {};
let arr = [];
// let nul: object = null
let date = new Date(0);
const obj1 = {
    id: 1,
    title: 'title1',
    description: 'description1'
};
//Union
let union;
union = 'hi';
union = 123;
// union = []
//function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2; // retrun 이 없을 때는 void
func2 = function () {
    console.log('hi');
};
//Null,undefined
// let number1: number = undefined
// let string3: string = null
// let object: { a: 10, b: false } = undefined
// let array: any[] = null
// let undefined1: undefined = null
// let null1: null = undefined
// let void1: void = null
let void2 = undefined; // voide할당한 곳에는 undefined가 가능하다.
//void
function greetind() {
    console.log('hi');
}
const hi = greetind();
console.log(hi);
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
never.push(1);
