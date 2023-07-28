import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Product } from '../../product/entities/product.entity';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  products_id: Product[];

  address: string;
}
