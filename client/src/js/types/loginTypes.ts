import { EventFullElement, State } from "./types";

export interface LoginState extends State {
  email: string;
  emailErrorMessage: string;
  password: string;
  passwordErrorMessage: string;
  isLoading: boolean;
  isInvalid: boolean;
}

export type LOGINACTIONS =
  | "SET_EMAIL"
  | "SET_PASSWORD"
  | "SET_LOADING"
  | "SET_INVALID"
  | "SET_EMAIL_ERROR"
  | "SET_PASSWORD_ERROR";

export type LoginReactiveElements = {
  emailError: HTMLSpanElement | null;
  passwordError: HTMLSpanElement | null;
  errorModal: HTMLDivElement | null;
  loginBtn: HTMLButtonElement | null;
  passwordInput: EventFullElement;
  emailInput: EventFullElement;
  loginForm: EventFullElement;
  closeBtn: EventFullElement;
  logo: EventFullElement;
};
