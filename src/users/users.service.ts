import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  gethashPassword = (password : string) =>{
    // var bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
  // cai contructor qqjzzz gi the kho hieu qua
  
  async create(email: string, password: string, name: string) {
    const hashPassword = this.gethashPassword(password);
    let user = await this.userModel.create({
      //dong code tren de hung cai dong data nay
      email,
      password : hashPassword,
      name,
      // createdAt: new Date(),
      // updatedAt: new Date(),
    })
    // const newUser = new this.userModel({ email, password, name });
    // return newUser.save();
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
