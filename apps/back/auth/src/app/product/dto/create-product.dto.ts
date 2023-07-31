
import { isNotEmpty, MinLength, MaxLength, Min, Max, IsNotEmpty} from 'class-validator';

export class CreateProductDto {
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
