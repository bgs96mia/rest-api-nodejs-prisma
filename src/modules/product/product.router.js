import express from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  findProducts,
  updateProducts,
} from "./product.controller.js";

export const productRouter = express.Router();

productRouter.get("/", findProducts);
productRouter.get("/:id", findProduct);
productRouter.post("/", createProduct);
productRouter.patch("/:id", updateProducts);
productRouter.delete("/:id", deleteProduct);
