import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/store.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/escola-ti'),
    AuthModule,
    UsersModule,
    ProductsModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
