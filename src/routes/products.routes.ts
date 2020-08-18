import { Router } from 'express';
import { uuid } from 'uuidv4'

const productsRouter = Router()

const products = []

productsRouter.post('/', (req, res) => {
  const { title, amout, price } = req.body

  const product = {
    id: uuid(),
    title,
    amout,
    price
  }

  products.push(product)

  return res.json(product)
})

export default productsRouter;
