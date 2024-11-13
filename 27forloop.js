//for loop 
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("inside if statement at 5th iteration");
    }
    console.log("Value is" ,element);  
}

for (let i = 0; i <3; i++) {
    for (let j = 0; j <3; j++) {
        console.log(`inner loop at ${j} while outer loop ${i}`);
    }
}
for (let i = 1; i < 4; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*(j)}`);
    }
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("Detected 5");
        continue
    }
    if (element === 8) {
        console.log("Detected 8");
        
        break
    }
    console.log("Value is" ,element);  
}