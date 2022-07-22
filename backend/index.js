const express = require('express');
const connection = require("./db")
const cors = require('cors')
require("dotenv").config();
const authRouter = require("./routes/auth.routes");
const usersRouter = require("./routes/users.routes");

const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use('/user', usersRouter)


app.get("/", (req,res)=>{
    res.send("you are in homepage backend")
})


app.listen(PORT, async () =>{
    try{
        await connection
        console.log("connected to db")

    }catch(err){
        console.log('err: ', err);
        
    }
    console.log(`listening on http://127.0.0.1:${PORT}`)
})