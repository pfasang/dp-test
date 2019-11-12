import * as express from 'express';
import {verifyUser} from "../middlewares/jwtHelper";
import {auth} from '../controllers/authController';

const router = express.Router();

router.post('/auth', auth);
router.get('/verify', verifyUser);


export default router;
