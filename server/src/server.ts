import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { ValidateEnv } from '@utils/validateEnv';
import { UserRoute } from '@routes/users.route';
import { UploadRoute } from '@/routes/upload.route';
import { DestinationRoute } from './routes/destinations.route';
import { PackageRoute } from '@/routes/packages.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new UploadRoute(), new DestinationRoute(), new PackageRoute()]);

app.listen();
