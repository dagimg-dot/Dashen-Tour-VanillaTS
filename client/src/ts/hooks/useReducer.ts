import { Reducer } from "../types/types";

type ReducerReturnType<S, A> = [
  () => S,
  (actionList: A[]) => void,
  (listener: () => void) => () => void
];

const useReducer = <S, A>(
  reducer: Reducer<S, A>,
  initialState: S
): ReducerReturnType<S, A> => {
  let state = initialState;
  const listeners: Array<() => void> = [];

  const getState = (): S => state;

  const dispatch = (actionList: A[]) => {
    for (let action of actionList) {
      state = reducer(state, action);
    }
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return [getState, dispatch, subscribe];
};

export default useReducer;
