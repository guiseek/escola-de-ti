import { IsAlphanumeric, IsNotEmpty } from "class-validator"


export class CreateStoreDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    products:string[]

}
