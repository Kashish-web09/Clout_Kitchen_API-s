 import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
   import { ApplicationError } from "../../errorHandler/applicationError.js";
class productRepsotory{
    constructor() {
        this.collection="menu"
    }
async getAll(){
    try {
        const db=getDB();
        const collection=db.collection(this.collection);
        return await collection.find().toArray();
    } catch (error) {
        throw new ApplicationError("Somthing went wrong",500)
    }
}

   async addProduct(product){
try{
    const db=getDB();
const collection=db.collection(this.collection);
return await collection.insertOne(product);
}
catch(err){
    throw new ApplicationError("Somthing went wrong",500)
};
}
async getOne(id){
    try {
                const db=getDB();
        const collection=db.collection(this.collection);
return await collection.findOne({
    _id:new ObjectId(id)
});
    } catch (err) {
                throw new ApplicationError("Somthing went wrong",500)

    }
}
      
        async filterProduct(minPrice,maxPrice,isVeg,isavailable){
            try{
                const db=getDB();
                const collection=db.collection(this.collection);
                let filter={};
                if(minPrice || maxPrice){
                    filter.price={};
                
                if(minPrice){
                    filter.price.$gte=Number(minPrice)
                }
                 if(maxPrice){
                    filter.price.$lte=Number(maxPrice)
                }
            }
            if(isVeg!==undefined){
                filter.isVeg=isVeg==='true';
            }
            if(isavailable!==undefined){
                filter.isavailable=isavailable==='true';
            }
            const result=await collection.find(filter).toArray();
            return result;
        }
        catch(err){
            throw new ApplicationError("Somthing went wrong",500)
        }

        }
        async rateProduct(productId,userId,rating){
            try {
                const db=getDB();
                const collection=db.collection(this.collection);
                const result=await collection.updateOne({
                    _id:new ObjectId(productId)
                },
                    {
                        $push:{
                            ratings:{
                                userId:Number(userId),
                                rating:Number(rating)
                            }
                        }
                    }
                );
                return result
            } catch (err) {
                            throw new ApplicationError("Somthing went wrong",500)

            }
        }
        async deleteProductById(id){
            try {
                                const db=getDB();
                const collection=db.collection(this.collection);
const result=await collection.deleteOne({
    _id:new ObjectId(id)
})
return result;
            } catch (error) {
              throw new ApplicationError("Somtehign went wrong",500)  
            }
        }
    }
    export default productRepsotory;