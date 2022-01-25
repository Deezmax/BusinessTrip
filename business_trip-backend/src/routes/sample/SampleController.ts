import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import User, { IUser } from '../../common/User';
import { getTime } from '../../shared/functions';

export const sampleRouter = Router();

sampleRouter.get('/sample', (req, res) => {
  res.status(OK).send({
    test: 'hi',
  });
});

sampleRouter.post('/sample', async (req, res) => {
  const body = req.body;
  // PARSe body? DAO?

  const message = 'Das kamm vom Frontend: ' + body + '. Das Backend hat dieses angehängt:';

  res.status(OK).send({
    data: message,
  });
});
