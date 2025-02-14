const express = require("express");
const passport = require("passport");
const router = express.Router();

router.use("/", require("./swagger"));

router.use("/products", require("./products"));
router.use("/supplier", require("./supplier"));
router.get("/login",passport.authenticate("github"),(req,res) => {});

router.get("/logout",(req,res,next)=>{
  req.logOut((err)=>{
    if (err){
      return next(err);
    }
    res.redirect("/");
  })
})

module.exports = router;
