const { Router } = require("express");

const UserModel = require("../models/UserModel");

const usersRouter = Router();

usersRouter.get("/:userId/projectusers", async (req, res) => {
  const userId = req.params.userId;
  const users = await UserModel.find({ userId: userId });
  res.send(users);
});

usersRouter.post("/:userId/projectusers", async (req, res) => {
  const userId = req.params.userId;
  let data = {
    ...req.body,
    userId,
  };
  // console.log(data);
  const singleUser = await new UserModel(data);
  singleUser.save((error, success) => {
    if (error) {
      return res.send("somthing went wrong while posting singleUser");
    }
    const singleUserId = success._id;
    return res.send(success);
  });
  console.log("singleUser Added Successfully");
});

usersRouter.delete("/:userId/projectusers/:_id", async (req, res) => {
  let singleUser;
  try {
    singleUser = await UserModel.findByIdAndDelete(req.params._id);
  } catch (e) {
    console.log(e);
  }
  res.send(singleUser);
});

module.exports = usersRouter;
