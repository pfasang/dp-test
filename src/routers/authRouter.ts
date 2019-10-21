import * as express from 'express';
import {loginMiddleware} from "../middlewares/validationMiddleware";

const router = express.Router();

router.post('/auth', loginMiddleware);

export default router;