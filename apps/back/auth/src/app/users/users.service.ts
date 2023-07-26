import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userModel.create(createUserDto);

    return createdUser;
  }

  async findOne(name: string) {
    const findedUser = this.userModel.findOne({ name: name });

    return findedUser;
  }
}
