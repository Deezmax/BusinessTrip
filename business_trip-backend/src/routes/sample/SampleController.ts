import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export const sampleRouter = Router();

sampleRouter.get("/sample/get", (req, res) => {
    res.status(OK).send(
        {
            test : "hi"
        }
    );
})