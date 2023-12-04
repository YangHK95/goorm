"use strict";
// // 1.타입 단언
// const bodyElement = document.querySelector('body') as HTMLBodyElement
// bodyElement.innerText = "hello"
// 2.!not null 타입 단언
const bodyElement = document.querySelector('body');
bodyElement.innerText = "hello";
// // 3. type guard
// const bodyElement = document.querySelector('body')
// if (bodyElement) {
//     bodyElement.innerText = "hello"
// }
