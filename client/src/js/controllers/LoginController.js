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
    const newState = state();
    // Update the view with the new state
    LoginView.render(newState);
  });

  LoginView.handleSubmit((event) => {
    event.preventDefault();

    console.log("submitted");

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      const email = LoginView.getEmailValue();
      const password = LoginView.getPasswordValue();

      dispatch([
        { type: "SET_LOADING", payload: true },
        { type: "SET_CREDENTIALS", payload: { email, password } },
      ]);

      // Imitating api request
      setTimeout(() => {
        dispatch([{ type: "SET_INVALID", payload: true }]);
      }, 3000);
    }
  });

  LoginView.handleClose(() => {
    dispatch([{ type: "SET_INVALID", payload: false }]);
  });
};

export default LoginController;
