const
  express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  bodyParser = require('body-parser'),
  todoRoute = require('./routes/todos');

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.use('/api/todos', todoRoute);

app.listen(port, () => console.log(`Server started at PORT: ${port}`));