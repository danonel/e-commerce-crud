import Product from '../models/Product';

interface CreateProductDTO {
  title: string;
  amout: number;
  price: number;
  image: string;
  isAvalaibe: boolean;
}

class ProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  public all(): Product[] {
    return this.products;
  }

  public findByTitle(title: string): Product | null {
    const isSameDate = this.products.find(product => product.title === title);

    return isSameDate || null;
  }

  public create({
    title,
    amout,
    price,
    image,
    isAvalaibe,
  }: CreateProductDTO): Product {
    const product = new Product({ title, price, amout, image, isAvalaibe });

    this.products.push(product);

    return product;
  }
}

export default ProductsRepository;
