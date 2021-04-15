
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

    viewAll = (_,res) => {
        const findAll = this.blogService.findAllPost().then(result=>{
            res.status(200).json(result);
        }).catch(err=>{
            res.status(500).json({
                message:'Something went wrong'
            })
        })
    }

    view = (req,res) => {
        const id = req.params.id;
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
};

module.exports = Blog;