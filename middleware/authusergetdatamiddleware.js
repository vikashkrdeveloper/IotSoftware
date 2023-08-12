const jwt = require('jsonwebtoken');
const database = require('../modules/registerschema');
const authusergetdatamiddleware = async (req, res, next) => {
    try {

        const token =req.cookies.jwttokens;
        const verifyuser=await jwt.verify(token,process.env.SECRET_KEY);
        const rootUser=await database.findOne({_id:verifyuser._id,"tokens.token":token});
        req.token=token;
        req.rootUser=rootUser;
        req.Userid=rootUser._id
        next();




    }
    catch (error) {
        res.status(404).send('User not login');
    }
}
module.exports = authusergetdatamiddleware;