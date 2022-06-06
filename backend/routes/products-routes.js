import express from "express";
import {getProduct, getProducts} from "../controllers/products-controller.js";
const router = express.Router();

//@desc Fetch All Products
//@route Get /api/products
//@access Public
router.get('/' , getProducts );

//@desc Fetch Single Product
//@route Get /api/products/:id
//@access Public
router.get('/:id', getProduct  );


export default router;