import multer, { diskStorage } from 'multer';
import { randomBytes } from 'crypto';

const generageImageName = (randomValue: string, ext: string) => {
  return Date.now().toString() + randomValue + '.' + ext;
};

const uploadConfig = multer({
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
  },
  storage: diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, './src/uploads');
    },
    filename: (_req, file, cb) => {
      const randomValue = randomBytes(6).toString('hex');
      const ext = file.originalname.split('.').pop();
      cb(null, generageImageName(randomValue, ext));
    },
  }),
});

export default uploadConfig;
