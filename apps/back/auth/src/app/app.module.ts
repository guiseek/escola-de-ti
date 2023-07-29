import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule,ProductModule,StoreModule,UsersModule,MongooseModule.forRoot('mongodb://0.0.0.0:27017/teste-escola-de-ti')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
