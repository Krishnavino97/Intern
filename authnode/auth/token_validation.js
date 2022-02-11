const { verify } = require ("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        const token = req.get("authorization");
        if(token){
                token = token.slice(7);
                verify(token, "abc@123", (err, decoded) =>{
                    if(err){
                        res.json({
                            success: 0,
                            message: "Invalid token"
                        });
                    }
                    else{
                        next();
                    }
                })
        }
        else{
            res.json({
                success: 0,
                message: "Access denied! unauthorized user"
            });
        }
    }
};