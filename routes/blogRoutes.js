const express = require('express')
const Post = require('../models/Post')

const router= express.Router()


router.post("/posts", async (req,res)=>{
    const post = await Post.create(req.body)
    res.json(post)
}) 

router.get("/posts", async (req, res)=>{
    const post = await Post.find()
    res.json(post)
})

router.get("/posts/:id", async(req,res)=>{
    const post = await Post.findById(req.params.id)
    
    console.log(req.params.id)
    res.json(post)
})


router.put("/posts/:id",(req, res)=>{

    res.json({
        message:`Post updated for id/: ${req.params.id}`

    })
})

router.delete("/posts/:id", async (req, res)=>{

   const post= await Post.findByIdAndDelete(req.params.id)

    res.json({
        message: `Post deleted with id : ${req.params.id}`,
        data: post
    })


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