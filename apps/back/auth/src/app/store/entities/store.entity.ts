import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from '../../product/entities/product.entity';

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
  @Prop({ required: true })
  name: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]})
  product_id: Product[];

  @Prop()
  adress: string;

}

export const StoreSchema = SchemaFactory.createForClass(Store);