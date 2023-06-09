import express from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

export const userRouter = express.Router();

userRouter.get("/", findUsers);
userRouter.get("/:id", findUser);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
