import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel:Model<Product>){}

  create(createProductDto: CreateProductDto) {
    console.log(createProductDto)
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.find()
  }

  findOne(id: number) {
    return this.productModel.findOne({_id:id})
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.findOneAndUpdate({_id:id},updateProductDto)
  }

  remove(id: number) {
    return this.productModel.findOneAndDelete({_id:id})
  }
}
