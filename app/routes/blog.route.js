import express from 'express';
import { blogController } from '../controllers/index';
import checkAuth from '../middlewares/check.auth';
import postValidation from '../middlewares/post.validation';

const route = express.Router();
route.post('/', postValidation, checkAuth, blogController.save);
route.get('/', blogController.viewAll);
route.get('/:id', blogController.view);
route.patch('/:id', postValidation, checkAuth, blogController.update);
route.delete('/:id', checkAuth, blogController.destroy);

export default route;
