import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";


class userRepository{
    constructor() {
        this.collection="users";
    }
    async signUp(newUser){
        try{
            const db=getDB();
            const collection=db.collection(this.collection);
const result = await collection.insertOne(newUser);

            return { ...newUser, _id: result.insertedId };
        }catch(error){
            throw new ApplicationError("Something went wrong with the database",500)
        }
    }
   async  signIn(email,password){
        try {
            const db=getDB();
            const collection=db.collection(this.collection);
            return await collection.findOne({email,password})
        } catch (error) {
                        throw new ApplicationError("Something went wrong with the database",500)

        }
    }
async findByEmail(email){
try{  
      const db=getDB();
            const collection=db.collection(this.collection);
    return await collection.findOne({email})
}catch(err){
                throw new ApplicationError("Database error while finding user",500);

}
}
}
export default userRepository;