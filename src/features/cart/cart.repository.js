import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";
class cartRepository{
constructor(){
    this.collection="cartItems";
}
async add(productId,userId,quantity){
try{
            console.log("Repository:", productId, userId, quantity);

    const db=getDB();
const collection=db.collection(this.collection);
await collection.insertOne({
    productId:productId,
    userId:userId,
    quantity:quantity
});
return {success:true};

}
catch(err){
    throw new ApplicationError("Something went wrong",500)
}
}
async get(userId){
try{
    const db=getDB();
const collection=db.collection(this.collection);
const items=await collection.find({
    userId:userId
}).toArray();
return items;
}
catch(err){
    throw new ApplicationError("Something went wrong",500)
}
}
async deleteItemFromCart(userId, cartItemId){
try{
    const db=getDB();
const collection=db.collection(this.collection);
const result=await collection.deleteOne({
    _id:new ObjectId(cartItemId),
userId:new ObjectId(userId)
})
return result;

}
catch(err){
    throw new ApplicationError("Something went wrong",500)
}
}


}
export default cartRepository;