const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');



// Auth Middleware
const authcheck = async (req, res, next) => {
    
    
    if( req.headers.authorization ){
        
        try{
            // Get Token
            const token = req.headers.authorization.split(' ')[1];

            // Verify Token
            const encoded_user = jwt.verify(token, process.env.JWT_SECRET);

            // Get LogIn User
            req.user = await Admin.findById(encoded_user.id);

            next();
        }catch(error){
            console.log(error);
        }

        next();
    }else{
        res.json({
            message : "Token not found"
        });
    }
}




// Export Authcheck
module.exports = {
    authcheck
}