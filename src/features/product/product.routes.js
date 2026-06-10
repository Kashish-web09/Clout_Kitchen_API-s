import productController from "./product.controller.js";
import { upload } from "../../middleware/fileUpload.middleware.js";
import express from 'express';
import { validationProductRequest } from "../../middleware/validation.middleware.js";

const productroutes=express.Router();
const productsController=new productController();

productroutes.get('/',(req,res,next)=>{
    productsController.getAll(req,res,next)
});

productroutes.post('/',
upload.single('image'),
validationProductRequest,
(req,res,next)=>{
    productsController.addProduct(req,res,next)

}
);
productroutes.get('/filter',(req,res,next)=>{
    productsController.filterProduct(req,res,next)
})
productroutes.get('/:id',(req,res,next)=>{
    productsController.getOneProduct(req,res,next)
});

productroutes.delete('/:id',(req,res,next)=>{
    productsController.deleteProduct(req,res,next)
});
productroutes.post('/rate',(req,res,next)=>{
    productsController.rateProduct(req,res,next)
});
export default productroutes;