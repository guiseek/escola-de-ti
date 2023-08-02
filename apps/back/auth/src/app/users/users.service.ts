import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createOne(createUserDto: CreateUserDto): Promise<string> {
    this.userModel.create(createUserDto);

    return 'Ok';
  }

  async findOne(id: string) {
    const findedUser = this.userModel.findById(id).select('-password');

    return findedUser;
  }

  async findByUsername(username: string) {
    const findedUser = this.userModel.findOne({ username: username });

    return findedUser;
  }

  async findAll() {
    const findedUsers = this.userModel.find().select('-password');
    return findedUsers;
  }

  async updateOne(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .select('password');
    return updatedUser;
  }

  async removeOne(id: string) {
    const removedUser = this.userModel
      .findByIdAndRemove(id)
      .select('-password');
    return removedUser;
  }
}
