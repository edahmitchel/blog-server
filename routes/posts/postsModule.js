const router = require("express").Router()
const {
    allPosts,
    getSinglePost,deletePost,newPost,updatePost
  } = require("../../controller/posts")
   

    router.get("/:id", getSinglePost)
    router.get("/",allPosts )
    router.post("/create/:id",newPost)
    router.delete("/:id",deletePost)
    // put is to update
    router.put("/:id",updatePost)
    // router.update("/",router);


module.exports = router
