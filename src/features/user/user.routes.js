import express from 'express';
import userController from './user.controller.js';

const userRoutes=express.Router();
const usersController=new userController();
userRoutes.post('/signup',(req,res)=>{

    usersController.signUp(req,res)
});
userRoutes.post('/signin',(req,res)=>{
    usersController.signIn(req,res)
});

export default userRoutes;