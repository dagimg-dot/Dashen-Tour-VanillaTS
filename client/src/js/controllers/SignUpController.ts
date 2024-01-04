import SignupView from "../views/SignupView";

const SignUpController = ({ root, title }) => {
  title.innerText = "Dashen Tour - Signup";
  root.innerHTML = SignupView.render();
};

export default SignUpController;
