const db = require("../config/db");

const getPostsByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM posts WHERE userId = ?",
            [userId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

const getPostById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM posts WHERE id = ?",
            [id],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

const createPost = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO posts SET ?", data, (err, result) => {
            if (err) return reject(err);
            resolve(result.insertId);
        });
    });
};

const updatePost = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE posts SET ? WHERE id = ?", [data, id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

module.exports = { getPostsByUserId, getPostById, createPost, updatePost, deletePost };
