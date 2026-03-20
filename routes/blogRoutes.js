const express = require('express')
const Post = require('../models/Post')

const router= express.Router()


router.post("/posts", async (req,res)=>{
    const post = await Post.create(req.body)
    res.json(post)
//     const newPost= {
//         id: Date.now(),
//         title: req.body.title
//     }
// blogPosts.push(newPost)
//     res.json({
// message:"Post added",
// data: blogPosts
//     })
}) 

router.get("/posts", async (req, res)=>{
    const post = await Post.find()
    res.json(post)
})

router.get("/posts/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    res.json({
        message:`post according to the id/:${id}`
    })
})



router.put("/posts/:id",(req, res)=>{

    res.json({
        message:`Post updated for id/: ${req.params.id}`

    })
})

router.delete("/posts/:id", async (req, res)=>{

    await Post.findByIdAndDelete(req.params.id)

    res.json({
        message: `Post deleted with id : ${req.params.id}`
    })

    // const id=req.params.id
    // blogPosts = blogPosts.filter((post)=>post.id!=id)
    // res.json({
    //     message:`Post Deleted with id : ${id}`,
    //     data: blogPosts
    // })
})

//jwt fake authentication
router.post("/login",(req,res)=>{
    const {username, password}= req.body;

    if(username === "admin" && password === "1234"){
        res.json({
            token:"Fake-jwt-token-12345"
        })
        } else {
            res.json({
                message: "Invalid credidentials"
            })
    }
})


module.exports= router