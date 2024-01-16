import { PORT } from '@/config/index';
import { HttpException } from '@/exceptions/HttpException';
import { Service } from 'typedi';

const createLink = (fileName: string) => {
  return `http://localhost:${PORT}/uploads/${fileName}`;
};

@Service()
export class UploadService {
  public upload(file: Express.Multer.File) {
    if (!file) throw new HttpException(400, 'No image uploaded');
    const link = createLink(file.filename);
    return link;
  }
}
