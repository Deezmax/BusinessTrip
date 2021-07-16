import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import User, { IUser } from '../../entities/User';

export const sampleRouter = Router();

sampleRouter.get('/sample', (req, res) => {
  res.status(OK).send({
    test: 'hi',
  });
});

sampleRouter.post('/sample', (req, res) => {
  const body = req.body;
  // PARSe body? DAO?

  const originalData = body.data;

  const user: IUser = new User();
  // user.build('deezmax', 'Maximilian', 'Schreiter', 'test');
  user.id = '1';
  user.firstName = 'Max';
  user.lastName = 'Schreiter';
  user.userName = 'Admin';
  user.email = 'test@test.de';

  user.save();

  const message =
    'Das kamm vom Frontend: ' + originalData + '. Das Backend hat dieses angehängt' + ':)';

  res.status(OK).send({
    data: message,
  });
});
