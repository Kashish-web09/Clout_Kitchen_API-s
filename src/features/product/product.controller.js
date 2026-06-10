import productModels from "./product.models.js";
import productRepsotory from "./product.repository.js";
export default class productController{
constructor() {
    this.productRepsotory=new productRepsotory();
}
async getAll(req,res,next){
try{
        const menu=await this.productRepsotory.getAll();
res.status(200).json(menu);
}catch(err){
    next(err)
}
}
async addProduct(req,res,next){
try{
    const {name,desc,price,isVeg,isavailable}=req.body;
const newProduct=new productModels(
    null,
    name,
    desc,
    parseFloat(price),
    req.file ?req.file.filename :null,
    isVeg,
    isavailable

);
const result=await this.productRepsotory.addProduct(newProduct);
res.status(201).json(result);
}catch(err){
    next(err)
}
}
async getOneProduct(req,res,next){
try{
    const id=req.params.id;
const product=await this.productRepsotory.getOne(id);
if(!product){
    res.status(400).send("Product not found");

}
return res.status(200).send(product);
}catch(err){
    next(err)
}
}
async filterProduct(req,res,next){
try{
    const {minPrice,maxPrice,isVeg,isavailable}=req.query;
    const result=await this.productRepsotory.filterProduct(minPrice,maxPrice,isVeg,isavailable);
res.status(200).json(result)
}catch(err){
    next(err)
}
}
async deleteProduct(req,res,next){
try{
    const result=await this.productRepsotory.deleteProductById(req.params.id);

   return  res.status(200).json({
    success:true,
    message:"Product deleted successfully"
   })
}catch(err){
    next(err)
}
};
async rateProduct(req,res,next){

    try{
        const {productId,userId,rating}=req.query;
        await this.productRepsotory.rateProduct(
            userId,
            productId,
            rating
        );
        res.status(200).json({
            success:true,
            menubar:"Rating added successfully"
        })
    }
    catch(err){
            next(err);

    }
    
}

}