import jwt from 'jsonwebtoken';


const jwtAuth=(req,res,next)=>{
const authHeaders=req.headers['authorization'];
if(!authHeaders){
    return res.status(401).json({success:false,error:"Unauthorized"});
}
console.log(authHeaders);
const token=authHeaders.split(' ')[1];
if(!token){
        return res.status(401).json({success:false,error:"Unauthorized"});

}
try {
    const payload=jwt.verify(
        token,
    process.env.JWT_SECRET
    );
    console.log(payload);
    req.userId=payload.userId;
req.user=payload;
    next();

} catch (error) {
    return res.status(401).json({success:false,error:"Unauthorized"})
}
}
export default jwtAuth;