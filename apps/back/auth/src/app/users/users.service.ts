import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createOne(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userModel.create(createUserDto);

    return createdUser;
  }

  async findOne(id: string) {
    const findedUser = this.userModel.findById(id);

    return findedUser;
  }

  async findAll() {
    const findedUsers = this.userModel.find();
    return findedUsers;
  }

  async updateOne(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(id, updateUserDto);
    return updatedUser;
  }

  async removeOne(id: string) {
    const removedUser = this.userModel.findByIdAndRemove(id);
    return removedUser;
  }
}
