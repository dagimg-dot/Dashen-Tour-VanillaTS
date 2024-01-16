import { MulterError } from 'multer';
import { unlinkSync } from 'fs';
import { NextFunction, Request, Response } from 'express';

const allowedExtensions = ['.jpg', '.jpeg', '.png'];

const fileSizeLimitHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({
        error: {
          message: 'File size limit exceeded',
        },
      });
    }
  }
  next(err);
};

const extenstionHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const file = req.file;
  const originalFileName = file.originalname;
  const fileExtension = originalFileName.substring(originalFileName.lastIndexOf('.')).toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    // Delete the uploaded file
    unlinkSync(file.path);

    res.status(400).json({
      error: {
        message: 'Invalid file type. Only JPG, JPEG, and PNG files are allowed.',
      },
    });
  } else {
    next(err);
  }
};

export { fileSizeLimitHandler, extenstionHandler };
