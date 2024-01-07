import { CoreElements } from "../types/types";
import SignupView from "../views/SignupView";

const SignUpController = ({ root, title }: CoreElements) => {
  title.innerText = "Dashen Tour - Signup";
  root.innerHTML = SignupView.render();
};

export default SignUpController;
