import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private productModel: Model<Store>) {}

  create(createStoreDto: CreateStoreDto): Promise<Store> {
    const createdStore = this.productModel.create(createStoreDto);
    return createdStore;
  }

  findAll() {
    const findedStores = this.productModel.find();
    return findedStores;
  }

  findOne(name: string) {
    const findedStore = this.productModel.findOne({ name: name });
    return findedStore;
  }

  update(name: string, updateStoreDto: UpdateStoreDto) {
    const uptadedStore = this.productModel.findOneAndUpdate(
      { name: name },
      {
        name: updateStoreDto.name,
        products: updateStoreDto.products,
        address: updateStoreDto.address,
      },
      { new: true }
    );

    return uptadedStore;
  }

  remove(name: string) {
    const deletedStore = this.productModel.findOneAndDelete({ name: name });
    return deletedStore;
  }
}
