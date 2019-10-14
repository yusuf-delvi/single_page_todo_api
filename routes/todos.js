const
  express = require('express'),
  router = express.Router(),
  helper = require('../helpers/todos');

router.route('/')
  .get(helper.showTodos)
  .post(helper.createTodo)

router.route('/:todoId')
  .get(helper.showTodo)
  .put(helper.updateTodo)
  .delete(helper.deleteTodo)

module.exports = router;