import Product from "../models/productMoudel.js";
import HttpError from "../models/http-error.js";

export const getProducts = async (req , res , next)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
        console.log('Product has been fetched!!'.green.inverse);
    }catch (e) {
        console.log(`${e.message}`.red.inverse)
        const error  = new HttpError(e , 500);
        return next(error);
    }
};

export  const getProduct = async (req , res , next) => {
    const productId = req.params.id;
    let product;
    try {
         product = await Product.findById(productId);
         if(!product){
             const error = new HttpError("لا يوجد منتج" , 404);
             return next(error);
         }
        console.log('product found!'.green.inverse)
        return res.status(200).json(product);


    }catch (e) {
        if(!product){
            console.log("product not found!".red.inverse);
            const error = new HttpError("لا يوجد منتج" , 404);
            return next(error);
        }
        console.log(e.message.red.inverse);
        const error = new HttpError("حصل خطأ ما , ربما لا يوجد منتج" , 500);
        return next(error);
    }


};

