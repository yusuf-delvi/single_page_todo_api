const
  db = require('../models');

exports.showTodos = (req, res) => {
  db.Todo.find()
    .then((foundTodos) => res.json(foundTodos))
    .catch((err) => res.send(err))
}

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then((createdTodo) => res.status(201).json(createdTodo))
    .catch((err) => res.send(err))
}

exports.showTodo = (req, res) => {
  db.Todo.findOne({
      _id: req.params.todoId
    })
    .then((foundTodo) => res.json(foundTodo))
    .catch((err) => res.send(err))
}

exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, {
      new: true
    })
    .then((updatedTodo) => res.json(updatedTodo))
    .catch((err) => res.send(err))
}

exports.deleteTodo = (req, res) => {
  db.Todo.findByIdAndDelete(req.params.todoId)
    .then(() => res.json({
      message: 'Todo deleted!'
    }))
    .catch((err) => res.send(err))
}

module.exports = exports;