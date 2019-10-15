const
  mongoose = require('mongoose'),
  mongoUrl = process.env.DB_URL || 'mongodb://localhost:27017/todo_api';

mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.Promise = Promise;
mongoose.set('debug', true)

module.exports.Todo = require('./todos')
