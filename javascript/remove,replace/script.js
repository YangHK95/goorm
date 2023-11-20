const listParent = document.querySelector('ul')
const list = document.querySelectorAll('li')

//요소 지우기
// listParent.removeChild(list[1])

//요소 교체하기
const oldElement = document.getElementById('A')
const newElement = document.createElement('span')

newElement.textContent = "Hi"

oldElement.parentNode.replaceChild(newElement, oldElement)


var str = "Hello World";

str.indexOf('Hello');

console.log(str.indexOf('dfef'))

// if (str.indexOf('c=', 'c-', 'dz=', 'd-'))