import useReducer from "../hooks/useReducer";
import reducer from "../reducers/SignUpReducer";
import { SIGNUPACTIONS, SignUpState } from "../types/signupTypes";
import { CoreElements } from "../types/types";
import SignupView from "../views/SignupView";

const SignUpController = ({ root, title }: CoreElements) => {
  const initialState: SignUpState = {
    rootNode: root,
    fullName: "",
    fullNameErrorMessage: "",
    email: "",
    emailErrorMessage: "",
    password: "",
    passwordErrorMessage: "",
    confirmPassword: "",
    confirmPasswordErrorMessage: "",
    isLoading: false,
    isInvalid: false,
  };

  (() => {
    title.innerText = "Dashen Tour - Signup";
    SignupView.render(initialState);
  })();

  const [state, dispatch, subscribe] = useReducer<SignUpState, SIGNUPACTIONS>(
    reducer,
    initialState
  );

  subscribe(() => {
    const newState = state();
    SignupView.update(newState);
  });

  SignupView.handleSubmit((event) => {
    event.preventDefault();

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      dispatch([{ type: "SET_LOADING", payload: true }]);

      // Imitating api request
      setTimeout(() => {
        dispatch([{ type: "SET_INVALID", payload: true }]);
        // resetForm(formContainer);
        console.log(state());
      }, 3000);
    }
  });
};

export default SignUpController;
