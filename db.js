const mongoose = require('mongoose');
const Todo = require('./models/Todo')
const User = require('./models/User')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection Successfull');
    } catch(err){
        console.log('MongoDB connection failed', err.message);
    }
}

connectDB();

const addUser = async (data) => {
    try{
        const storeEmail = await User.findOne({email: data.email});
        if(storeEmail===null) {
            const newUser = new User(data);
            await newUser.save();
            return 'User added successfully'
        } else if(storeEmail.email===data.email) {
            return('User already exists');
        }
        } catch(err){
            return err.message;
    }
}

const userLogin = async(data) => {
    try{
        const user = await User.findOne({email: data.email});
        return(user);
    } catch(err){
        return err.message;
    }
}

const addTodo = async (todo) => {
    try{
        const newTodo = new Todo(todo);
        console.log(newTodo);
        await newTodo.save();
        return 'Todo added successfully';
    } catch(err){
        return err.message;
    }
}

const getAllTodo = async(data) => {
    try{
        const todoList = await Todo.find({email: data.email});
        return todoList;
    } catch(err) {
        return err.message;
    }
}

const getTodoById = async(id) => {
    try{
        const todo = await Todo.findOne({_id: id});
        return(todo);
    } catch(err){
        return 'Sorry! cannot find this user_id';
    }
}

const updateTodo = async(data) => {
    try{
        const updateTodo = await Todo.findOne({user: data.user});
        updateTodo.todo = data.todo || updateTodo.todo;
        await updateTodo.save();
        return 'todo updated successfully';
    } catch(err){
        return err.message;
    }
}

const deleteTodo = async(id, user) => {
    try{
        const todo = await Todo.findOne({_id: id});
        if(todo.user===user){
            await Todo.deleteOne({_id: id})
            return('Todo deleted successfully');
        }
    } catch(err){
        return err.message;
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
    addUser,
    userLogin
}