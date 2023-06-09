import * as productService from "./product.service.js";

export const findProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const findProduct = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const product = await productService.get(id);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await productService.create(product);
    return res.status(201).json(newProduct);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const updateProducts = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const product = req.body;
    const newProduct = await productService.update(id, product);
    return res.status(200).json(newProduct);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await productService.deleteProductById(id);
    return res.status(200).json("Product successfully deleted");
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
