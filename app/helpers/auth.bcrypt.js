const bcrypt = require("bcrypt");
const model = require("../../database/models");
const jwt = require("jsonwebtoken");
const keys = require("../../utils/keys");
const resolveHashPass = (hash,user) => {
user["password"] = hash;
return user;
}

const hashPass = (user) => {
    const { password } = user;
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (error, salt) => {
        if (error) return reject(error);
        bcrypt.hash(password, salt, (error, hash) => error ? reject(error) : resolve(resolveHashPass(hash,user))
        );
      }); 
    });
  }

const comparePass = (req, res, data) => {
    const { body: user } = req;
    const { password } = user;
    bcrypt.compare(password, data.password, (error,result)=>{
        if(result){
            const token = jwt.sign({
                email: data.email,
                userId: data.id
            }, keys.JWT, (err,token)=>{
                res.status(200).json({
                    message: "Authentification Successfuly",
                    token:token
                })  
            })
        }else{
            res.status(401).json({
                message: "Invalid credentials",
                error:error
            })  
        }
    })
}
module.exports = {
    hashPass,
    comparePass
};