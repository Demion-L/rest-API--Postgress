import Router from 'express';

import { userController } from '../controllers/user.controller';

export const router = new Router();

router
  .post('/user', userController.createUser)
  .get('/user', userController.getUsers)
  .get('/user/:id', userController.getOneUser)
  .put('/user/', userController.updateUser)
  .delete('/user/:id', userController.deleteUser);
