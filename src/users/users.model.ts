import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: Number ,
  username: String,
  password: String,
  name: String,
  age: Number,
  email: String,
  phone: String
});