import updateDOM from "../utils/updateDOM";
import Spinner from "../components/Spinner";

class LoginView {
  constructor() {
    this.root = null;

    // Reactive Elements
    this.ReactiveElements = {
      emailError: undefined,
      passwordError: undefined,
      errorModal: undefined,
      loginBtn: undefined,
      passwordInput: { event: "input", el: undefined, cb: undefined },
      emailInput: { event: "input", el: undefined, cb: undefined },
      loginForm: { event: "submit", el: undefined, cb: undefined },
      closeBtn: { event: "click", el: undefined, cb: undefined },
    };
  }

  render(state) {
    this.root = state.rootNode;
    this.root.innerHTML = this._generateMarkup(state);
    this._bindElements();
    // this._attachEventListeners();

    // Test - Passed, except Callbacks
    // console.log(this.getElements());
  }

  update(state) {
    const elements = this.getElements();
    updateDOM(elements, this._generateMarkup(state));
    // console.log(this.getElements());
  }

  _bindElements() {
    const refs = Object.keys(this.ReactiveElements);

    refs.forEach((ref) => {
      if (typeof this.ReactiveElements[ref] === "object") {
        this.ReactiveElements[ref].el = document.getElementById(ref);
      } else {
        this.ReactiveElements[ref] = document.getElementById(ref);
      }
    });
  }

  _attachEventListeners() {
    const refs = Object.keys(this.ReactiveElements);

    refs.forEach((ref) => {
      if (Object.keys(this.ReactiveElements[ref]).includes("event")) {
        const elObj = this.ReactiveElements[ref];
        elObj.el.addEventListener(elObj.event, elObj.cb);
      }
    });
  }

  getElements() {
    return {
      ReactiveElements: this.ReactiveElements,
    };
  }

  handleSubmit(handler) {
    this.ReactiveElements.loginForm.el["onsubmit"] = handler;
    this.ReactiveElements.loginForm.cb = handler;
  }

  handleClose(handler) {
    this.ReactiveElements.closeBtn.el["onclick"] = handler;
    this.ReactiveElements.closeBtn.cb = handler;
  }

  handleEmailInput(handler) {
    this.ReactiveElements.emailInput.el["oninput"] = handler;
    this.ReactiveElements.emailInput.cb = handler;
  }

  handlePasswordInput(handler) {
    this.ReactiveElements.passwordInput.el["oninput"] = handler;
    this.ReactiveElements.passwordInput.cb = handler;
  }

  _generateMarkup(state) {
    return `
            <div class="login-wrapper">
                <div class="login-form">
                    <div class="form-header">
                        <div class="logo">
                            <svg width="83" height="90" viewBox="0 0 83 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 59.1815C0 51.8507 1.3356 45.8768 4.00681 41.2598C8.64432 33.1184 15.1183 29.0477 23.4287 29.0477C28.2517 29.0477 32.3698 30.898 35.783 34.5987V11.0732L46.3565 6.31522H46.913V59.1815C46.913 66.5122 45.5774 72.4861 42.9062 77.1031C38.1945 85.2445 31.702 89.3152 23.4287 89.3152C15.2667 89.3152 8.79272 85.2445 4.00681 77.1031C1.3356 72.5566 0 66.5827 0 59.1815ZM11.13 59.1815C11.13 65.8074 11.8906 70.5301 13.4117 73.3496C15.9345 78.0018 19.2735 80.328 23.4287 80.328C27.621 80.328 30.96 78.0018 33.4457 73.3496C35.0039 70.4243 35.783 65.7016 35.783 59.1815C35.783 52.6613 35.0039 47.9386 33.4457 45.0133C30.9971 40.3963 27.6581 38.0878 23.4287 38.0878C19.1993 38.0878 15.8603 40.4316 13.4117 45.119C11.8906 48.0443 11.13 52.7318 11.13 59.1815Z"
                                    fill="#411D0D" fill-opacity="1" />
                                <path
                                    d="M57.1913 83V32.3648L46.913 37V28.5L57.1913 23.4906V4.69811L67.9214 0H68.4861V22.5L81.2421 28.5L83 24.0126L78.5 35.5L68.4861 31V78.3019L57.7561 83H57.1913Z"
                                    fill="#411D0D" fill-opacity="1" />
                            </svg>
                            <h1 class="company-name">Dashen Tour</h1>
                        </div>
                        <div class="form-heading">
                            <h2>Welcome back, Please login to your account</h2>
                        </div>
                    </div> 
                    <form id="loginForm" onsubmit="" class="form-container">
                        <div class="input-wrapper email">
                            <label for="email">Email</label>
                            <input id="emailInput" type="text" required value="${
                              state.email
                            }"/>
                            <span id="emailError" class="error">${
                              state.emailErrorMessage
                            }</span>
                            </div>
                          <div class="input-wrapper password">
                            <label for="password">Password</label>
                            <input id="passwordInput" type="password" required value="${
                              state.password
                            }"/>
                            <span id="passwordError" class="error">${
                              state.passwordErrorMessage
                            }</span>
                        </div>
                        <div id="errorModal" class="error-container${
                          state.isInvalid ? `` : ` hidden`
                        }">
                              <span class="message">Incorrect username or password</span>
                                <div id="closeBtn" onclick="" class="close-btn">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M17.0206 18.0105C17.294 18.2839 17.7372 18.2839 18.0106 18.0105C18.2839 17.7371 18.2839 17.2939 18.0106 17.0206L12.9901 12.0001L18.0105 6.97967C18.2839 6.7063 18.2839 6.26309 18.0105 5.98972C17.7371 5.71635 17.2939 5.71635 17.0206 5.98972L12.0001 11.0101L6.97969 5.98969C6.70632 5.71633 6.2631 5.71633 5.98974 5.98969C5.71637 6.26306 5.71637 6.70628 5.98974 6.97964L11.0102 12.0001L5.98969 17.0206C5.71633 17.294 5.71633 17.7372 5.98969 18.0105C6.26306 18.2839 6.70628 18.2839 6.97964 18.0105L12.0001 12.99L17.0206 18.0105Z"
                                      fill="#CCCCCC" />
                                  </svg>
                                </div>
                        </div>
                        <button id="loginBtn" type="submit" class="login-btn">
                          ${
                            !state.isLoading
                              ? "<span>Login</span>"
                              : `<div class="logging-in">${Spinner(
                                  {}
                                )} <span>Logging In</span></div>`
                          }  
                        </button>
                        <div class="signup-link">
                            <span>Don't have an account?</span>
                            <a href="#/signup">Signup</a>
                        </div>
                    </form>
                </div>
            </div>
        `;
  }
}

export default new LoginView();
