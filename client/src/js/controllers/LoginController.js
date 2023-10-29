import LoginView from "../views/LoginView.js";

const LoginController = (root, css) => {
  // This is for parcel
  //   css.setAttribute("href", "/index.4cdbd4fe.css");

  css.setAttribute("href", "./src/css/login.css");
  root.innerHTML = LoginView.generateMarkup();
};

export default LoginController;
