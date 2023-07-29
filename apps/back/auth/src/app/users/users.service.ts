import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel:Model<User>){}

  async hash(password:string){
    const saltOrRounds = 10;
    console.log(password)
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password,saltOrRounds)
    return hash
  }

  async create(createUserDto: CreateUserDto) {

    createUserDto.password= await this.hash(createUserDto.password)
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find({},{password:0});
  }

  findOne(email: string) {
    return this.userModel.findOne({email:email});
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({email:email},{updateUserDto});
  }

  remove(email: string) {
    return this.userModel.findOneAndDelete({email:email});
  }
}
