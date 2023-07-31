import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const createProduct = this.productModel.create(createProductDto);
    return createProduct;
  }

  findAll() {
    const findedProducts = this.productModel.find();
    return findedProducts;
  }

  findOne(name: string) {
    const findProduct = this.productModel.find({name : name})
    return findProduct
  }

  update(id:string , updateProductDto: UpdateProductDto) {
    const updateProduct = this.productModel.findByIdAndUpdate(id, {
      name: updateProductDto.name,
      description: updateProductDto.description,
      price : updateProductDto.price,
      quantity : updateProductDto.quantity
    })
    return updateProduct
  }

  remove(id: string) {
    const removeProduct = this.productModel.findByIdAndDelete(id)
    return removeProduct;
  }
}
