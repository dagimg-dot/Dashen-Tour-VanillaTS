import { Route, CoreElements } from "./types/types";

import HomeController from "./controllers/HomeController";
import SignUpController from "./controllers/SignUpController";
import LoginController from "./controllers/LoginController";
import useRouter from "./hooks/useRouter";

const routes: Route[] = [
  { path: "", controller: HomeController },
  { path: "/", controller: HomeController },
  { path: "/signup", controller: SignUpController },
  { path: "/login", controller: LoginController },
];

export default function App(coreElements: CoreElements) {
  const router = useRouter();
  router.init(coreElements, routes);
}
