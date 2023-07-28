import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from './entities/store.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<Store>, @InjectModel(Product.name) private productModel: Model<Product>){}



  create(createStoreDto: CreateStoreDto) {
    const createdStore = this.storeModel.create(createStoreDto);
    return createdStore;
  }
  async linkProduct(productBody: any){

  }

  findAll() {
    const listedStores = this.storeModel.find();
    return listedStores;
  }

  findOne(id: string) {
    const foundStore = this.storeModel.findOne({id});
    return foundStore;
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    const updatedStore = this.storeModel.findByIdAndUpdate(id, updateStoreDto);
    return updatedStore;
  }

  remove(id: string) {
    const deletedStore = this.storeModel.findByIdAndRemove(id);
    return deletedStore;
  }
}
