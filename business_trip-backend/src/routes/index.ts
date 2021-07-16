import { Router } from 'express';
import { sampleRouter } from './sample/SampleController';

// Export the base-router
const baseRouter = Router();
baseRouter.use('', sampleRouter);
export default baseRouter;
