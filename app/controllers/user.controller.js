
class User{
  constructor(service,hashPassword,comparePassword){
    this.service = service,
    this.hashPassword = hashPassword,
    this.comparePassword = comparePassword
  }

signup = async(req, res) => {
  const { user } = req;
  const { email } = user;

  const userFind = await this.service.findUser(email);
      if (userFind) {
       return res.status(409).json({
          message: "Email already exist",
        });
      }
      const hashuser = await this.hashPassword(user);
      this.service.createUser(hashuser)
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


};

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