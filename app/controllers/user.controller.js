const model = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Signup Function

const signup = (req,res) => {

    model.User.findOne({where:{email:req.body.email}}).then(result =>{
        if(result){
            res.status(409).json({
                message:"Email already exist"
            });
        }else{

            bcrypt.genSalt(10,(error,salt)=>{
        
                bcrypt.hash(req.body.password, salt, (error,hash)=>{
        
                    const user = {
                        username:req.body.username ,
                        email:req.body.email,
                        password:hash
                    }

                    model.User.create(user).then(result => {
                        res.status(201).json({
                            message:"User created succefully"
                        })
                    }).catch(error =>{
                        res.status(500).json({
                            message:"Something went wrong"
                        })
                    });
                });    
            })
        }
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong"
        })
    });
        
}

module.exports = {
    signup:signup,
}
