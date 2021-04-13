
class Blog {
    constructor (blogService) {
        this.blogService = blogService;
    }
//fUNCTION TO CREATE AND SAVE A POST
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

// FUNCTION TO VIEW ALL BLOGS
    viewAll = (_,res) => {
        const findAll = this.blogService.findAllPost().then(result=>{
            res.status(200).json(result);
        }).catch(err=>{
            res.status(500).json({
                message:'Something went wrong'
            })
        })
    }

// FUNCTION TO VIEW ONE BLOG
    view = (req,res) => {
        const id = req.params.id;
        console.log(id);
        const findOne = this.blogService.findPost(id).then(result=>{
            if(result){
                res.status(200).json(result);
            }else{
                res.status(404).json({
                    message: '404 Post Not Found',
                }) 
            }
           }).catch(error=>{
            res.status(500).json({
                message: 'Something went wrong',
            })
        })
    }

//FUNCTION TO UPDATE A POST
update = (req,res) => {
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        description:req.body.description
    }
    const userId = 1;
    const obj = {where:{id:id, userId:userId}};
    const upDate = this.blogService.updatePost(updatedPost,obj).then(result=>{
        res.status(200).json({
            message: "Post updated succefully",
            post:updatedPost
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong",
            err:err
        })
    })
}
};

module.exports = Blog;