import express from 'express';
import usersController from '../controllers/usersController.js';
import checkMiddleware from '../middleware/authMiddleware.js';

const usersRoute = express.Router();

usersRoute.post('/register',usersController.register);

usersRoute.post('/login',usersController.login)

export default usersRoute