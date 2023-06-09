import * as userService from "./user.service.js";

export const findUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const findUser = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await userService.get(id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json("User not Found");
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await userService.create(user);
    return res.status(201).json(newUser);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = req.body;
    const newUser = await userService.update(id, user);
    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await userService.deleteUserById(id);
    return res.status(200).json("User successfully deleteted");
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
