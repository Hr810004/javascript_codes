const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array = myNums.filter((num) => num > 4)
console.log(array);

let array2 = myNums.filter((num) => {
    return num > 4
})
console.log(array2);

let newNums = [];
myNums.forEach((num) => { // necessary to add return statement
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);


const Books = [
    { title: 'Book num', genre: 'Fiction', publish: '1990' },
    { title: 'Book num1', genre: 'Science Fiction', publish: '1990' },
    { title: 'Book num2', genre: 'Fiction', publish: '1990' },
    { title: 'Book num3', genre: 'Fiction', publish: '1990' },
    { title: 'Book num4', genre: 'Fiction', publish: '1990' }
]

const NewBooks = Books.filter((bk) => bk.genre === 'Science Fiction')
console.log(NewBooks);

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
const newArray = newNumbers.map((num) => num + 10)
const newArray2 = newNumbers.map((num) => { return num + 10 })
console.log(newArray);
console.log(newArray2);
const newArray3 = newNumbers.map((num) => num + 10).map((num) => num * 10)
console.log(newArray3);
const newArray4 = newNumbers.map((num) => num + 10).map((num) => num * 10).filter((num) => num >= 140)
console.log(newArray4);


const additionResult1 = newNumbers.reduce(function sum(acc, current) {
    let result = acc + current
    return result
})
console.log(additionResult1);
const additionResult2 = newNumbers.reduce((sum, current) => sum + current, 0)
console.log(additionResult2);


const shoppingCart = [
    {
        itemname: "data science",
        price: 299
    },
    {
        itemname: "data science",
        price: 299
    },
    {
        itemname: "data science",
        price: 299
    },
    {
        itemname: "data science",
        price: 299
    }
]

const totalPrice = shoppingCart.reduce((acc,item) => acc+item.price , 0)
console.log(totalPrice);
