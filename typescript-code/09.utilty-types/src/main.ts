// // Partial

// interface Address {
//     email: string;
//     address: string;
// }

// const me: Partial<Address> = {}
// const you: Partial<Address> = { email: 'john@aabc.come' }
// const all: Address = { email: 'john@aabc.come', address: 'john' }

// // Pick

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Pick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: "Clean Room",
//     completed: false
// }

// Omit

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}
type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
    title: "Clean Room",
    completed: false,
    createdAt: 1234123124,
}

// Exclude

// Required
type User = {
    firstName: string,
    lastName?: string,
}

let firstUser: User = {
    firstName: "John",
}

// let secondUser: Required<User> = {
//     firstName: "John",
// }

//Record

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'persian' },
    boris: { age: 20, breed: 'maine coon' },
    mordred: { age: 30, breed: 'britisih shorthair' }
}

//RetrunType

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
    return str;
}

const a: ReturnType<typeof fn> = "hello"
// const b: ReturnType<typeof fn> = true