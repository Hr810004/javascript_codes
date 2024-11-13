const User = {}
User.id = "123abc"
User.name = "Harsh"
User.isLoggedIn = false
// console.log(User);

const regUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Rana"
        }
    }
}

// console.log(regUser.fullname);

const obj1 = {
    1:"a", 2: "b"
}
const obj2 = {
    3:"c", 4: "d"
}
const obj5 = {
    5:"c", 6: "d"
}
const obj3 = { obj1 ,obj2}
console.log(obj3);
// target and source format source can be multiple
const obj4 = Object.assign({},obj1,obj2,obj5)
console.log(obj4);

const obj6 = {...obj1,...obj2,...obj5}
console.log(obj6);

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

users[1].email = "hr810@gmail.com"
console.log(users[1]);
console.log(Object.keys(User)); // returns an array of keys
console.log(Object.values(User)); // returns array of values
console.log(Object.entries(User)); // returns array of key value pairs

console.log(User.hasOwnProperty('isLoggedIn'));
