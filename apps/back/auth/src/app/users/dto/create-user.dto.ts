import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;

}
