import useReducer from "../hooks/useReducer.js";
import useRouter from "../hooks/useRouter.js";
import reducer from "../reducers/LoginReducer.js";
import LoginView from "../views/LoginView.js";

const LoginController = ({ root, css, title }) => {
  const initialState = {
    rootNode: root,
    email: "",
    emailErrorMessage: "",
    password: "",
    passwordErrorMessage: "",
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
    LoginView.update(newState);
  });

  // Event Handlers
  LoginView.handleSubmit((event) => {
    event.preventDefault();

    console.log("submitted");

    if (state().isLoading) {
      dispatch([{ type: "SET_LOADING", payload: false }]);
    } else {
      dispatch([{ type: "SET_LOADING", payload: true }]);

      // Imitating api request
      setTimeout(() => {
        dispatch([{ type: "SET_INVALID", payload: true }]);
        console.log(state());
      }, 3000);
    }
  });

  LoginView.handleClose((event) => {
    dispatch([{ type: "SET_INVALID", payload: false }]);
  });

  LoginView.handleLogoClick(() => {
    const router = useRouter();
    router.push("/");
  });

  LoginView.handleEmailInput((event) => {
    dispatch([
      { type: "SET_EMAIL", payload: event.target.value },
      { type: "SET_EMAIL_ERROR", payload: event.target.value },
    ]);
  });

  LoginView.handlePasswordInput((event) => {
    dispatch([
      { type: "SET_PASSWORD", payload: event.target.value },
      { type: "SET_PASSWORD_ERROR", payload: event.target.value },
    ]);
  });
};

export default LoginController;
