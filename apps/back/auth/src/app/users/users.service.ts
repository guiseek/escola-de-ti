import { Injectable } from '@nestjs/common';
import { User } from './entities/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  findOne(id: string) {
    const findedUser = this.userModel.findById(id);
    return findedUser;
  }

  findAll() {
    const findedUsers = this.userModel.find();
    return findedUsers;
  }

  update(id: string, updatedUserDto: UpdateUserDto) {
    const updatedUser = this.userModel
      .findByIdAndUpdate(
        id,
        {
          name: updatedUserDto.name,
          email: updatedUserDto.email,
          password: updatedUserDto.password,
          age: updatedUserDto.age,
        },
        { new: true }
      )
      .select('-password');
    return updatedUser;
  }

  remove(id: string) {
    const deletedUser = this.userModel
      .findByIdAndDelete(id)
      .select('-password');

    return deletedUser;
  }
}
