const marvelheroes = ["spiderman", "ironman", " thor"]
const dc = ["batman", "flash", " superman"]

// marvelheroes.push(dc)
// console.log(marvelheroes);
// console.log(marvelheroes[3]);
// console.log(marvelheroes[3][1]);
const newArr = marvelheroes.concat(dc)
console.log(newArr);

// allows multiple concatination
const newArr2 = [...marvelheroes, ...dc]
console.log(newArr2);

const newArr3 = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
//flat can make single array irrespective of depths
const newArr4 = newArr3.flat(Infinity)
console.log(newArr4);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from(({name : "Harsh"})));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

