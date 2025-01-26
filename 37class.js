class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const Harsh = new User('harsh','harsh@gmail.com','1234')
console.log(Harsh.encryptPassword());