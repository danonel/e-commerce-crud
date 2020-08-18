import Product from '../models/Product'
import ProductRepository from '../repositories/ProductsRepository'

interface Request {
  title: string;
  amout: number;
  price: number;
  image: string;
}

class CreateProductService {
  private productsRepository: ProductRepository

  constructor(productsRepository: ProductRepository) {
    this.productsRepository = productsRepository
  }

  public run({ title, amout, image, price }: Request): Product {
    const isSameTitle = this.productsRepository.findByTitle(title)

    if (isSameTitle) {
      throw Error('product with same title')
    }
    const product = this.productsRepository.create({ title, amout, price, image })

    return product
  }
}

export default CreateProductService
