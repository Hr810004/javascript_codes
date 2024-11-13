const isLoggedIn = true
if (2 === "2") {
    console.log("executed");
}
else {
    console.log("not executed");

}

const temp = 50
if (temp > 25) {
    let city = "bharuch"
    console.log(`temperature:${city} : ${temp}`);
}
// console.log(`temperature:${city} : ${temp}`);
if (temp >= 51) console.log("higher"), console.log("lower");

const userLoggedIn = true
const userAdmin = false
const userEmail = false
const loggedInGoogle = true
if (!userAdmin && userLoggedIn) {
    console.log("failed login attempt");
}

if (userEmail || loggedInGoogle) {
    console.log("success login attempt");
}

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("other month");
        break;
}
const userEmail2 = ""
// const userEmail2 = "harsh@example.com" //false,0,-0,Bigint 0n,"",null,undefined,NaN 
// "0","false"," 0","-0","NaN","null","undefined",[],{},function(){}
if (userEmail2) {
    console.log("Got user email");
}
else {
    console.log("No user email");
}
const userEmail3 = []
if (userEmail3.length === 0) {
    console.log("Array is empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??)
let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 15
console.log(val1);

//ternary operator ?
const score = 100
score >=99 ? console.log("score is high") : console.log("score is low");

