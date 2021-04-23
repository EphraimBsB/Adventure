import model from '../models';

class Service {
   createPost = async (post) => {
     const create = await model.Post.create(post);
     return create;
   };

 findAllPost = async () => {
   const findAll = await model.Post.findAll();
   return findAll;
 };

 findPost = async (id) => {
   const findOne = await model.Post.findByPk(id);
   return findOne;
 };

 updatePost = async (updatedPost, obj) => {
   const upDate = await model.Post.update(updatedPost, obj);
   return upDate;
 };

 deletePost = async (obj) => {
   const destroy = await model.Post.destroy(obj);
   return destroy;
 };
}
export default Service;
