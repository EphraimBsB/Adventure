const firstRoute = (req,res)=>{
    res.send("This is the first route");
}
const secondRoute = (req,res) =>{
    res.send("This the second route on our blog");
}

module.exports = {
    firstRoute:firstRoute,
    secondRoute:secondRoute
}