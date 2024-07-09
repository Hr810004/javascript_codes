const name = "Harsh"
const age = 19
console.log(name + " " + age);
console.log(`Hello my name is ${name} and my age is ${age}`);
const newname = new String(`harsh rana`)
console.log(newname[0]);
console.log(newname.length);
console.log(newname.toLowerCase());
console.log(newname.toUpperCase());
console.log(newname.indexOf('h'));

const newString1 = newname.substring(2,4)
console.log(newString1);
const newString2 = newname.slice(-3,4)
console.log(newString2);
const newString3 = "    harsh    "
console.log(newString3.trim());
const url = "https://harsh.com/harsh%810rana"
console.log( url.replace('%810', '-'));
console.log( url.includes('harsh'));
console.log( newname.split(' '));

