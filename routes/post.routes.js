import Router from 'express';
export const router = new Router();

import { postController } from '../controllers/post.controller';


router
  .post('/post', postController.createPost)
  .get('/post', postController.getPostsByUser)
  .delete('/post/:id', postController.deletePost);