const loginReducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      return {
        ...state,
        credentials: {
          email: action.payload.email,
          password: action.payload.password,
        },
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

export default loginReducer;
