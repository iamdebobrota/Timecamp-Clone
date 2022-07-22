
const {Router} = require('express');

const UserModel = require("../models/UserModel");

const usersRouter = Router();

usersRouter.get("/:userId/users", async (req, res) => {
    const userId = req.params.userId;
    const users = await UserModel.find({userId: userId});
    res.send(users)
})


usersRouter.post("/:userId/users", async (req, res)=>{
    const userId = req.params.userId;
    let  data = {
        ...req.body,
        userId
    };
    // console.log(data);
    const singleUser = await new UserModel(data);
    singleUser.save((error, success)=>{
        if(error){
           return  res.send("somthing went wrong while posting singleUser")
        }
        const singleUserId = success._id;
        return res.send(success)
    })
    console.log("singleUser Added Successfully")
})

usersRouter.patch("/:userId/users/:_id", async(req,res, next)=>{
    const singleUser = await UserModel.findByIdAndUpdate(req.params._id, req.body ,{
        update : true 
    } )
    if(!singleUser){
        return next(new ErrorResponse(`No singleUser with that id of ${req.params._id}`))
    }
    res.status(200).json({ success: true, data: singleUser })
})

usersRouter.delete("/:userId/users/:_id", async(req,res)=>{
    let singleUser ;
    try{
        singleUser = await UserModel.findByIdAndDelete(req.params._id)
    }catch(e){
        console.log(e)
    }
    res.send(singleUser)
})

module.exports = usersRouter