
class Blog {
    constructor (service) {
        this.service = service;
    }
//fUNCTION TO CREATE AND SAVE A POST
save = (req,res)=>{
    const {post} = req;
    console.log(post);
//    const {title,userId,description} = post;
    const createPost = this.service.createPost(post);
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