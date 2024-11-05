import express from 'express'
import usersRoute from './usersRoute.js';
import postsRoute from './postsRoute.js';


const RootRouter = express.Router();

RootRouter.use('/users',usersRoute);

RootRouter.use('/posts',postsRoute)

export default RootRouter;