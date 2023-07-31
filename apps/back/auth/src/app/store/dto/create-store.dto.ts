import { Product } from "../../product/entities/product.entity";

export class CreateStoreDto {

    name: string;
    product_id: Product[];
    adress: string;
}
