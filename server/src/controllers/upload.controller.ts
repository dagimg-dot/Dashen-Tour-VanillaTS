import Container from 'typedi';
import { UploadService } from '@/services/upload.service';
import { NextFunction, Request, Response } from 'express';
import { JsonResponse } from '@/utils/JsonResponse';

export class UploadController {
  public uploadService = Container.get(UploadService);

  public upload = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { file } = req;
      const link: string = this.uploadService.upload(file);
      const data = {
        link,
      };
      res.status(200).json(new JsonResponse('/upload', 'upload successfull', data, 200));
    } catch (error) {
      next(error);
    }
  };
}
