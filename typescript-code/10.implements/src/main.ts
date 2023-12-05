class Car {
    mileage = 0
    price = 100
    color = "white"

    dirive() {
        return 'drive!'
    }

    brake() {
        return ' breake!'
    }
}

// class Ford extends Car { }
// const myFordCar = new Ford()
// myFordCar.dirive()
// myFordCar.brake()

interface Part {
    seats: number
    tire: number
}

class Ford implements Car, Part {
    mileage = 1
    price = 2
    color = "white"
    seats = 4
    tire = 4

    dirive() {
        return 'drive!'
    }

    brake() {
        return ' breake!'
    }
}
