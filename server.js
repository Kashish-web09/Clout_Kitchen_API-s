import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import swagger from 'swagger-ui-express';
import jwtAuth from './src/middleware/jwt.middleware.js';
import cors from 'cors';
import productroutes from './src/features/product/product.routes.js';
import userRoutes from './src/features/user/user.routes.js';
import cartRoutes from './src/features/cart/cart.routes.js';
import apiDocs from './swagger.json' with{type:'json'};
import loggerMiddleware from './src/middleware/logger.middleware.js';
import { ApplicationError } from './src/errorHandler/applicationError.js';
import {connectMongoDB} from './src/config/mongodb.js';
const server=express();

let corsOptions={
origin:'http://127.0.0.1:5500'
};
server.use(cors(corsOptions));
server.use(express.json());
server.use( "/api-docs",swagger.serve,swagger.setup(apiDocs));
server.use(loggerMiddleware)
server.get('/',(req,res)=>{
    res.status(200).send("Welcome to cloudKitchen api's")
});

server.use('/api/menu',jwtAuth,productroutes);
server.use('/api/users',userRoutes)
server.use('/api/cart',jwtAuth,cartRoutes);
server.use((req,res)=>{
    res.status(404).send(`
        <center>
        <h1>404 Error Found</h1>
        <p>Please use this url: </p>
        <a href:"http://localhost:1400/api-docs">
        API Documentation </a>
        </center>
        `)
    });
    server.use((err,req,res,next)=>{
        if(err instanceof ApplicationError){
            res.status(err.statusCode).send(err.message);
        }
        res.status(500).send('Oops! Somthing went wrong....Please try again after some time!');
    });
    const PORT=process.env.PORT || 1400
server.listen(PORT,()=>{
    connectMongoDB();
    console.log(`Server running at port ${PORT}`)
});