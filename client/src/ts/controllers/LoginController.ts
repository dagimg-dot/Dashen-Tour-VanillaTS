import { CoreElements } from "../types/types";
import { LoginState, LOGINACTIONS } from "../types/loginTypes";

import useReducer from "../hooks/useReducer";
import useRouter from "../hooks/useRouter";
import reducer from "../reducers/LoginReducer";
import LoginView from "../views/LoginView";

const LoginController = ({ root, title }: CoreElements) => {
  const initialState: LoginState = {
    rootNode: root,
    email: "",
    emailErrorMessage: "",
    password: "",
    passwordErrorMessage: "",
    isLoading: false,
    isInvalid: false,
  };

  (() => {
    title.innerText = "Dashen Tour - Login";

    // Initial Render
    LoginView.render(initialState);
  })();

  const [state, dispatch, subscribe] = useReducer<LoginState, LOGINACTIONS>(
    reducer,
    initialState
  );

  // Subscribe to state changes
  subscribe(() => {
    const newState = state();
    // Update the view with the new state
    LoginView.update(newState);
    console.log(newState);
  });

  // Event Handlers
  LoginView.handleSubmit((event) => {
    event.preventDefault();

    console.log("submitted");

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      dispatch([{ type: "SET_LOADING", payload: true }]);

      // Imitating api request
      setTimeout(() => {
        dispatch([{ type: "SET_INVALID", payload: true }]);
        console.log(state());
      }, 3000);
    }
  });

  LoginView.handleClose(() => {
    dispatch([{ type: "SET_INVALID", payload: false }]);
  });

  LoginView.handleLogoClick(() => {
    const router = useRouter();
    router.push("/");
  });

  LoginView.handleEmailInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([
      { type: "SET_EMAIL", payload: target.value },
      { type: "SET_EMAIL_ERROR", payload: target.value },
    ]);
  });

  LoginView.handlePasswordInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([
      { type: "SET_PASSWORD", payload: target.value },
      { type: "SET_PASSWORD_ERROR", payload: target.value },
    ]);
  });
};

export default LoginController;
