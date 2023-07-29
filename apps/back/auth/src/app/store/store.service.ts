import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entities/store.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {

  constructor(@InjectModel(Store.name) private storeModel:Model<Store>){}

  create(createStoreDto: CreateStoreDto) {
    return this.storeModel.create(createStoreDto)
  }

  findAll() {
    return this.storeModel.find()
  }

  findOne(id: number) {
    return this.storeModel.findOne({_id:id})
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return this.storeModel.findOneAndUpdate({_id:id},updateStoreDto)
  }

  remove(id: number) {
    return this.storeModel.findOneAndDelete({_id:id})
  }
}
