const express = require('express')
const app = express()

app.get('/item', function (req, res, next) {
  res.json({msg: 'Something!'})
})

app.listen(8001, function () {
  console.log('Express eb server listening on port 8001')
})