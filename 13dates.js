let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// yyyy, mm, dd , hours , minutes, seconds , milliseconds with month index starting from 0 format to make specifed date 
let specdate1 = new Date(2024, 9, 8 , 4 ,31 , 2)
console.log(specdate1.toLocaleString());

let specdate2 = new Date("2024-10-8")
console.log(specdate2.toLocaleString());

// let specdate3 = Date.now()
// console.log(specdate3);
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth()+ 1);
console.log(newdate.getFullYear());
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday: "long",
})