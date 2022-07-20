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

authRouter.post("/login", async (req, res)=>{
    const checkClient = await ClientModel.find(req.body);
    if(checkClient.length>=1){
        let {name, _id} = checkClient[0];
        let payload = {
            _id,
            name,
            token :789789
        }
        console.log("Logged in Successfully");
        return res.send(payload)
    }
    res.send({message: "Wrong credentials"})
})

module.exports = authRouter ;