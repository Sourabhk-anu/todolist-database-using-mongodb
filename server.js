const express = require('express');
const app = express();
const {verifyToken} = require('./auth')
const userRoutes = require('./router/userRoutes')
const todoRoutes = require('./router/todoRoutes')

app.use(express.json());

app.use(express.static(__dirname + '/public'))
app.use('/todo', verifyToken, todoRoutes);
app.use('/user', userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})