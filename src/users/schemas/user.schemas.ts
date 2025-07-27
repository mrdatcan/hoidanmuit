import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

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
