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
    // console.log(newState);
  });

  const resetForm = (formContainer: HTMLFormElement) => {
    dispatch([
      { type: "SET_EMAIL", payload: "" },
      { type: "SET_PASSWORD", payload: "" },
    ]);
    formContainer.reset();
  };

  // Event Handlers
  LoginView.handleSubmit((event) => {
    event.preventDefault();

    const formContainer = event.target as HTMLFormElement;

    if (state().emailErrorMessage !== "") {
      const emailInput = formContainer.querySelector(
        "#emailInput"
      ) as HTMLInputElement;
      emailInput.focus();
      return;
    }

    if (state().passwordErrorMessage !== "") {
      const paswordInput = formContainer.querySelector(
        "#passwordInput"
      ) as HTMLInputElement;
      paswordInput.focus();
      return;
    }

    console.log("submitted");

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      dispatch([{ type: "SET_LOADING", payload: true }]);

      // Imitating api request
      setTimeout(() => {
        dispatch([{ type: "SET_INVALID", payload: true }]);
        resetForm(formContainer);
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

  const validateEmailField = (value: string) => {
    const distpachEmailError = (error: string) => {
      dispatch([{ type: "SET_EMAIL_ERROR", payload: error }]);
    };

    if (value == "") {
      distpachEmailError("Email is required");
    } else if (value.match("^[a-zA-Z0-9_]+@[a-zA-Z]+[.]+com$") === null) {
      distpachEmailError("Invalid Email");
    } else {
      distpachEmailError("");
    }
  };

  const validatePasswordField = (value: string) => {
    const dispatchPasswordError = (error: string) => {
      dispatch([{ type: "SET_PASSWORD_ERROR", payload: error }]);
    };

    if (value == "") {
      dispatchPasswordError("Password is required");
    } else if (value.length < 8) {
      dispatchPasswordError("Password must be at least 8 characters");
    } else {
      dispatchPasswordError("");
    }
  };

  LoginView.handleEmailInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_EMAIL", payload: target.value }]);

    validateEmailField(target.value);
  });

  LoginView.handlePasswordInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_PASSWORD", payload: target.value }]);

    validatePasswordField(target.value);
  });
};

export default LoginController;
