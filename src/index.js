import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./modules/user/user.router.js";
import { productRouter } from "./modules/product/product.router.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
