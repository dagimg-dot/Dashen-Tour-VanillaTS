import Router from "./router/router.js";
import HomeController from "./controllers/HomeController.js";
import SignUpController from "./controllers/SignUpController.js";
import LoginController from "./controllers/LoginController.js";

const routes = [
  { path: "", controller: HomeController },
  { path: "/", controller: HomeController },
  { path: "/signup", controller: SignUpController },
  { path: "/login", controller: LoginController },
];

export default function App(coreElements) {
  const router = new Router(coreElements, routes);
  router.init();
}
