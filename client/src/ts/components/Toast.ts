import "../../css/components/toast.css";

const SuccessIcon = `
  <svg
    width="36px"
    height="36px"
    viewBox="0 0 60 60"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        transform="translate(-150.000000, -190.000000)"
        fill="#aaec8a"
        fill-rule="nonzero"
      >
        <g transform="translate(150.000000, 190.000000)">
          <path
            d="M30,60 C13.4314575,60 0,46.5685425 0,30 C0,13.4314575 13.4314575,0 30,0 C46.5685425,0 60,13.4314575 60,30 C60,46.5685425 46.5685425,60 30,60 L30,60 Z M25.6318383,40.2764964 C26.6063439,41.2411679 28.1823541,41.2411679 29.1568598,40.2764964 L45.030746,24.656656 L41.5057245,21.0943488 L27.2808313,34.9211611 L20.6347559,28.153281 L17.0841754,31.5642544 L25.6318383,40.2764964 Z"
          ></path>
        </g>
      </g>
    </g>
  </svg>`;

const ErrorIcon = `
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14ZM18.2803 9.71967C18.5732 10.0126 18.5732 10.4874 18.2803 10.7803L15.0607 14L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L14 15.0607L10.7803 18.2803C10.4874 18.5732 10.0126 18.5732 9.71967 18.2803C9.42678 17.9874 9.42678 17.5126 9.71967 17.2197L12.9393 14L9.71967 10.7803C9.42678 10.4874 9.42678 10.0126 9.71967 9.71967C10.0126 9.42678 10.4874 9.42678 10.7803 9.71967L14 12.9393L17.2197 9.71967C17.5126 9.42678 17.9874 9.42678 18.2803 9.71967Z"
      fill="red"
    />
  </svg>
`;

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
