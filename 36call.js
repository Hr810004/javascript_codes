function SetUsername(username){
    this.username = username
    console.log("Called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    //pass current execution context to another context
    this.email=email
    this.password=password
}   

