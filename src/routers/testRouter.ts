import * as express from 'express';
import {loginMiddleware} from "../controllers/externalController";

const router = express.Router();

router.post('/auth', loginMiddleware);

export default router;
