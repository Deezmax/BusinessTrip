import { randomUUID } from 'crypto';
import { Document, Model, Schema, model, Date } from 'mongoose';

export interface IUser extends Document {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  createdDate: Date;

  build(
    user: string | IUser,
    firstName?: string,
    lastName?: string,
    email?: string,
    id?: string,
  ): void;
}

const userSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// class UserDO implements IUser {
//   public id: string;
//   public userName: string;
//   public firstName: string;
//   public lastName: string;
//   public email: string;
//   public createdDate: Schema.Types.Date;

//   constructor() {
//     super();
//   }

//   build(
//     user: string | IUser,
//     firstName?: string,
//     lastName?: string,
//     email?: string,
//     id?: string,
//   ): void {
//     if (typeof user === 'string') {
//       this.id = id || randomUUID();
//       this.userName = user;
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//     } else {
//       this.id = user.id;
//       this.userName = user.userName;
//       this.firstName = user.firstName;
//       this.lastName = user.lastName;
//       this.email = user.email;
//     }
//   }
// }

const User: Model<IUser> = model('User', userSchema);

export default User;
