const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createTodo)

function createTodo() {
    // 새로운 아이템 객체 생성하기
    const item = {
        id: new Date().getTime(), //유니크한 것이여야함.
        text: " ",
        complete: false
    }
    //배열 처음에 새로운 아이템 추가
    // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
    todos.unshift(item)

    // 요소 생성하기
    const { itemEl, inputEl, editBtnEl, removeBtnEl } = createTodoElement(item)

    // 리스트 요소 안에 방금 생성한 아이템 요소 추가하기
    list.prepend(itemEl)

    inputEl.removeAttribute('disabled')
    // 생성하지마자 바로 타이핑 할 수있게 해주려면 focus()
    inputEl.focus()
    // item 저장
    saveToLocalStorage()
}

function createTodoElement(item) {
    const itemEl = document.createElement('div')
    itemEl.classList.add('item')

    const checkboxEl = document.createElement('input')
    checkboxEl.type = 'checkbox'
    // 새로고침 했을때 complete가 true 인지 확인해주는 것
    checkboxEl.checked = item.complete

    if (item.complete) {
        itemEl.classList.add('complete')
    }
    const inputEl = document.createElement('input')
    inputEl.type = 'text'
    inputEl.value = item.text
    inputEl.setAttribute('disabled', '')

    const actionEl = document.createElement('div')
    actionEl.classList.add('actions')

    const editBtnEl = document.createElement('button')
    editBtnEl.classList.add('material-icons')
    editBtnEl.innerText = 'edit'

    const removeBtnEl = document.createElement('button')
    removeBtnEl.classList.add('material-icons', 'remove-btn')
    removeBtnEl.innerText = 'remove_circles'

    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked

        if (item.complete) {
            itemEl.classList.add('complete')
        } else {
            itemEl.classList.remove('complete')
        }
        // 체크 박스 누를시 complete true상태로 저장 하지만 체크박스에 체크는  checkboxEl에서 조절
        saveToLocalStorage()
    })

    // item에서 클릭이 벗어나다 => blur
    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '')
        saveToLocalStorage()
    })

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled')
        inputEl.focus()
    })


    inputEl.addEventListener('input', () => {
        item.text = inputEl.value
    })
    // todos.filter(t => t.id !== item.id) todos배열중에 t.id클린간거 빼고 새로 배열 해주세요.
    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== item.id)

        itemEl.remove();
        saveToLocalStorage()
    })


    actionEl.append(editBtnEl)
    actionEl.append(removeBtnEl)

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return { itemEl, inputEl, editBtnEl, removeBtnEl }


}

// localStorage에 저장하기 (하상 string상태로 넣어야한다.)
//window.localStorage.setItem(key, data), window 생략가능
function saveToLocalStorage() {
    const data = JSON.stringify(todos)

    localStorage.setItem('my_todos', data)
}

// localStorage에서 불러오기
function loadFromLocalStorage() {
    const data = localStorage.getItem('my_todos')
    // 만약 데터 있으면 todos 배열 안에 들어가.
    if (data) {
        todos = JSON.parse(data)
    }
}
// 불러온 localStorage를 보여주기.
function displayTodos() {
    loadFromLocalStorage()

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i]
        const { itemEl } = createTodoElement(item)

        list.append(itemEl)
    }

}

displayTodos();



