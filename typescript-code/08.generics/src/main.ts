// 일반적으로  typescript에서 사용되는 타입
// function getArrayLenght(arry: number[] | string[] | boolean[]): number { 
//     return arry.length
// }

// generics
function getArrayLenght<T>(arry: T[]): number {
    return arry.length
}

const array1 = [1, 2, 3]
const array2 = ["a", "b", "c"]
const array3 = [true, false, true]
getArrayLenght<number>(array1)
getArrayLenght<string>(array2)
getArrayLenght<boolean>(array3)

interface Vehicle<T> {
    name: string;
    color: string;
    option: T
}

const car: Vehicle<{ price: number }> = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000
    }

}
const bike: Vehicle<boolean> = {

    name: 'Bike',
    color: 'green',
    option: true
}