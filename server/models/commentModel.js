const db = require("../config/db");

const getCommentsByPostId = (postId) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM comments WHERE postId = ?",
            [postId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

const createComment = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO comments SET ?", data, (err, result) => {
            if (err) return reject(err);
            resolve(result.insertId);
        });
    });
};

const updateComment = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE comments SET ? WHERE id = ?", [data, id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

const deleteComment = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM comments WHERE id = ?", [id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

module.exports = { getCommentsByPostId, createComment, updateComment, deleteComment };
