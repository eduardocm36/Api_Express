import { routerProducts } from "./products.router";

function routerApi(app){
  app.use('/products', routerProducts)
}