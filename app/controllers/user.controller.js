// const { async } = require("regenerator-runtime/runtime");

// require("regenerator-runtime/runtime");
//User Authentification Class
class User{
  constructor(service,hashPassword,comparePassword){
    this.service = service,
    this.hashPassword = hashPassword,
    this.comparePassword = comparePassword
  }
  //Signup Methode
signup = async(req, res) => {
  const { user } = req;
  const { email } = user;

  const userFind = await this.service.findUser(email);
      if (userFind) {
       return res.status(409).json({
          message: "Email already exist",
        });
      }
       return this.hashPassword(req, res);

};

//Login Function

login = async (req,res) => {
  const { user } = req;
  const { email, password } = user;

  const data = await this.service.findUser(email);
  if(!data){
    return res.status(401).json({
        message: "Invalid credentials"
    })  
  }  
  
 return this.comparePassword(req,res,data);

}
};

module.exports = User;