const postModel = require("../models/postModel");

const getPosts = async (req, res) => {
    try {
        const { userId, id } = req.query;
        if (id) {
            const posts = await postModel.getPostById(id);
            return res.json(posts);
        }
        const posts = await postModel.getPostsByUserId(userId);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const insertId = await postModel.createPost(req.body);
        res.status(201).json({ ...req.body, id: insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        await postModel.updatePost(id, req.body);
        res.json({ ...req.body, id: Number(id) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await postModel.deletePost(id);
        res.json({ message: "Post deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
