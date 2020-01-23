const Post = require('../models/post');

module.exports = {
    createPost,
    getPosts,
    getUserPosts,
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
    Post.find({}, (err, posts) => {
        if (err) res.status(400).json(err);
        res.json(posts);
    });
}

function getOnePost(req, res){
    Post.find(req.params.id, (err, post) => {
        if (err) res.status(400).json(err);
        res.json(post);
    });
}

function getUserPosts(req, res){
    console.log('Get User Posts');
    Post.find({user: req.params.id}, (err, posts) => {
        if(err) res.status(400).json(err);
        res.json(posts);
    });
}

function updatePost(req, res){
    
}

function deletePost(req, res){
    
}