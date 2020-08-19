import { v4 as uuidv4 } from 'uuid';

class Product {
  id: string;

  title: string;

  amout: number;

  price: number;

  image: string;

  isAvalaibe: boolean;

  constructor({ title, amout, price, image, isAvalaibe }: Omit<Product, 'id'>) {
    this.id = uuidv4();
    this.title = title;
    this.amout = amout;
    this.price = price;
    this.image = image;
    this.isAvalaibe = isAvalaibe;
  }
}

export default Product;
