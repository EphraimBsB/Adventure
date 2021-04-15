
class Blog {
    constructor (blogService) {
        this.blogService = blogService;
    }

save = (req,res)=>{
    const {post} = req;
    this.blogService.createPost(post).then(result=>{
        res.status(201).json({
            message: "Post has been created succcefuly",
            post: post
        })
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error});
        });
}
};

module.exports = Blog;