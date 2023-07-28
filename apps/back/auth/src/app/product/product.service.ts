import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    const findedProducts = this.productModel.find();
    return findedProducts;
  }

  findOne(name: string) {
    const findedProduct = this.productModel.findOne({ name: name });
    return findedProduct;
  }

  update(name: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.productModel.findByIdAndUpdate(
      { name: name },
      {
        name: updateProductDto.name,
        price: updateProductDto.price,
        description: updateProductDto.description,
        quantity: updateProductDto.quantity,
      },
      { new: true }
    );

    return updatedProduct;
  }

  remove(name: string) {
    const deletedProduct = this.productModel.findOneAndDelete({ name: name });
    return deletedProduct;
  }
}
