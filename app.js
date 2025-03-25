import { env } from "./config";

const express = require('express');
const app = express();
const port = env.PORT;

app.get('/:id/rol/:rol', (request, response) => {
  const { id, rol } = request.params
  response.json({
    id,
    name: "JOse",
    rol,
    age: 25,
    civil: false
  });
}).listen(port, () => {
})
