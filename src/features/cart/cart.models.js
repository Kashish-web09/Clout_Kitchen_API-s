let cartItems=[];
export default class cartItemModels{
    constructor(id,productId,userId,quantity) {
        this.id=id;
        this.productId=productId;
        this.userId=userId;
        this.quantity=quantity;
    }
}