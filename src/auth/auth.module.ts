import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy, jwtConstants } from 'src/strategy';
import { UserSchema } from 'src/users/users.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { HashService } from 'src/users/hash.services';


@Module({
  imports: [
   MongooseModule.forFeature([{
      name: "User",
      schema: UserSchema
    }]),
   JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d'
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy, HashService],
})
export class AuthModule {}