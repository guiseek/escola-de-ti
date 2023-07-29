import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StoreDocument=HydratedDocument<Store>

@Schema()
export class Store {
    
    @Prop()
    name:string;

    @Prop()
    address:string;

    @Prop()
    products:string[];


}


export const StoreSchema=SchemaFactory.createForClass(Store)