const isAuthenticated = (req,res,next) => {
    if (req.session.user === undefined){
        return res.status(401).json("You do not have an access. ");

    }
    next();
}


module.exports=isAuthenticated;