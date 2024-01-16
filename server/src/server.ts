import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { ValidateEnv } from '@utils/validateEnv';
import { UserRoute } from '@routes/users.route';
import { UploadRoute } from '@/routes/upload.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new UploadRoute()]);

app.listen();
