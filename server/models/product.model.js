import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Provide product name"] // Validation added as per DB design
    },
    image : {
        type : Array,
        default : []
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'category'
        }
    ],
    subCategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'subCategory'
        }
    ],
    unit : {
        type : String,
        default : ""
    },
    stock : {
        type : Number,
        default : 0 // null ki jagah 0 behtar hai stock calculation ke liye
    },
    price : {
        type : Number,
        default : 0 // Typo fix: "defualt" ko "default" kiya gaya hai
    },
    discount : {
        type : Number,
        default : 0
    },
    description : {
        type : String,
        default : ""
    },
    more_details : {
        type : Object,
        default : {}
    },
    publish : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

// Text index for search optimization
productSchema.index({
    name  : "text",
    description : 'text'
},{
    weights: { // Weights property ko correct syntax mein dala hai
        name : 10,
        description : 5
    }
})

const ProductModel = mongoose.model('product', productSchema)

export default ProductModel