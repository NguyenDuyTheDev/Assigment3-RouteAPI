import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from './hash.services';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>, private hashService: HashService) {}

  async getUserByUsername(username: string) {
    return this.userModel.findOne({ username }).exec();
  }

  async editUser() {

  }

  async registerUser(userInfo: any) {
    const createUser = new this.userModel(userInfo);
    // check if user exists
    const user = await this.getUserByUsername(createUser.username);
    if (user) {
      throw new BadRequestException("Username was exist");
    }
    // Hash Password
    createUser.password = await this.hashService.hashPassword(createUser.password);

    return createUser.save();
  }
}

