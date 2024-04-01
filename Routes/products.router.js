import { Express } from 'express';

const routerProducts = Express.Router();

routerProducts.get('/', (req, res) => {
  res.json({
    id: 1,
    name: "Eduardo",
    rol: 2,
    age: 25,
    civil: false
  });
})

routerProducts.get('/:id', (request, response) => {
    const { id, rol } = request.params
    response.json({
      id,
      name: "Eduardo",
      age: 25,
      civil: false
    });
  })

module.exports = routerProducts;
