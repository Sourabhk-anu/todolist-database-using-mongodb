const {
    addTodo,
    getAllTodo,
    getTodoById,
    updateTodo,
    deleteTodo
} = require('../db')

const allTodo = async (req, res) => {
    try{
        const todos = await getAllTodo(req.body);
        res.send(todos);
    } catch(err){
        res.send(err.message);
    }
}

const todoById = async (req, res) => {
        const todo = await getTodoById(req.params.id);
        res.send(todo);
}

const addingTodo = async (req, res) => {
    const data = {
        user: req.user._id,
        todo: req.body.todo
    }
    const addNewTodo = await addTodo(data)
    res.send(addNewTodo);
}

const updatingTodo = async (req, res) => {
    const data = {
        user: req.user._id,
        todo: req.body.todo
    }
    const updateTodoList = await updateTodo(data);
    res.send(updateTodoList);
}

const deletingTodo = async (req, res) => {
        const todo = await deleteTodo(req.params.id, req.user._id);
        res.send(todo);
}

module.exports = {
    allTodo,
    todoById,
    addingTodo,
    updatingTodo,
    deletingTodo
}