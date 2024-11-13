const user = {
    username :"Harsh",
    age : "20",
    welcomeMessage : function(){
        console.log(`${this.username},Welcome to my profile`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Harsh810"
user.welcomeMessage()

console.log(this);

// function harsh(){
//     let username = "Harsh";
//     console.log(this);
// }
// harsh()

// const arrowKey = function (){
//     let username = "harsh"
//     console.log(this.username);
// }
const arrowKey = () => {
    let username = "harsh"
    console.log(this);
}
arrowKey()

const sum = (a,b) => {
    return a+b
}
console.log(sum(3,4));

const directsum = (a,b) => (a+b) // useful in react js
console.log(directsum(3,4));

