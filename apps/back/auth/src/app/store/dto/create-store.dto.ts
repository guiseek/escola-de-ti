import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  products: string;

  @MinLength(10)
  @MaxLength(100)
  address: string;
}
