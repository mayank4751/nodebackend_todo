import mongoose from "mongoose";




const mongoURI = "mongodb+srv://mayanksharma:WGTniI9jPeIGPDFU@cluster0.gvzga3e.mongodb.net/?retryWrites=true&w=majority";

export const connecdb = () =>{
mongoose.connect(mongoURI,{
    dbName:"auth"
}).then((res) => {
    console.log("database connected")
})
.catch((error) => {
    console.log(error)
})
}