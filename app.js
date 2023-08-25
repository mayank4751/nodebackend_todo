import express from "express";
import mongoose from "mongoose";
import userRouter from "./route/users.js";
import taskRouter from "./route/tasks.js";
import { connecdb } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";


export const app = express();

// app.listen(3000, () => {
//     console.log("server listening on port: 3000")
// })

const router = express.Router();


//using middlewar for json data
app.use(express.json());
app.use("/users",userRouter);
app.use("/task",taskRouter);

app.use(cookieParser())



app.get("/",(req,res)=>{
    res.send("its working")
})




app.post("/user/new",async(req,res)=>{

    const {name,email,password} = req.body;

    //  await User.create({
    //     name:"mayank",
    //     email:"mayank@gmail.com",
    //     password:"123"
    // })
   await User.create({
        name,
        email,
        password
    })

      res.json({
          success:true,
          message:"user created",
      })
  })

app.get("/userid", async(req,res)=>{
    const id = req.query.id
  const user=  await User.findById(id)


res.json({
    success:false,
    user
})
})


