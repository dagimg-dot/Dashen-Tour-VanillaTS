import { ReactiveElements, State } from "./types";

export interface LoginState extends State {
  email: string;
  emailErrorMessage: string;
  password: string;
  passwordErrorMessage: string;
  isLoading: boolean;
  isInvalid: boolean;
}

export type LOGINACTIONS =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_EMAIL_ERROR"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_PASSWORD_ERROR"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INVALID"; payload: boolean };

export type LoginReactiveElements = ReactiveElements & {
  emailError: HTMLSpanElement | null;
  passwordError: HTMLSpanElement | null;
  errorModal: HTMLDivElement | null;
  loginBtn: HTMLButtonElement | null;
  passwordInput: HTMLInputElement | null;
  emailInput: HTMLInputElement | null;
  loginForm: HTMLFormElement | null;
  closeBtn: HTMLButtonElement | null;
};

export type LoginFormData = {
  email: string;
  password: string;
};
