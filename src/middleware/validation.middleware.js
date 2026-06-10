import { body,validationResult } from "express-validator";

export const validationProductRequest=async(req,res,next)=>{
    const rules=[
        body('name').notEmpty().withMessage('Name is required'),
        body('desc').notEmpty().withMessage('Description is required'),
        body('price').isFloat().withMessage("Price should be greater than 0"),
        body('isVeg').isBoolean().withMessage('isVeg must be true or false'),
        body('isavailable').isBoolean().withMessage('isavailable must be true or false')
    ];
    await Promise.all(
rules.map(rule=>rule.run(req))   
 );
 const errors=validationResult(req);
 if(!errors.isEmpty()){
    return res.status(400).json({
        success:false,
        errors:errors.array()
    });
 }
 next();
}