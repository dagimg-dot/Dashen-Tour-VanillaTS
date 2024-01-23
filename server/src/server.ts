import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { ValidateEnv } from '@utils/validateEnv';
import { UserRoute } from '@routes/users.route';
import { UploadRoute } from '@/routes/upload.route';
import { DestinationRoute } from './routes/destinations.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new UploadRoute(), new DestinationRoute()]);

app.listen();
