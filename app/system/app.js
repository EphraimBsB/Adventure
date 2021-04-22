import express from 'express';

import postRoute from '../routes/blog.route';
import userRoute from '../routes/user.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blog', postRoute);
app.use('/blogs', postRoute);
app.use('/users', userRoute);
app.use('*', (req, res) => res.status(404).json({ message: 'not found' }));

export default app;
