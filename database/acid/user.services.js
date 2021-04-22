import model from '../models';

class Service {
  createUser = async (user) => {
    const create = await model.User.create(user);
    return create;
  };

findUser = async (username) => {
  const userFind = await model.User.findOne({ where: { username } });
  return userFind;
};
}
export default Service;
