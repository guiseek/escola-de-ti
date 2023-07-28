import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  findAll(): Promise<Product[] | undefined> {
    return this.productModel.find();
  }

  findOne(name: string): Promise<Product | null> {
    return this.productModel.findOne({ name: name });
  }

  update(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<UpdateProductDto | null> {
    return this.productModel.findByIdAndUpdate(
      id,
      {
        name: updateProductDto.name,
        description: updateProductDto.description,
        price: updateProductDto.price,
        quantity: updateProductDto.quantity,
      },
      { new: true }
    );
  }

  delete(id: string): Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id);
  }
}
