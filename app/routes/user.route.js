import express from 'express';
import { userController } from '../controllers';
import { registerValidation, loginValidation } from '../middlewares/credentials.validation';

const router = express.Router();
router.post('/login', loginValidation, userController.login);
router.post('/signup', registerValidation, userController.signup);

export default router;
