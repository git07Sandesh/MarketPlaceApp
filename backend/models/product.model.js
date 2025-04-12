// This is used to create a collecttion for Product in our database.

import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    timestamps: true
});
 
const Product = mongoose.model('Product', productSchema);

export default Product;