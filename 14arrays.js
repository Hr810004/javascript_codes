const myArr = [3,32,34,54,23]
console.log(myArr.length);

myArr.push(2)
console.log(myArr);
console.log(myArr.length);

myArr.push(7)
console.log(myArr);
console.log(myArr.length);

myArr.pop()

myArr.unshift(23)
console.log(myArr);
console.log(myArr.indexOf(23));
console.log(myArr.includes(23));

const newArr = myArr.join()
console.log(typeof myArr);
console.log(typeof newArr);

//slice or splice
console.log("A ", myArr);
const myArr1 = myArr.slice(1,3)
console.log("B ", myArr);

const myArr2 = myArr.splice(1,3)
console.log(myArr2);
console.log("C ", myArr);
