import { ReactiveElements, State } from "./types";

export interface SignUpState extends State {
  fullName: string;
  fullNameErrorMessage: string;
  email: string;
  emailErrorMessage: string;
  password: string;
  passwordErrorMessage: string;
  confirmPassword: string;
  confirmPasswordErrorMessage: string;
  isLoading: boolean;
  isInvalid: boolean;
}

export type SIGNUPACTIONS =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_EMAIL_ERROR"; payload: string }
  | { type: "SET_FULLNAME"; payload: string }
  | { type: "SET_FULLNAME_ERROR"; payload: string }
  | { type: "SET_FULLNAME_ERROR"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_PASSWORD_ERROR"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD_ERROR"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INVALID"; payload: boolean };

export type SignupReactiveElements = ReactiveElements & {
  fullNameInput: HTMLInputElement | null;
  fullNameError: HTMLSpanElement | null;
  emailInput: HTMLInputElement | null;
  emailError: HTMLSpanElement | null;
  passwordInput: HTMLInputElement | null;
  passwordError: HTMLSpanElement | null;
  confirmPasswordInput: HTMLInputElement | null;
  confirmPasswordError: HTMLSpanElement | null;
  signUpBtn: HTMLButtonElement | null;
  signUpForm: HTMLFormElement | null;
};

export type SignUpFormData = {
  fullName: string;
  email: string;
  password: string;
};
