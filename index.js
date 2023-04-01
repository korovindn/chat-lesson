const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json()) 

const messages = []

app.get('/sendmessage_get_query', function (req, res) {
  messages.push({
    id: messages.reduce((lastId, msg) => msg.id > lastId ? msg.id : lastId, 0) + 1,
    datetime: new Date().toLocaleString(),
    author: req.query.author,
    text: req.query.text,
  })
  res.json({msg: `Создано сообщение: ${req.query.text} ${req.query.author}`})
})

app.get('/getmessages', function (req, res) {
  res.json(messages)
})

app.post('/sendmessage', function (req, res) {
  messages.push({
    id: messages.reduce((lastId, msg) => msg.id > lastId ? msg.id : lastId, 0) + 1,
    datetime: new Date().toLocaleString(),
    author: req.body.author,
    text: req.body.text,
  })
  res.json({msg: `Создано сообщение: ${req.body.text} ${req.body.author}`})
})


app.listen(5004, function () {
  console.log('CORS-enabled web server listening on port 5004')
})

