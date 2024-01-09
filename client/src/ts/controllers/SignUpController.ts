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

  const resetForm = (formContainer: HTMLFormElement) => {
    dispatch([
      { type: "SET_EMAIL", payload: "" },
      { type: "SET_PASSWORD", payload: "" },
      { type: "SET_FULLNAME", payload: "" },
      { type: "SET_CONFIRM_PASSWORD", payload: "" },
    ]);
    formContainer.reset();
  };

  const checkError = (formContainer: HTMLFormElement): boolean => {
    let errorFound = false;

    if (state().fullNameErrorMessage !== "") {
      const fullNameInput = formContainer.querySelector(
        "#fullNameInput"
      ) as HTMLInputElement;
      fullNameInput.focus();
      errorFound = true;
      return errorFound;
    }
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

    if (state().confirmPasswordErrorMessage !== "") {
      const confirmPaswordInput = formContainer.querySelector(
        "#confirmPasswordInput"
      ) as HTMLInputElement;
      confirmPaswordInput.focus();
      errorFound = true;
      return errorFound;
    }

    return errorFound;
  };

  SignupView.handleSubmit((event) => {
    event.preventDefault();

    const formContainer = event.target as HTMLFormElement;

    if (checkError(formContainer)) {
      return;
    }

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

  const confirmPasswordField = (value: string) => {
    const dispatchConfirmPasswordError = (error: string) => {
      dispatch([{ type: "SET_CONFIRM_PASSWORD_ERROR", payload: error }]);
    };

    if (value == "" && state().password !== "") {
      dispatchConfirmPasswordError("You need to confirm your password");
    } else if (value !== state().password) {
      dispatchConfirmPasswordError("The password you entered doesn't match");
    } else {
      dispatchConfirmPasswordError("");
    }
  };

  SignupView.handleFullNameInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_FULLNAME", payload: target.value }]);
  });

  SignupView.handleEmailInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_EMAIL", payload: target.value }]);

    validateEmailField(target.value);
  });

  SignupView.handlePasswordInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_PASSWORD", payload: target.value }]);

    validatePasswordField(target.value);
    confirmPasswordField(state().confirmPassword);
  });

  SignupView.handleConfirmPasswordInput((event) => {
    const target = event.target as HTMLInputElement;
    dispatch([{ type: "SET_CONFIRM_PASSWORD", payload: target.value }]);

    confirmPasswordField(target.value);
  });
};

export default SignUpController;
