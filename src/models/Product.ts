import { uuid } from 'uuidv4'

class Product {
  id: string;
  title: string;
  amout: number;
  price: number;
  image: string;

  constructor({ title, amout, price, image }: Omit<Product, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.amout = amout;
    this.price = price;
    this.image = image;
  }
}

export default Product
