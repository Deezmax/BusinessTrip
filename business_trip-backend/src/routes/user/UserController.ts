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

userRouter.post('/sample', async (req, res) => {
  const body = req.body;
  // PARSe body? DAO?

  const originalData = body.data;

  const user: IUser = new User();
  // user.build('deezmax', 'Maximilian', 'Schreiter', 'test');
  user.firstName = body.firstName;
  user.lastName = body.lastName;
  user.userName = body.userName;
  user.email = body.email;
  user.created_at = getTime();
  user.last_changed = getTime();
  await user.save();

  const message =
    'Das kamm vom Frontend: ' + originalData + '. Das Backend hat dieses angehängt:' + user.toJSON;

  res.status(OK).send({
    data: message,
  });
});
