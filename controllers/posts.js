const Post = require('../models/post');

module.exports = {
    createPost,
    getPosts,
    getOnePost,
    updatePost,
    deletePost,
}

function createPost(req, res){
    let post = new Post(req.body);
    post.save((err, newPost) => {
        if (err) res.status(400).json(err);
        res.json(JSON.stringify(newPost));
    });
}

function getPosts(req, res){
    let posts = Post.find({}, (err, posts) => {
        if (err) res.status(400).json(err);
        res.json(posts);
    });
}

function getOnePost(req, res){
    
}

function updatePost(req, res){
    
}

function deletePost(req, res){
    
}