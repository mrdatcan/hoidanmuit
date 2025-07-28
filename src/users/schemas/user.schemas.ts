import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
//user.schemas.ts: Định nghĩa model User cho MongoDB.


export type UserDocument = HydratedDocument<User>;
//noi tao data
@Schema()
export class User {
  @Prop({ required: true })
    email: string;

  @Prop()
    age: number;

  @Prop()
    name: string;

  @Prop({ required: true })
    password: string;
  @Prop()
    address: string;
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
    @Prop()
    phone: string;

}
export const UserSchema = SchemaFactory.createForClass(User);
