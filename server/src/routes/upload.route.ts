import { Router } from 'express';
import uploadConfig from '@config/multer';
import upload from '@controllers/upload.controller';
import { fileSizeLimitHandler, extenstionHandler } from '@middlewares/upload.middleware';

const uploadRouter = Router();

uploadRouter.post('/api/upload', uploadConfig.single('image'), fileSizeLimitHandler, extenstionHandler, upload);

export default uploadRouter;
