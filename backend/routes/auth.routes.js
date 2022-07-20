const {Router} = require('express');

const ClientModel = require('../models/ClientModel');

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    const client = await new ClientModel(req.body);
    client.save((err,success)=>{
        if(err){
            res.status(500).send({message: "Error Occured"})
        }
        return res.status(201).send({message: "Sign Up Success", token : 789789})
    });
    console.log("Signed Up Successfully")
})

