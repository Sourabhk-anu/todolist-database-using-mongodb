const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    todo: {
        type: String,
        required: true,
    },
})

const Todo = mongoose.models.todo || mongoose.model('Todo',todoSchema);

module.exports = Todo;