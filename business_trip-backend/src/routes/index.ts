import { Router } from 'express';
import { sampleRouter } from './sample/SampleController';
import { userRouter } from './user/UserController';

// Export the base-router
const baseRouter = Router();
baseRouter.use('', sampleRouter);
baseRouter.use('/user', userRouter);
export default baseRouter;
