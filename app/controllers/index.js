import User from './user.controller';
import Service from '../../database/acid/user.services';
import { hashPass, comparePass, userToken } from '../helpers/auth.bcrypt';
import Blog from './blog.controller';
import BlogServer from '../../database/acid/blog.services';

const blogService = new BlogServer();
const service = new Service();
export const userController = new User(service, hashPass, comparePass, userToken);
export const blogController = new Blog(blogService);
