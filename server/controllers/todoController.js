const todoModel = require("../models/todoModel");

const getTodos = async (req, res) => {
    try {
        const { userId } = req.query;
        const todos = await todoModel.getTodosByUserId(userId);
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const insertId = await todoModel.createTodo(req.body);
        res.status(201).json({ ...req.body, id: insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoModel.updateTodo(id, req.body);
        res.json({ ...req.body, id: Number(id) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoModel.deleteTodo(id);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
