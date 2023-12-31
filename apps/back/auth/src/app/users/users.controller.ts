import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUsetDto: CreateUserDto) {
    return this.usersService.createOne(createUsetDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Put(':id')
  updateOne(@Param('id') id: string, updateUserDto: UpdateUserDto) {
    return this.usersService.updateOne(id, updateUserDto)
  }

  @Get(':id')
  removeOne(@Param('id') id: string) {
    return this.usersService.removeOne(id)
  }
}
