let val;

val = document

val = document.baseURI // 웹 페이지의 절대 uri반환
val = document.head // head 태그 반환
val = document.body // body 태그 반환

val = document.forms // <form>트그 반환
val = document.forms[0].classList

val = document.scripts[0].getAttribute('src') // <script> 태그 반환

const headerContainer = document.getElementById('header-container')
// headerContainer.style.display = 'none'


// console.log(headerContainer)

headerContainer.textContent = "Text Content"
headerContainer.innerText = "inner Content"
headerContainer.innerHTML = "<span>Inner HTML</span>"


const items = document.getElementsByClassName('list-group-item')
console.log(items)

items[0].style.color = "blue"
items[3].textContent = "Hi"

let lists = document.getElementsByTagName('li')
console.log(lists)




lists = Array.from(lists)

console.log(lists)

lists.forEach((lists, index) => {
    lists.textContent = `${index}.List`
})

const liodd = document.querySelectorAll('li:nth-child(odd)')

liodd.forEach((li) => {
    li.style.background = " gray"
})
