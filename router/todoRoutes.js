const express = require('express')
const router = express.Router()

const {allTodo, todoById, addingTodo, updatingTodo, deletingTodo} = require('../controllers/todoController')

router.get('/', (req, res) => {
    res.send('Node mongo API running');
})

router.get('/all', allTodo)

router.get('/:id', todoById)

router.post('/add', addingTodo)

router.put('/update', updatingTodo)

router.delete('/delete/:id', deletingTodo)

module.exports = router;