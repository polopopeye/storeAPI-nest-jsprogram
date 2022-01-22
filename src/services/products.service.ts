import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterUID = 2;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 123123,
      currency: 'USD',
      img: 'https://test.com/img.jpg',
    },
  ];

  findAll() {
    return this.products;
  }
  findOne(idProduct: number) {
    const product = this.products.find(({ id }) => id == idProduct);

    if (!product)
      throw new NotFoundException('Product:' + idProduct + ' not found');

    return product;
  }
  create(payload: any) {
    this.counterUID++;
    const newProduct = {
      id: this.counterUID,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    console.log(product);

    if (product) {
      const productFound = this.products.findIndex((item) => item.id == id);

      this.products[productFound] = {
        ...product,
        ...payload,
      };

      return this.products[productFound];
    }

    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      const productFound = this.products.findIndex((item) => item.id == id);
      this.products.splice(productFound, 1);
      return true;
    }

    return null;
  }
}
