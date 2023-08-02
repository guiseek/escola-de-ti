import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductModule,
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/escola-ti'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
