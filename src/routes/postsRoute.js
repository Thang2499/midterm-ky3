import express from 'express';
import usersController from '../controllers/usersController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import postsController from '../controllers/postsController.js';

const postsRoute = express.Router();

postsRoute.post('/create',authMiddleware.checkCreatePost,postsController.createPost);

postsRoute.put('/update/:id',authMiddleware.checkUpdatePosts,postsController.updatePost)

export default postsRoute;