const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    userName:String,
    password:String,
    email:String,
})

const signup_Schema = mdb.model("signup",signupSchema)
module.exports = signup_Schema