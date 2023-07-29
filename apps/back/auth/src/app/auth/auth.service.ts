import { Injectable,UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

  constructor(private userService:UsersService,private jwtService: JwtService){}

  async signIn(email:string, pass:any) {
    const user = await this.userService.findOne(email);
    const isMatch = await bcrypt.compare(pass, user?.password || "");
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?._id, username: user?.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
