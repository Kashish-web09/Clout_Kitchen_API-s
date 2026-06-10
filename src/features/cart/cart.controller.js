import cartRepository from "./cart.repository.js";
import cartItemModels from "./cart.models.js";

export default class cartController{
    constructor() {
        this.cartRepository=new cartRepository();
    }
   async add(req,res,next){
try{
    console.log(req.query)
            const {productId,quantity}=req.query;
        const userId=req.userId;
await this.cartRepository.add(productId,userId,quantity);
return res.status(201).json({success:true,msg:"Item added to the cart"});
}  catch(err){
next(err)
}
  }
  async  get(req,res,next){
   try {
        const userId=req.userId;
        const item=await this.cartRepository.get(userId);
        return res.status(200).json(item);
    }catch(err){
        next(err)
    }
}
  async  delete(req,res,next){
   try {
        const userId=req.userId;
        const cartItemId=req.params.cartItemId;
        const deleted=await this.cartRepository.deleteItemFromCart(userId,cartItemId);
        if(deleted==="Item not found"){
            return res.status(404).json({success:false,msg:deleted});
        }
        return res.status(200).json({success:true,msg:"Item deleted successfully!"})
    }catch(err){
        next(err)
    }
}
}