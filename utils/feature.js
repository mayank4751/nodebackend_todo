import jwt from 'jsonwebtoken';

export const sendCokkie=(user,res,message,statusCode=200)=>{
    const token = jwt.sign({
        _id : user.id
       }, process.env.jwt_SECRET)
      
      console.log("hhhhh",token)
       res.status(statusCode).cookie("token",token,{
          httpOnly:true,
          maxAge: 15*60*1000,
       }).json({
          success:true, message
       })
}