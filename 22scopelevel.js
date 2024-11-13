//nested scope
function one(){
    const username = "harsh"
    function two(){
        const website = "harsh810.io"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "harsh"
    if (username === "harsh") {
        const website = "harsh810.io"
        console.log(username + " "+ website);
    }
    // console.log(website);   
}
// console.log(username);

function addone(num){
    return num + 1
}
console.log(addone(5))

const addTwo = function(num){
    return num+2
}
addTwo(5)