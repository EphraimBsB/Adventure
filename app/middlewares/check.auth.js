/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import { JWT } from '../../utils/keys';

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT);
    req.userData = decodedToken;
    next();
  } catch (e) {
    return res.status(401).json({
      message: 'Invalid or Expired Token',
      error: e,
    });
  }
};

export default checkAuth;
