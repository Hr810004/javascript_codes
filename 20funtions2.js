// ... means rest operator , which is used to pass a variable number of arguments to a function. and this is also called spread operator.
function calculateCartPrice(par1,par2,...num1){
    return num1
}

console.log(calculateCartPrice(2,4,5,6));

const user = {
    username :"harsh",
    age : "20"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`); 
}
handleObject(user)
handleObject({
    username : "newname",
    age:"newage"
})

const newArray = [200,400,100,500]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([400,200,500,100]));

