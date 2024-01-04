import { PageAction } from "../types/types";
import { LoginState, LOGINACTIONS } from "../types/loginTypes";

const loginReducer = (
  state: LoginState,
  action: PageAction<LOGINACTIONS>
): LoginState => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
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
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        emailErrorMessage: action.payload,
      };
    case "SET_PASSWORD_ERROR":
      return {
        ...state,
        passwordErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
