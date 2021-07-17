import dateFormat from 'dateformat';
import logger from './Logger';

export const pErr = (err: Error) => {
  if (err) {
    logger.err(err);
  }
};

export const getRandomInt = () => {
  return Math.floor(Math.random() * 1_000_000_000_000);
};

export const getTime = () => {
  const now = new Date();
  return dateFormat(now, 'isoDateTime');
};
