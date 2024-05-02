const mongoose=require('mongoose')

//making schema
const SignupSchema=mongoose.Schema({
    email:String,
    password:String,
    repassword:String,
})

module.exports=mongoose.model('users',SignupSchema)