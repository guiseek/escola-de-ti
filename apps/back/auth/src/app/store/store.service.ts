import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<Store>,
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const allExistingProducts = await this.productModel.find({
      _id: { $in: createStoreDto.products },
    });
    const createdStore = new this.storeModel({
      ...createStoreDto,
      products: allExistingProducts,
    });
    return createdStore.save();
  }

  findAll(): Promise<Store[] | undefined> {
    return this.storeModel.find();
  }

  findOne(id: string): Promise<Store | null> {
    return this.storeModel.findById(id);
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storeModel.findByIdAndUpdate(
      id,
      {
        name: updateStoreDto.name,
        address: updateStoreDto.address,
        products: updateStoreDto.products
      },
      { new: true }
    );
  }

  remove(id: string) {
    return this.storeModel.findByIdAndDelete(id);
  }
}
