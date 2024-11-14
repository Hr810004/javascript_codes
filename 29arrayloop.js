const arr = [2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps
const map = new Map()
map.set('name1', 'John')
map.set('name2', 'Tina')
map.set('name3', 'Rahul')
console.log(map);
for (const [key, value] of map) { // destructuring of array
    console.log(`Key: ${key} , Value :${value}`);
}

const myObject = {
    name: 'John',
    age: 25,
    div: 2
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

const array1 = [2, 3, 4, 5, 6]
for (const key in array1) {
    console.log(`${key} and its value ${array1[key]}`);
}

const array = ["hi", "this", "is", "new", "array"]
array.forEach( (item) => console.log(item)
 )

 function myitem(item){
    console.log(item);
 }
 array.forEach(myitem)

 array.forEach((item,index,arr)=>
console.log(item + index + arr)
)

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "h@gmail.com"
    }
]

users.forEach((item) => {console.log(item.id + " : " + item.email)})