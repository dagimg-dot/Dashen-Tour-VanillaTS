import { SIGNUPACTIONS, SignUpState } from "../types/signupTypes";
import { PageAction } from "../types/types";

const signUpReducer = (
  state: SignUpState,
  action: PageAction<SIGNUPACTIONS>
): SignUpState => {
  switch (action.type) {
    case "SET_FULLNAME":
      return {
        ...state,
        fullName: action.payload,
      };
    case "SET_FULLNAME_ERROR":
      return {
        ...state,
        fullNameErrorMessage: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        emailErrorMessage: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_PASSWORD_ERROR":
      return {
        ...state,
        passwordErrorMessage: action.payload,
      };
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case "SET_CONFIRM_PASSWORD_ERROR":
      return {
        ...state,
        confirmPasswordErrorMessage: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
        isInvalid: false,
      };
    case "SET_INVALID":
      return {
        ...state,
        isInvalid: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
