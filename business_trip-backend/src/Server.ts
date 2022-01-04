import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BaseRouter from './routes';
import logger from './shared/Logger';
import connectMongo from './secruity/database/mongoConnection';
import cors from 'cors';

const app = express();
const { BAD_REQUEST, OK } = StatusCodes;

connectMongo();

/** **********************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

/** **********************************************************************************
 *                                  API Endpoint
 ***********************************************************************************/

app.get('/apiError', (req, res) => {
  res.status(404).json('ERROR');
});

const apiVersion = {
  version: '0.0.1',
  framework: 'expressJS',
};

app.get('/api', (req, res) => {
  res.status(OK).json('55');
});

app.get('/hello/hello/:q?', (req, res) => {
  res.send('');
});

// Export express instance
export default app;
