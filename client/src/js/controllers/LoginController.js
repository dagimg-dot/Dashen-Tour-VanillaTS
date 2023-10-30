import LoginView from "../views/LoginView.js";

const LoginController = ({ root, css, title }) => {
  // This is for parcel
  //   css.setAttribute("href", "/index.4cdbd4fe.css");

  css.setAttribute("href", "./src/css/login.css");
  title.innerText = "Dashen Tour - Login"
  root.innerHTML = LoginView.render();
};

export default LoginController;
