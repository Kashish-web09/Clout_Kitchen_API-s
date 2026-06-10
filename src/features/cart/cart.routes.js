import express from 'express';
import cartController from './cart.controller.js';

const cartRoutes=express.Router();
const cartsController=new cartController();

cartRoutes.post('/',(req,res,next)=>{
    cartsController.add(req,res,next)
});
cartRoutes.get('/',(req,res,next)=>{
    cartsController.get(req,res,next)
});
cartRoutes.delete('/:id',(req,res,next)=>{
    cartsController.delete(req,res,next)
});
export default cartRoutes;