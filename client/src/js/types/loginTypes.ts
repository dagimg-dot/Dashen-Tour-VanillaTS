import { State } from "./types";

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
