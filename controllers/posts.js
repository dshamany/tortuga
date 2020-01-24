const Post = require('../models/post');
const Crew = require('../models/crew');

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
    Post.findOne({_id: req.params.id}, (err, post) => {
        if (err) res.status(400).json(err);
        Crew.find({postRef: post._id}, (err, crew) => {
            if (err) res.status(400).json(err);
            res.json({post, crew});
        })
    });
}

function getUserPosts(req, res){
    Post.find({user: req.params.id}, (err, posts) => {
        if(err) res.status(400).json(err);
        res.json(posts);
    });
}

function updatePost(req, res){
    Post.findByIdAndUpdate({
        _id: req.params.id}, 
        req.params.body, 
        (err, updated)=> {
            if (err) res.status(400).json(err);
            res.json(updated);
    });
}

function deletePost(req, res){
    Post.findByIdAndDelete({_id: req.params.id}, (err, deleted) => {
        if(err) res.status(400).json(err);
        Crew.deleteMany({postRef: req.params.id}, (err, deletedCrew) => {
            if(err) res.status(400).json(err);
            res.json({deleted, deletedCrew});
        });
    });
}