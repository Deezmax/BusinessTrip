import { Document, Model, Schema, model } from 'mongoose';
import IBaseMongo from './BaseMongoInterface';

export interface IUser extends Document, IBaseMongo {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

const userSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  last_changed: {
    type: String,
    required: true,
  },
});

const User: Model<IUser> = model('User', userSchema);

export default User;
