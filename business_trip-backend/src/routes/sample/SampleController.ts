import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export const sampleRouter = Router();

sampleRouter.get("/sample", (req, res) => {
  res.status(OK).send({
    test: "hi",
  });
});

sampleRouter.post("/sample", (req, res) => {
  const body = req.body;
  //PARSe body? DAO?

  const originalData = body.data;

  const message =
    "Das kamm vom Frontend: " +
    originalData +
    ". Das Backend hat dieses angehängt" +
    ":)";

  res.status(OK).send({
    data: message,
  });
});
