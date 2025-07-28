import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';
import { User } from './schemas/user.schemas';

// Định nghĩa module UsersModule.
// Import MongooseModule.forFeature([...]) để kết nối với schema MongoDB.
// Khai báo controller & service của user.

@Module({
  imports : [MongooseModule.forFeature([{name : User.name, schema : UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
  // khai bao nha cung cap va ng su dung
})
export class UsersModule {}
