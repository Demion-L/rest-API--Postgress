import db from '../db';

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.qury(
      'INSERT INTO post (title, content, userId) values ($1, $2, $3) RETURNING *',
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  async getPostsByUser(req, res) {
    const id = req.query.id;
    res.json(users.rows);
  }

  async deletePost(req, res) {
    const id = req.params.id;
    const user = await db.query('DELETE FROM post where id = $1', [id]);
    res.json(user.rows[0]);
  }
}

export const postController = new UserController();
