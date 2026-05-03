const db = require("../config/db");

const getTodosByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM todos WHERE userId = ?",
            [userId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
};

const createTodo = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO todos SET ?", data, (err, result) => {
            if (err) return reject(err);
            resolve(result.insertId);
        });
    });
};

const updateTodo = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE todos SET ? WHERE id = ?", [data, id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM todos WHERE id = ?", [id], (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

module.exports = {
    getTodosByUserId,
    createTodo,
    updateTodo,
    deleteTodo,
};
