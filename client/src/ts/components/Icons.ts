import { html } from "lit-html";
import "../../css/components/icons.css";

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

const SearchIcon = html`
  <svg
    width="24"
    height="24"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#555555"
      d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
    />
  </svg>
`;

const CompanyLogoIcon = (fill = "#411d0d") => html`
  <svg
    width="50"
    height="45"
    viewBox="0 0 83 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 59.1815C0 51.8507 1.3356 45.8768 4.00681 41.2598C8.64432 33.1184 15.1183 29.0477 23.4287 29.0477C28.2517 29.0477 32.3698 30.898 35.783 34.5987V11.0732L46.3565 6.31522H46.913V59.1815C46.913 66.5122 45.5774 72.4861 42.9062 77.1031C38.1945 85.2445 31.702 89.3152 23.4287 89.3152C15.2667 89.3152 8.79272 85.2445 4.00681 77.1031C1.3356 72.5566 0 66.5827 0 59.1815ZM11.13 59.1815C11.13 65.8074 11.8906 70.5301 13.4117 73.3496C15.9345 78.0018 19.2735 80.328 23.4287 80.328C27.621 80.328 30.96 78.0018 33.4457 73.3496C35.0039 70.4243 35.783 65.7016 35.783 59.1815C35.783 52.6613 35.0039 47.9386 33.4457 45.0133C30.9971 40.3963 27.6581 38.0878 23.4287 38.0878C19.1993 38.0878 15.8603 40.4316 13.4117 45.119C11.8906 48.0443 11.13 52.7318 11.13 59.1815Z"
      fill=${fill}
    />
    <path
      d="M57.1913 83V32.3648L46.913 37V28.5L57.1913 23.4906V4.69811L67.9214 0H68.4861V22.5L81.2421 28.5L83 24.0126L78.5 35.5L68.4861 31V78.3019L57.7561 83H57.1913Z"
      fill=${fill}
    />
  </svg>
  <h1 class="nav-company-name" style=${`color: ${fill}; padding-left: 8px`}>
    Dashen Tour
  </h1>
`;

const StarIcon = (fill = "white") => html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35">
    <path
      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      stroke-linejoin="round"
      fill=${fill}
    />
  </svg>
`;

const ChevronLeft = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon">
    <path
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </svg>
`;

const ChevronRight = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon">
    <path
      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
`;

const ChevronUp = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    width="24px"
    class="to-top"
  >
    <path
      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
`;

const CloseIcon = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="currentColor"
    height="20px"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
`;

export {
  SuccessIcon,
  ErrorIcon,
  SearchIcon,
  CompanyLogoIcon,
  StarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CloseIcon,
};
