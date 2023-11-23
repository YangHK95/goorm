const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createTodo)

function createTodo() {
    // 새로운 아이템 객체 생성하기
    const item = {
        id: new Date().getTime(), //유니크한 것이여야함.
        text: "",
        complete: false
    }
    //배열 처음에 새로운 아이템 추가
    // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
    todos.unshift(item)

    // 요소 생성하기
    const { itemEl, inputEl, editBtnEl, reomoveBtnEl } = createTodoElement(item)

    // 리스트 요소 안에 방금 생성한 아이템 요소 추가하기
    list.prepend(itemEl)

    inputEl.removeAttribute('disabled')
    // 생성하지마자 바로 타이핑 할 수있게 해주려면 focus()
    inputEl.focus()
}

function createTodoElement(item) {
    const itemEl = document.createElement('div')
    itemEl.classList.add('item')

    const checkboxEl = document.createElement('input')
    checkboxEl.type = 'checkbox'

    if (item.complete) {
        itemEl.classList.add('completed')
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

    const reomoveBtnEl = document.createElement('button')
    reomoveBtnEl.classList.add('material-icons', 'remove-btn')
    reomoveBtnEl.innerText = 'remove_circles'

    checkboxEl.addEventListener('chasged', () => {
        item.complete = checkboxEl.checked

        if (item.complete) {
            itemEl.classList.add('completed')
        } else {
            itemEl.classList.remove('completed')
        }
    })

    // item에서 클릭이 벗어나다 => blur
    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '')
    })

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled')
        inputEl.focus()
    })


    inputEl.addEventListener('input', () => {
        item.text = inputEl.value
    })
    // todos.filter(t => t.id !== item.id) todos배열중에 t.id클린간거 빼고 새로 배열 해주세요.
    reomoveBtnEl.addEventListener('click', () => {
        todos.filter(t => t.id !== item.id)

        itemEl.remove()
    })


    actionEl.append(editBtnEl)
    actionEl.append(reomoveBtnEl)

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return { itemEl, inputEl, editBtnEl, reomoveBtnEl }


}
