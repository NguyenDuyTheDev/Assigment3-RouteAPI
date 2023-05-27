import { JwtService} from '@nestjs/jwt';
import { Injectable } from "@nestjs/common";
import { UsersService } from 'src/users/users.service';
import { HashService } from 'src/users/hash.services';

  
  @Injectable()
  export class AuthService {
    constructor(private userService: UsersService,
      private hashService: HashService,
      private jwtService: JwtService) {}
  
    async validateUser(username: string, pass: string): Promise < any > {
      const user = await this.userService.getUserByUsername(username);
      if (user && (await this.hashService.comparePassword(pass, user.password))) {
        return user;
      }
      return null;
    }
  
    async login(user: any) {
      const payload = {
        username: user.username,
        sub: user.id
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }