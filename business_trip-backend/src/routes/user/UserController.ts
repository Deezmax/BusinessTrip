import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import User, { IUser } from '../../common/User';
import { getTime } from '../../shared/functions';
import { UserDTO } from 'src/common/dto/UserDTO';

export const userRouter = Router();

userRouter.get('/user', async (req, res) => {
  let userDTO: UserDTO;

  // res.status(OK).send(userDTO);
  res.status(OK).send({
    userName: 5,
    firstName: '5',
    user: userDTO,
    test: '',
  });
});

userRouter.get('/deepTest', async (req, res) => {
  let user: UserDTO;

  res.status(OK).send({
    deep: { userName: user, firstName: 'test', user: { user: 5, test2: user } },
  });
});

userRouter.get('/deepTest3', async (req, res) => {
  let user: UserDTO;

  res.status(OK).send({
    deep: { userName: user, firstName: 'test', user: { user: 5, test2: user } },
  });
});

userRouter.get('/test', async (req, res) => {
  let user: UserDTO;
  res.send(user);
});

userRouter.post('/postTest', async (req, res) => {
  let userDTO: UserDTO;

  const testBody: { userName: string; test: number } = req.body();

  // res.status(OK).send(userDTO);
  res.status(OK).send({
    userName: 5,
    firstName: 'test',
    user: userDTO,
    test: '',
  });
});

userRouter.post('/postTest2', async (req, res) => {
  let userDTO: UserDTO;

  const testBody: UserDTO = req.body();

  // res.status(OK).send(userDTO);
  res.status(OK).send({
    userName: 5,
    firstName: 'test',
    user: userDTO,
    test: '',
  });
});

userRouter.post('/postTest3', async (req, res) => {
  let userDTO: UserDTO;

  const testBody: { userName: string; test: { test2: UserDTO; test3: number } } = req.body();

  // res.status(OK).send(userDTO);
  res.status(OK).send({
    userName: 5,
    firstName: 'test',
    user: userDTO,
    test: '',
  });
});

userRouter.get('/users', async (req, res) => {
  const usersList = await User.find();

  res.status(OK).send({
    users: usersList,
  });
});

userRouter.post('/user', async (req, res) => {
  const userDTO: UserDTO = req.body;

  // let user: IUser = await User.findOne({
  //   userName: userDTO.userName,
  // });
});

//   if (user?.id) {
//     user.firstName = userDTO.firstName;
//     user.lastName = userDTO.lastName;
//     user.userName = userDTO.userName;
//     user.email = userDTO.email;
//     user.last_changed = getTime();

//     const savedUser = await user.save();
//   } else {
//     user = new User({
//       firstName: userDTO.firstName,
//       lastName: userDTO.lastName,
//       userName: userDTO.userName,
//       email: userDTO.email,
//       created_at: getTime(),
//       last_changed: getTime(),
//     });

//     await user.save();
//   }

//   res.status(OK).send();
// });
