import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:String,
    name:{
      type:String,
      required:true, 
    },
    email:{
        type:String,
        unique:true ,
      required:true, 
      },
    password:{
        type:String,
        select:false,
    },
    createdAt :{
        type:Date,
        default:Date.now,
    }
})

  export const User = mongoose.model("users", schema)