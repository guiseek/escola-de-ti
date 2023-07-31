import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entities/store.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) {}

  create(createStoreDto: CreateStoreDto) {
    const createStore = this.storeModel.create(createStoreDto)
    return createStore
  }

  findAll() {
    const findAllStore = this.storeModel.find();
    return findAllStore
  }

  findOne(id: string) {
    const findOneStore = this.storeModel.findById(id);
    return findOneStore
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    const updateStore = this.storeModel.findByIdAndUpdate(id, {
      name: updateStoreDto.name,
      products: updateStoreDto.product_id,
      adress: updateStoreDto.adress
    })
    return updateStore
  }

  remove(id: string) {
    const removeStore = this.storeModel.findByIdAndDelete(id);
    return removeStore
  }
}
