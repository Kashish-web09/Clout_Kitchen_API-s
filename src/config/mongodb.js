import { MongoClient } from "mongodb";

let clients;
export const connectMongoDB=()=>{
    MongoClient.connect(process.env.DB_URL)
    .then((clientInstance)=>{
        clients=clientInstance
console.log("MongoDb connected to API")
    })
    .catch((error)=>{
        console.log(error)
    });
}
export const getDB=()=>{
return clients.db();
}
