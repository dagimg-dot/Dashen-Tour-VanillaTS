import "../../css/components/toast.css";
import { SuccessIcon, ErrorIcon } from "./Icons";

type ToastProps = {
  type: "SUCCESS" | "ERROR";
  message: string;
  duration?: number;
};

class Toast {
  root!: HTMLDivElement;

  init(root: HTMLDivElement) {
    this.root = root;
  }

  showToast({ type, message, duration = 3000 }: ToastProps) {
    let template;

    if (type == "ERROR") {
      template = `<div class="toast toast-error">
        <div class="toast-body">
          ${ErrorIcon}
          <p class="toast-message toast-error">${message}</p>
        </div>
        <div class="toast-progress toast-progress-error"></div>
      </div>`;
    } else if (type == "SUCCESS") {
      template = `<div class="toast toast-success">
      <div class="toast-body">
        ${SuccessIcon}
        <p class="toast-message toast-success">${message}</p>
      </div>
      <div class="toast-progress toast-progress-success"></div>
    </div>`;
    }

    const toastContainer = document.createElement("div");
    toastContainer.innerHTML = template as string;

    this.root.insertAdjacentElement("beforebegin", toastContainer);

    setTimeout(() => {
      document.body.removeChild(toastContainer);
    }, duration);
  }
}

export default Toast;
