import { Router } from 'express';
import { uuid } from 'uuidv4';

const productsRouter = Router()

interface Product {
  id: string,
  title: string,
  amout: number,
  price: number,
}

const products: Product[] = []

productsRouter.post('/', (req, res) => {
  const { title, amout, price } = req.body;

  const checkSameTitle = products.find(product =>
    product.title
  )

  if (checkSameTitle) {
    return res.status(400).json({ message: 'product with same title' })
  }

  const product = {
    id: uuid(),
    title,
    amout,
    price,
  }

  products.push(product)

  return res.json(product)
})

export default productsRouter;
