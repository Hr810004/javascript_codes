const promiseOne = new Promise(function (resolve, reject) {
    //Do an asyc task here
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log('Async task 1 is compelted');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise Consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is compeleted');
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Harsh", email: "123@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Harsh", email: "123@example.com" })
        } else {
            reject("Error:Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log("Error");
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Javascript", passsword: "123@" })
        } else {
            reject("Error:JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch{
        console.log("Error");
    }
}

consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch("url.com")
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("Error:",error);
    }
}

getAllUsers()

fetch("www.google.com")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error:",error);
})

