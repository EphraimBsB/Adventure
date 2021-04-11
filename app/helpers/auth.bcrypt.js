const bcrypt = require("bcrypt");
const model = require("../../database/models");
const jwt = require("jsonwebtoken");
const keys = require("../../utils/keys");


const hashPass = (req, res) => {
    const { body: user } = req;
    const { password } = user;
    bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash(password, salt, (_, hash) => {
         user["password"] = hash;
         model.User.create(user)
         .then(() => {
             res.status(201).json({
               message: "User created succefully",
             });
           })
           .catch((error) => {
             res.status(500).json({
               message: "Something went wrong",
               error
             });
           });
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