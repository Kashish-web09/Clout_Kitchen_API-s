import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";
let users=[];

export default class userModels{
    constructor(name,email,password,type) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }
    static getAll(){
        return users;
    }
}

