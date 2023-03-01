import { Schema, model } from "mongoose";

const UserSchema= new Schema({
    login: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    panier:{ 
        type: Schema.Types.ObjectId,
        ref: 'panier',
        required: true
    }
        
})

const User = model("user", UserSchema);

export default User;