import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store, StoreSchema } from './entities/store.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: Product }]),
  ],
  controllers: [StoreController],
  providers: [StoreService, ]
})
export class StoreModule {}
