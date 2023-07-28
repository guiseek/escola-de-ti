import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './entities/store.entity';
import { Product, ProductSchema } from '../product/entities/product.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]), MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [StoreController],
  providers: [StoreService]
})
export class StoreModule {}
