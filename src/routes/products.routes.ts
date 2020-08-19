import { Router } from 'express';

import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();
const productsRepository = new ProductsRepository();

productsRouter.get('/', (req, res) => {
  const products = productsRepository.all();

  return res.json(products);
});

productsRouter.post('/', (req, res) => {
  try {
    const { title, amout, price, image, isAvalaibe } = req.body;

    const createProduct = new CreateProductService(productsRepository);

    const product = createProduct.run({
      title,
      amout,
      image,
      price,
      isAvalaibe,
    });

    return res.json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default productsRouter;
