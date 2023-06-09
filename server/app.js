const express = require("express")
const router = require("./routes/route")
const { urlencoded } = require("body-parser")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(fileUpload({
    createParentPath : true
    
}));
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}));

app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())
app.use("/",router)


app.listen(process.env.SERVER_PORT,()=> {
    console.log("SERVER IS RUNNING")
})