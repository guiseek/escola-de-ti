import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from '../../products/entities/product.entity';

export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  products: string[];
}
