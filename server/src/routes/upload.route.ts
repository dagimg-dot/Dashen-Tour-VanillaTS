import { Router } from 'express';
import uploadConfig from '@config/multer';
import { UploadController } from '@controllers/upload.controller';
import { fileSizeLimitHandler, extenstionHandler } from '@middlewares/upload.middleware';
import { Routes } from '@/interfaces/routes.interface';

export class UploadRoute implements Routes {
  public path = '/';
  public router = Router();
  public uploadController = new UploadController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}upload`, uploadConfig.single('image'), fileSizeLimitHandler, extenstionHandler, this.uploadController.upload);
  }
}
