import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import User, { IUser } from '../../common/User';
import { getTime } from '../../shared/functions';

export const userRouter = Router();

userRouter.get('/users', async (req, res) => {
  const usersList = await User.find();

  res.status(OK).send({
    users: usersList,
  });
});

userRouter.post('/user', async (req, res) => {
  const userDTO: UserDTO = req.body;

  let user: IUser = await User.findOne({
    userName: userDTO.userName,
  });

  if (user?.id) {
    user.firstName = userDTO.firstName;
    user.lastName = userDTO.lastName;
    user.userName = userDTO.userName;
    user.email = userDTO.email;
    user.last_changed = getTime();

    const savedUser = await user.save();
  } else {
    user = new User({
      firstName: userDTO.firstName,
      lastName: userDTO.lastName,
      userName: userDTO.userName,
      email: userDTO.email,
      created_at: getTime(),
      last_changed: getTime(),
    });

    await user.save();
  }

  res.status(OK).send();
});
