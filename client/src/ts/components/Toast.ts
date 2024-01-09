import { html } from "lit-html";
import "../../css/components/toast.css";

const Toast = (message: string) => {
  const template = html` <div class="notification">
    <div class="notification__body">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512 "
        class="notification__icon"
      >
        <path
          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
        />
      </svg>
      <p class="notification__message">${message}</p>
    </div>
    <div class="notification__progress"></div>
  </div>`;

  return template;
};

export default Toast;
