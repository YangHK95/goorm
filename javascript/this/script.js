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

// function => window object
// function playAudio() {
//     console.log(this)
// }
// playAudio()

// constructor function => {}
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

const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach((category) => {
            console.log(this)
        })
    }
}

audio.displayCategories();