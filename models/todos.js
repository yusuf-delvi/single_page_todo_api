const
  mongoose = require('mongoose'),

  todoSchema = new mongoose.Schema({
    name: {
      type: String,
      required: 'Name input cannot be empty'
    },
    completed: {
      type: Boolean,
      default: false
    },
    created_date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Todo', todoSchema)