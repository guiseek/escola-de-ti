import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpException,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserTypes } from '../types/user.type';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<UserTypes> {
    try {
      return await this.usersService.create(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<UserTypes[] | undefined> {
    return await this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':username')
  async findOne(
    @Param('username') username: string
  ): Promise<UserTypes | null> {
    try {
      return await this.usersService.findOne(username);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':username')
  async update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      return await this.usersService.update(username, updateUserDto);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':username')
  async delete(@Param('username') username: string) {
    try {
      return await this.usersService.delete(username);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
