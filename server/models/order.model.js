import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : [true, "User is required"]
    },
    orderId : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    // Multiple products handle karne ke liye array behtar hai
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    // Diagram (image_3d245e.jpg) mein product_details ek object/string ki tarah dikhaya gaya hai
    product_details : {
        name : String,
        image : Array,
    },
    paymentId : {
        type : String,
        default : ""
    },
    payment_status : {
        type : String,
        default : ""
    },
    delivery_address : {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTotalAmt : {
        type : Number,
        default : 0
    },
    totalAmt : {
        type : Number,
        default : 0
    },
    // Diagram ke according fields
    delivery_status : {
        type : String,
        enum : ["Pending", "Assigned", "Out for Delivery", "Delivered", "Cancelled"],
        default : "Pending"
    },
    invoice_receipt : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const OrderModel = mongoose.model('order', orderSchema)

export default OrderModel