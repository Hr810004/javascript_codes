function myname() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
// console.log(myname());

function sum(num1, num2 = 2) {
    let result = num1 + num2
    console.log(result); // it is just printing the value not returning anything 
    return result
    console.log("harsh"); // it will not run after any return statement

}
sum(3, null)
//due to function scope you can 't access the variable declared inside the function from outside the function thats why you can use same name for variable inside and outside the function
const result = sum(3, 5)
console.log("Result:", result);

function login(username = "Guest") {
    if (!username) {
        console.log("Guest login");
        return
    }
    return `${username} just logged in`
}

console.log(login());
console.log(login("harsh"));