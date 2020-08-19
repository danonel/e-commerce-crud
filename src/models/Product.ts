import { uuid } from 'uuidv4';

class Product {
  id: string;

  title: string;

  amout: number;

  price: number;

  image: string;

  isAvalaibe: boolean;

  constructor({ title, amout, price, image, isAvalaibe }: Omit<Product, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.amout = amout;
    this.price = price;
    this.image = image;
    this.isAvalaibe = isAvalaibe;
  }
}

export default Product;
