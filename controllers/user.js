import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCokkie } from "../utils/feature.js";

export const getallUsers = async(req,res)=>{}

export const login = async(req,res,next) =>{
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Does Not Exist",
    });
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "invalid email or password",
      });
    } else {
      sendCokkie(user, res, "login successfully", 200);
    }
  }
}

export const register =  async(req,res)=>{
const {name,email,password} = req.body;

let  user = await User.findOne({
    email
})
if(user) return res.status(404).json({
    success:false, message :"User already exists"
})

const hashedpassword = await bcrypt.hash(password,10)
console.log("---------")
user =  await User.create({
    name,
    email,
    password:hashedpassword
 })
 console.log(user)
//  returnres.send("Registered successfully")
sendCokkie(user,res,"Registered successfully",201)

}

export const getMyProfile= async(req,res)=>{  
  const id = 'myid';
console.log(req)
const { token } = req.cookies;
console.log(token);

  // const user = await User.findById(id);
  res.status(200).json({
    success:'true',
    user
  })
}

export const logout= async(req,res)=>{  
  res.status(200)
  .cookies("token","",{expires:new Date(Date.now())})
  .json({
    success:'true',
    user
  })

}