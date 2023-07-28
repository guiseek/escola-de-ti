import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';
import { Product } from '../../products/entities/product.entity';

export type StoreDocument = HydratedDocument<Store>;
@Schema()
export class Store {
  @Prop({ required: true })
  name: string;

  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]})
  products: Product[];

  @Prop({ required: true })
  address: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
