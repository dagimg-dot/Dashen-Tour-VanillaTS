import { CoreElements } from "../types/types";
import { LoginState, LOGINACTIONS, LoginFormData } from "../types/loginTypes";

import useReducer from "../hooks/useReducer";
import useRouter from "../hooks/useRouter";
import reducer from "../reducers/LoginReducer";
import LoginView from "../views/LoginView";
import { login } from "../api/auth.api";
import useToast from "../hooks/useToast";
import errorHandler from "../utils/errorHandler";

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

  const checkError = (formContainer: HTMLFormElement): boolean => {
    let errorFound = false;

    if (state().emailErrorMessage !== "") {
      const emailInput = formContainer.querySelector(
        "#emailInput"
      ) as HTMLInputElement;
      emailInput.focus();
      errorFound = true;
      return errorFound;
    }

    if (state().passwordErrorMessage !== "") {
      const paswordInput = formContainer.querySelector(
        "#passwordInput"
      ) as HTMLInputElement;
      paswordInput.focus();
      errorFound = true;
      return errorFound;
    }

    return errorFound;
  };

  // Event Handlers
  LoginView.handleSubmit((event) => {
    event.preventDefault();

    const formContainer = event.target as HTMLFormElement;

    if (checkError(formContainer)) {
      return;
    }

    if (state().isInvalid) {
      dispatch([{ type: "SET_INVALID", payload: false }]);
    }

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      dispatch([{ type: "SET_LOADING", payload: true }]);

      const formData: LoginFormData = {
        email: state().email,
        password: state().password,
      };

      login(formData)
        .then((response: Response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.message);
          } else {
            console.log(data);
            const toast = useToast();
            toast.showToast({
              type: "SUCCESS",
              message: "You are successfully logged in.",
            });
            const router = useRouter();
            router.push("/destinations");
          }
        })
        .catch((error: Error) => {
          if (error.message === "Incorrect email or password") {
            dispatch([{ type: "SET_INVALID", payload: true }]);
          } else {
            const toast = useToast();
            const message = errorHandler(error);
            toast.showToast({ type: "ERROR", message: message });
          }
        })
        .finally(() => {
          dispatch([{ type: "SET_LOADING", payload: false }]);
          resetForm(formContainer);
        });
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
    } else if (value.match("^[a-zA-Z0-9_.]+@[a-zA-Z]+[.]+com$") === null) {
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
