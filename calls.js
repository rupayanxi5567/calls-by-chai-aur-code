function getUser(userName){
    this.userName = userName
    console.log(`it's called`)

}


function createUser(userName, email, password){
    getUser.call(this, userName)
    this.email = email
    this.password = password
}

let puku = new createUser("foty", "puku@gmail.com", "12wwea")

console.log(puku)