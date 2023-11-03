import useReducer from "../hooks/useReducer.js";
import reducer from "../reducers/LoginReducer.js";
import LoginView from "../views/LoginView.js";

const LoginController = ({ root, css, title }) => {
  const initialState = {
    rootNode: root,
    credentials: {
      email: "",
      password: "",
    },
    isLoading: false,
    isInvalid: false,
  };

  (() => {
    // This is for live server
    // css.setAttribute("href", "./src/css/login.css");

    // This is for parcel
    css.setAttribute("href", "/index.4cdbd4fe.css");
    title.innerText = "Dashen Tour - Login";

    // Initial Render
    LoginView.render(initialState);
  })();

  const [state, dispatch, subscribe] = useReducer(reducer, initialState);

  // Subscribe to state changes
  subscribe(() => {
    console.log("updating");
    const newState = state();
    console.log(newState);
    // Update the view with the new state
    LoginView.update(newState);
  });

  LoginView.handleSubmit(() => {
    console.log("submitted");

    if (state().isLoading) {
      dispatch({ type: "SET_LOADING", payload: false });
    } else {
      const email = LoginView.getEmailValue();
      const password = LoginView.getPasswordValue();

      dispatch({ type: "SET_CREDENTIALS", payload: { email, password } });

      dispatch({ type: "SET_LOADING", payload: true });
      setTimeout(() => {
        dispatch({ type: "SET_INVALID", payload: true });
      }, 2000);
    }
  });
};

export default LoginController;
