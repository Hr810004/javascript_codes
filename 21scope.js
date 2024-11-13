// let a = 10
// const b =20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);
//scope is defined using {} 

let a =300
if (true) {
    let a = 10
    const b = 20
    console.log("Inner:" , a);
    
    // var c = 30 // dont use this because it is printing outside if block 
}
console.log("Outer :" , a);
// console.log(b);
// console.log(c);
