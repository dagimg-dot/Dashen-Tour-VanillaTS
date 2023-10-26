import SignupView from "../views/SignupView.js";

const SignUpController = (root, css) => {
  // This is for parcel
  //   css.setAttribute("href", "/index.e72899e1.css");
  
  css.setAttribute("href", "./src/css/signup.css");
  root.innerHTML = SignupView.generateMarkup();
};

export default SignUpController;
