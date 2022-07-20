const express = require('express');
const connection = require("./db")


const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("you are in homepage backend")
})


app.listen(8080, async () =>{
    try{
        await connection
        console.log("connected to db")

    }catch(err){
        console.log('err: ', err);
        
    }
    console.log("listening on http://127.0.0.1:8080")
})