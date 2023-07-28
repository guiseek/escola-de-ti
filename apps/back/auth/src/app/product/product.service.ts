import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>){}

  create(createProductDto: CreateProductDto) {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    const listedProducts = this.productModel.find();
    return listedProducts;
  }

  findOne(id: string) {
    const foundProduct = this.productModel.findOne({id});
    return foundProduct;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.productModel.findByIdAndUpdate(id, updateProductDto);
    return updatedProduct;
  }

  remove(id: string) {
    const deletedProduct = this.productModel.findByIdAndRemove(id);
    return deletedProduct;
  }
}
