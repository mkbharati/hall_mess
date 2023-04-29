const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mynameismanish';

const fetchstuduser = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).json({error:"Please authenticate using valid token"});
    }
    try {
        data = jwt.verify(token, JWT_SECRET);
        req.studuser = data.studuser;
        next();
    } catch (error) {
        res.status(401).json({error:"Please authenticate using valid token"});
    }
}

module.exports = fetchstuduser;