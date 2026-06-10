import { getDB } from '../../config/mongodb.js';
import userModels from '../user/user.model.js';
import { ApplicationError } from '../../errorHandler/applicationError.js';
let menu=[];
export default class productModels{
    constructor(
id,
name,
desc,
price,
image,
isVeg,
isavailable
    ) {
        this._id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.image=image;
        this.isVeg=isVeg;
        this.isavailable=isavailable
    }

}
