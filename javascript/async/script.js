// function fetchData() {
//     return new Promise((resolve, reject) => {
//         //비동기 요청
//         const success = false;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     })
// }

// fetchData()
//     .then((response) => {
//         console.log(response)
//     }).catch((error) => {
//         console.log(error)
//     })

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response1 => response1.json())
    .then(json => console.log(json))
    .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json2 => console.log(json2))
    .catch((error) => {
        console.eroor(error)
    })
    .finally(() => {
        console.log('작업끝')
    })