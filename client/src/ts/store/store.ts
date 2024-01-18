import { GlobalState } from "../types/types";

const initialState: GlobalState = {
  user: null,
  isAuthenticated: false,
};

const authState: GlobalState =
  JSON.parse(localStorage.getItem("auth-state")!) || initialState;

export { authState };
