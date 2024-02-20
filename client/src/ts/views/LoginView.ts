import { LoginReactiveElements, LoginState } from "../types/loginTypes";
import { html, render } from "lit-html";
import { EventCallBack } from "../types/types";

import Spinner from "../components/Spinner";
import "../../css/login.css";
import { CompanyLogoIcon } from "../components/Icons";

class LoginView {
  root: HTMLDivElement | null = null;

  // Reactive Elements
  reactiveElements: LoginReactiveElements = {
    emailError: null,
    passwordError: null,
    errorModal: null,
    loginBtn: null,
    passwordInput: null,
    emailInput: null,
    loginForm: null,
    closeBtn: null,
  };

  render(state: LoginState) {
    this.root = state.rootNode;
    this._renderView(state);
    this._bindElements();
  }

  update(state: LoginState) {
    this._renderView(state);
  }

  _bindElements() {
    const refs = Object.keys(this.reactiveElements);

    refs.forEach((ref) => {
      this.reactiveElements[ref] = document.getElementById(ref);
    });
  }

  handleSubmit(handler: EventCallBack<SubmitEvent>) {
    this.reactiveElements.loginForm!["onsubmit"] = handler as EventListener;
  }

  handleClose(handler: EventCallBack<PointerEvent>) {
    this.reactiveElements.closeBtn!["onclick"] = handler as EventListener;
  }

  handleEmailInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.emailInput!["oninput"] = handler as EventListener;
  }

  handlePasswordInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.passwordInput!["oninput"] = handler as EventListener;
  }

  _renderView(state: LoginState) {
    render(
      html`
        <div class="login-wrapper">
          <div class="login-form">
            <div class="form-header">
              <a href="#/" class="auth-logo">
                <div class="logo">${CompanyLogoIcon}</div>
              </a>
              <div class="form-heading">
                <h2>Welcome back, Please login to your account</h2>
              </div>
            </div>
            <form id="loginForm" onsubmit="" class="form-container">
              <div class="input-wrapper email">
                <label for="email">Email</label>
                <input
                  id="emailInput"
                  type="text"
                  required
                  value="${state.email}"
                />
                <span id="emailError" class="error"
                  >${state.emailErrorMessage}</span
                >
              </div>
              <div class="input-wrapper password">
                <label for="password">Password</label>
                <input
                  id="passwordInput"
                  type="password"
                  required
                  value="${state.password}"
                />
                <span id="passwordError" class="error"
                  >${state.passwordErrorMessage}</span
                >
              </div>
              <div
                id="errorModal"
                class="error-container${state.isInvalid ? `` : ` hidden`}"
              >
                <span class="message">Incorrect email or password</span>
                <div id="closeBtn" onclick="" class="close-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0206 18.0105C17.294 18.2839 17.7372 18.2839 18.0106 18.0105C18.2839 17.7371 18.2839 17.2939 18.0106 17.0206L12.9901 12.0001L18.0105 6.97967C18.2839 6.7063 18.2839 6.26309 18.0105 5.98972C17.7371 5.71635 17.2939 5.71635 17.0206 5.98972L12.0001 11.0101L6.97969 5.98969C6.70632 5.71633 6.2631 5.71633 5.98974 5.98969C5.71637 6.26306 5.71637 6.70628 5.98974 6.97964L11.0102 12.0001L5.98969 17.0206C5.71633 17.294 5.71633 17.7372 5.98969 18.0105C6.26306 18.2839 6.70628 18.2839 6.97964 18.0105L12.0001 12.99L17.0206 18.0105Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>
              </div>
              <button id="loginBtn" type="submit" class="login-btn">
                ${!state.isLoading
                  ? html`<span>Login</span>`
                  : html`<div class="logging-in">
                      ${Spinner()}
                      <span>Logging In</span>
                    </div>`}
              </button>
              <div class="signup-link">
                <span>Don't have an account?</span>
                <a href="#/signup">Signup</a>
              </div>
            </form>
          </div>
        </div>
      `,
      state.rootNode
    );
  }
}

export default new LoginView();
