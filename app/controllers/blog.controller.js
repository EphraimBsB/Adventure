
class Blog {
    constructor (blogService) {
        this.blogService = blogService;
    }

save = (req,res)=>{
    const {post} = req;
    const createPost = this.blogService.createPost(post);
    if(createPost){
        res.status(201).json({
            message: "Post has been created succcefuly",
            post: post
        })
    } (error=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error})
        });
}
};

module.exports = Blog;