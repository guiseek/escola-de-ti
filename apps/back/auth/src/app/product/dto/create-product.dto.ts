import { IsNotEmpty, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @Min(1)
  @Max(100000)
  price: number;

  @MaxLength(100)
  description: string;

  @Min(1)
  quantity: number;
}
