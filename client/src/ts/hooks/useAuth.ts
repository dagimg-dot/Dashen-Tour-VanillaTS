import { authState } from "../store/store";
import { GlobalState } from "../types/types";

const useAuth = (): [() => GlobalState, (newState: GlobalState) => void] => {
  const getState = () => authState;

  function setState(newState: GlobalState) {
    Object.assign(authState, newState);
    localStorage.setItem("auth-state", JSON.stringify(newState));
  }

  return [getState, setState];
};

export default useAuth;
