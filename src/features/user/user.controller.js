import { ApplicationError } from "../../errorHandler/applicationError.js";
import userModels from "./user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userRepository from "./user.repository.js";
export default class userController{
    constructor() {
        this.userRepository=new userRepository();
    }

   async signUp(req,res){
    try {
        const {name,email,password,type}=req.body;
        const hashPassword=await bcrypt.hash(password,12);
const newUser=new userModels(
    name,
    email,
hashPassword,
    type
);
const createUser=await this.userRepository.signUp(newUser);
res.status(200).send(createUser);

    } catch (error) {
   throw new ApplicationError("Somthing went wrong",500);
    }
}


async signIn(req, res, next) {
        console.log("SIGNUP HIT");  // 👈 add this
    try {
        const { email, password } = req.body;

        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            return res.status(400).send("Incorrect Credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Incorrect Credentials");
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { 
                expiresIn: '2h' 
            }
        );

        return res.status(200).send({ token });

    } catch (error) {
        next(new ApplicationError("Something went wrong in signin", 500));
    }
}
}

