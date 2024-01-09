import { SignUpState } from "../types/signupTypes";
import { CoreElements } from "../types/types";
import SignupView from "../views/SignupView";

const SignUpController = ({ root, title }: CoreElements) => {
  const initialState: SignUpState = {
    rootNode: root,
  };

  (() => {
    title.innerText = "Dashen Tour - Signup";
    SignupView.render(initialState);
  })();
};

export default SignUpController;
