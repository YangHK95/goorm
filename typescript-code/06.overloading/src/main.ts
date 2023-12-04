// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: any, b: any): any {
//     return a + b;
// }

// add("hello world", "hello")
// add(1, 2)

// function saySomething(word: string | string[]): string {   // 함수 처리.
//     if (typeof word === "string") {
//         return word;
//     } else if (Array.isArray(word)) {
//         return word.join(" ");
//     }
//     throw new Error("unable to say something")
// }

function saySomething(word: string): string  //함수 오버로딩으로 처리
function saySomething(word: string[]): string
function saySomething(word: any): any {
    if (typeof word === "string") {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something")

}

saySomething(["hello", "world"])