// ways to declare an objects
const myNew = Symbol("Key1")
const jsuser = {
    "fullname": "Harshkumar rana",
    name: "Harsh",
    [myNew]: "newkey",
    age: 19,
    location: "Bharuch",
    email: "hr810004@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Thursday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[myNew]);

jsuser.email = "harsh810@google.com"
// Object.freeze(jsuser)
jsuser.email = "hr810@google.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greeting2 = function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(jsuser.greeting2());