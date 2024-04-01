const config = require("./config")

const express = require('express');
const app = express();
const port = config.PORT;

app.get('/:id/rol/:rol', (request, response) => {
  const { id, rol } = request.params
  response.json({
    id,
    name: "Eduardo",
    rol,
    age: 25,
    civil: false
  });
}).listen(port, () => {
  console.log('my port con env')
})
