const commentModel = require("../models/commentModel");

const getComments = async (req, res) => {
    try {
        const { postId } = req.query;
        const comments = await commentModel.getCommentsByPostId(postId);
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createComment = async (req, res) => {
    try {
        const insertId = await commentModel.createComment(req.body);
        res.status(201).json({ ...req.body, id: insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        await commentModel.updateComment(id, req.body);
        res.json({ ...req.body, id: Number(id) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await commentModel.deleteComment(id);
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getComments, createComment, updateComment, deleteComment };
