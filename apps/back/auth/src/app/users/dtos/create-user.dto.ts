import { IsNotEmpty, IsOptional, IsNumber, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
