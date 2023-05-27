import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { StopssModule } from './stops/stops.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bussmart:abcdefhg1234@cluster-bus-smart.fphuddj.mongodb.net/?retryWrites=true&w=majority'),
    ProductsModule,
    StopssModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
