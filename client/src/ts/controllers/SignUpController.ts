import { signUp } from "../api/auth.api";
import useAuth from "../hooks/useAuth";
import useReducer from "../hooks/useReducer";
import useRouter from "../hooks/useRouter";
import useToast from "../hooks/useToast";
import reducer from "../reducers/SignUpReducer";
import {
  SIGNUPACTIONS,
  SignUpFormData,
  SignUpState,
} from "../types/signupTypes";
import { CoreElements } from "../types/types";
import errorHandler from "../utils/errorHandler";
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

  const [authState] = useAuth();
  const toast = useToast();
  const router = useRouter();

  if (authState().isAuthenticated) {
    toast.showToast({ type: "ERROR", message: "You are already logged in" });
    router.push("/");
    return;
  }

  title.innerText = "Dashen Tour - Signup";
  SignupView.render(initialState);

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

      const formData: SignUpFormData = {
        fullName: state().fullName,
        email: state().email,
        password: state().password,
      };

      signUp(formData)
        .then((response: Response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.message);
          } else {
            console.log(data);
            toast.showToast({
              type: "SUCCESS",
              message: "The sign up was successfull. Please, login to continue",
              duration: 3000,
            });
            router.push("/login");
          }
        })
        .catch((error: Error) => {
          const toast = useToast();
          // const message = errorHandler(error);
          toast.showToast({ type: "ERROR", message: error.message });
        })
        .finally(() => {
          dispatch([{ type: "SET_LOADING", payload: false }]);
          resetForm(formContainer);
        });
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
