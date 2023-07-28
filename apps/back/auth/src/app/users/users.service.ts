import { Injectable } from '@nestjs/common';
import { User } from './entitities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserTypes } from '../types/user.type';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User): Promise<UserTypes> {
    user.password = await this.hashPassword(user.password);
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findAll(): Promise<UserTypes[] | undefined> {
    return await this.userModel.find();
  }

  async findOne(username: string): Promise<UserTypes | null> {
    return await this.userModel.findOne({ username: username });
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { username: username },
      updateUserDto
    );
  }

  async delete(username: string) {
    return await this.userModel.deleteOne({ username: username });
  }

  private async hashPassword(password: string) {
    const saltRounds = 10;
    const myPlaintextPassword = password;
    const salt = await hash(myPlaintextPassword, saltRounds);
    return salt;
  }
}
