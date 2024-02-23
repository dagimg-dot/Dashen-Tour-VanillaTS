import { html, render } from "lit-html";
import "../../css/signup.css";
import { SignUpState, SignupReactiveElements } from "../types/signupTypes";
import Spinner from "../components/Spinner";
import { EventCallBack } from "../types/types";
import { CompanyLogoIcon } from "../components/Icons";

class SignupView {
  root: HTMLDivElement | null = null;

  reactiveElements: SignupReactiveElements = {
    fullNameInput: null,
    fullNameError: null,
    emailInput: null,
    emailError: null,
    passwordInput: null,
    passwordError: null,
    confirmPasswordInput: null,
    confirmPasswordError: null,
    signUpBtn: null,
    signUpForm: null,
  };

  render(state: SignUpState) {
    this.root = state.rootNode;
    this._renderView(state);
    this._bindElements();
  }

  update(state: SignUpState) {
    this._renderView(state);
  }

  _bindElements() {
    const refs = Object.keys(this.reactiveElements);

    refs.forEach((ref) => {
      this.reactiveElements[ref] = document.getElementById(ref);
    });
  }

  handleSubmit(handler: EventCallBack<SubmitEvent>) {
    this.reactiveElements.signUpForm!["onsubmit"] = handler;
  }

  handleFullNameInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.fullNameInput!["oninput"] = handler as EventListener;
  }

  handleEmailInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.emailInput!["oninput"] = handler as EventListener;
  }

  handlePasswordInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.passwordInput!["oninput"] = handler as EventListener;
  }

  handleConfirmPasswordInput(handler: EventCallBack<InputEvent>) {
    this.reactiveElements.confirmPasswordInput!["oninput"] =
      handler as EventListener;
  }

  _renderView(state: SignUpState) {
    render(
      html`
        <div class="signup-wrapper">
          <div class="signup-form">
            <div class="form-header">
              <a href="#/" class="auth-logo">
                <div class="logo">${CompanyLogoIcon()}</div>
              </a>
              <div class="form-heading">
                <h2>Become a member and enjoy your unforgettable trips</h2>
              </div>
            </div>
            <form id="signUpForm" class="form-container">
              <div class="input-wrapper full-name">
                <label for="full-name">Full Name</label>
                <input
                  type="text"
                  id="fullNameInput"
                  required
                  value="${state.fullName}"
                />
                <span id="fullNameError" class="error"
                  >${state.fullNameErrorMessage}</span
                >
              </div>
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
              <div class="input-wrapper confirm-password">
                <label for="confirm-password">Confirm Password</label>
                <input
                  id="confirmPasswordInput"
                  type="password"
                  required
                  value="${state.confirmPassword}"
                />
                <span id="confirmPasswordError" class="error"
                  >${state.confirmPasswordErrorMessage}</span
                >
              </div>
              <button id="signUpBtn" type="submit" class="signup-btn">
                ${!state.isLoading
                  ? html`<span>Signup</span>`
                  : html`<div class="signing-up">
                      ${Spinner()}
                      <span>Signing Up</span>
                    </div>`}
              </button>
              <div class="login-link">
                <span>Already have an account?</span>
                <a href="#/login">Login</a>
              </div>
            </form>
          </div>
        </div>
      `,
      state.rootNode
    );
  }
}

export default new SignupView();
