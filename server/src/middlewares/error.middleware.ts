import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@/exceptions/HttpException';
import { logger } from '@utils/logger';
import { NODE_ENV } from '@/config/index';

export const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    if (NODE_ENV === 'development') {
      logger.error(error.stack);
    }
    res.status(status).json({ error: { message: message } });
  } catch (error) {
    next(error);
  }
};
