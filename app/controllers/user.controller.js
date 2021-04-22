/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
class User {
  constructor(service, hashPassword, comparePassword, token) {
    this.service = service,
    this.hashPassword = hashPassword,
    this.comparePassword = comparePassword,
    this.token = token;
  }

  // eslint-disable-next-line consistent-return
  signup = async (req, res) => {
    const { user } = req;
    const { email } = user;

    await this.service.findUser(email).then((userFind) => {
      if (userFind) {
        return res.status(409).json({
          message: 'Email already exist',
        });
      }
      this.hashPassword(user).then((hashuser) => {
        this.service.createUser(hashuser).then((data) => {
          this.token(res, data);
        }).catch((err) => {
          res.status(500).json({
            message: 'Vaild to create User',
            err,
          });
        });
      }).catch((err) => {
        res.status(500).json({
          message: 'Vaild to Hash Password',
          err,
        });
      });
    }).catch((error) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: error.name,
      });
    });
  };

login = async (req, res) => {
  const { user } = req;
  const { username } = user;

  await this.service.findUser(username).then((data) => {
    if (!data) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }
    return this.comparePassword(req, res, data);
  }).catch((err) => {
    res.status(500).json({
      message: 'Something went',
      error: err.name,
    });
  });
}
}

export default User;
