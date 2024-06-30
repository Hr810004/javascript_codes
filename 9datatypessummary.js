//Primitive 
// 7 type : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const decimal = 123.123
const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id === anotherid);

//Non-Primitive or Reference
//Array, Objects, Functions
const anyname = ["batman", "antman", "ironman"]
let anyObject = {name: "Harsh", age: 19}
const anyFunction = function(){
    console.log("Hello world");
}