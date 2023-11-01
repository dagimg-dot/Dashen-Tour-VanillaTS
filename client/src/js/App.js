import HomeController from "./controllers/HomeController.js";
import SignUpController from "./controllers/SignUpController.js";
import LoginController from "./controllers/LoginController.js";
import useRouter from "./hooks/useRouter.js";

const routes = [
  { path: "", controller: HomeController },
  { path: "/", controller: HomeController },
  { path: "/signup", controller: SignUpController },
  { path: "/login", controller: LoginController },
];

export default function App(coreElements) {
  const router = useRouter();
  router.init(coreElements, routes);
}
