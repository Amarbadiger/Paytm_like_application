const userModel = require("../models/userModel");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const Account = require("../models/bankModel");
const userZodSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string().min(8),
});

const signUp = async (req, res) => {
  try {
    const { success } = userZodSchema.safeParse(req.body);

    if (!success) {
      return res
        .status(411)
        .json({ message: "Email already taken / Incorrect inputs" });
    }

    const existingUser = await userModel.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.status(409).json({ message: "user already exits" });
    }

    const newUser = await userModel.create(req.body);
    const userId = newUser._id;
    await Account.create({
      userId: userId,
      balance: 1 + Math.random() * 10000,
    });
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    res.status(200).json({ message: "the user created", token });
  } catch (error) {
    console.error("Error in signing up:", error);
    res.status(500).json("Error in signing up. Please try later");
  }
};

const signinSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

const singin = async (req, res) => {
  try {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
      return res
        .status(411)
        .json({ message: "Email already taken / Incorrect inputs" });
    }
    const user = await userModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      const userId = user._id;
      const token = jwt.sign({ userId }, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ message: "the user is login successfully", token });
    }

    res.status(411).json({ message: "Username or Password May be wrong" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while loggin in",
      error,
    });
  }
};

const updateSchema = z.object({
  password: z.string().min(8).optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
});

const updateProfile = async (req, res) => {
  try {
    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
      return res
        .status(411)
        .json({ message: "Error While Updating the information" });
    }
    await userModel.findByIdAndUpdate(req.userId, req.body, { new: true });

    res.json({
      message: "Updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(411).json({
      message: "Error while updating the information",
    });
  }
};

const getuser = async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await userModel.find({
      $or: [
        {
          firstname: {
            $regex: filter,
          },
          lastname: {
            $regex: filter,
          },
        },
      ],
    });

    if (!users) {
      return res.status(411).json({ message: "not Found" });
    }

    res.json({
      user: users.map((user) => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(411).json({ message: "Error while fetching data" });
  }
};

module.exports = { signUp, singin, updateProfile, getuser };
