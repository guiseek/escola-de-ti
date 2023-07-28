import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, MinLength, MaxLength, Min, Max } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto)
{
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    name: string;

    @MaxLength(100)
    description: string;

    @Min(1)
    @Max(10000)
    price: number;

    @Min(1)
    quantity: number;
}
