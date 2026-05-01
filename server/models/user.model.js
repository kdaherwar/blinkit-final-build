import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Provide name"]
    },
    email : {
        type : String,
        required : [true, "Provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Provide password"]
    },
    avatar : {
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    },
    refresh_token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    last_login_date : {
        type : Date,
        default : null // Date ke liye null ya default hata dena behtar hai
    },
    status : {
        type : String,
        // Diagram (image_3d245e.jpg) ke mutabiq status enum values
        enum : ["Active", "Inactive", "Suspended"], 
        default : "Active"
    },
    // References as per your Architecture Diagram
    address_details : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'address' // Make sure address model name matches exactly
        }
    ],
    shopping_cart : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'cartProduct' // Matches your cartProduct table in diagram
        }
    ],
    orderHistory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'order' // Matches order table in diagram
        }
    ],
    forgot_password_otp : {
        type : String,
        default : null
    },
    forgot_password_expiry : {
        type : Date,
        default : null
    },
    role : {
        type : String,
        enum : ['ADMIN', "USER"],
        default : "USER"
    }
},{
    timestamps : true
})

// Model name diagram ke hisaab se "User" hi rakha hai
const UserModel = mongoose.model("User", userSchema)

export default UserModel