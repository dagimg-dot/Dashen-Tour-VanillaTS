import SignupView from "../views/SignupView.js";

const SignUpController = ({ root, css, title }) => {
  // This is for parcel
  //   css.setAttribute("href", "/index.e72899e1.css");
  
  css.setAttribute("href", "./src/css/signup.css");
  title.innerText = "Dashen Tour - Signup"
  root.innerHTML = SignupView.render();
};

export default SignUpController;
