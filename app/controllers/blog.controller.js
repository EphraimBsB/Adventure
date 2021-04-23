// Class for CRUD implementation
class Blog {
  constructor(blogService) {
    this.blogService = blogService;
  }

    save = (req, res) => {
      const { post } = req;
      this.blogService.createPost(post).then(() => {
        res.status(201).json({
          message: 'Post has been created succcefuly',
          post,
        });
      }).catch((error) => {
        res.status(500).json({
          message: 'Something went wrong',
          error: error.name,
        });
      });
    }

    viewAll = (_, res) => {
      this.blogService.findAllPost().then((result) => {
        res.status(200).json(result);
      }).catch((error) => {
        res.status(500).json({
          message: 'Something went wrong',
          error: error.name,
        });
      });
    }

    view = (req, res) => {
      const { id } = req.params;
      this.blogService.findPost(id)
        .then((result) => {
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(404).json({
              message: 'Post Not Found',
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            message: 'Something went wrong',
            error: error.name,
          });
        });
    }

update = (req, res) => {
  const { id } = req.params;
  const updatedPost = {
    title: req.body.title,
    description: req.body.description,
  };
  const userId = 1;
  const obj = { where: { id, userId } };
  this.blogService.updatePost(updatedPost, obj)
    .then((result) => {
      if (result === 1) {
        res.status(200).json({
          message: 'Post updated succefully',
          post: updatedPost,
        });
      } else {
        res.status(404).json({
          message: 'Post Not Found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err.name,
      });
    });
}

destroy = (req, res) => {
  const { id } = req.params;
  const userId = 1;
  const obj = { where: { id, userId } };
  this.blogService.deletePost(obj)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: 'Post Deleted succefully',
        });
      } else {
        res.status(404).json({
          message: 'Post Not Found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err.name,
      });
    });
}
}

export default Blog;
