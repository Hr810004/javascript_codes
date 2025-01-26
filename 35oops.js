// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

const user = {
    username: 'John',
    age: 30,
    logincount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`Got user age:${this.age}`);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function User(username,logincount,isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Hello ${this.username}!`);
    }
}

const userOne = new User("harsh",1,true)
const userTwo = new User("rana",2,false)

console.log(userOne);
console.log(userTwo);


const sum = (num1,num2)=>num1+num2;
console.log(sum(5,4));






