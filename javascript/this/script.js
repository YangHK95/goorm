// // Methode => object

// const audio = {
//     title: 'a',
//     play() {
//         console.log('play this', this);
//     }
// }

// audio.play();

// audio.stop = function () {
//     console.log('stop this', this) ;
// }

// audio.stop();

//// function => window object
// function playAudio() {
//     console.log(this)
// }

// playAudio()

//// constructor function => {}
// function Audio(title) {
//     this.title = title;
//     console.log(this)
// }

// const audio = new Audio('a'); 

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop'],
//     displayCategories() {
//         this.categories.forEach(function (category) {
//             console.log(`title:${this.title}, category:${category}`)
//         }, this) 
//     }
// }

// audio.displayCategories();

// // 화살표 함수 ===> this  항상 상위 스코프의 this를 가리키게 됩네다.
// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop'],
//     displayCategories() {
//         this.categories.forEach((category) => {
//             console.log(this)
//         })
//     }
// }

// audio.displayCategories();

let n = 3
result = 0

for (x = 0; x < 5; x++) {
    if ((n - 3 * x) % 5 == 0 && (n - 3 * x) >= 0) {
        result = (x + (n - 3 * x) / 5)
    }
}

result > 0 ? console.log(result) : console.log(-1)

