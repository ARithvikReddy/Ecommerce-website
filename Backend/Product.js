const mongoose=require('mongoose')


// making schema
const ProductSchema=mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    rating:Number,
})

module.exports=mongoose.model('products',ProductSchema)
