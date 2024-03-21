import { html } from "lit-html";
import "../../css/components/modal.css";
import { CloseIcon } from "./Icons";
// import { Destination } from "../models/models";

// interface ModalProps {
//   detinationInfo: Destination;
// }

// const skeletonObj = {
//   name: "",
//   location: "",
//   description: "",
//   rating: null,
//   images: [{ url: "" }],
// };

const images = [
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
  "../../../src/assets/images/destinations/012.jpg",
];

const Modal = () => {
  const template = html`<div class="dest-overlay">
    <div class="dest-modal">
      <div class="dest-modal-header">
        <div></div>
        <div class="dest-modal-heading">Lake tana | Bahir Dar</div>
        <div class="close-container" id="closeBtn">${CloseIcon}</div>
      </div>
      <div class="dest-modal-imgs">
        ${images.map((img) => {
          return html`<div class="dest-modal-img"><img src=${img} /></div>`;
        })}
      </div>
    </div>
  </div>`;

  return template;
};

const ModalController = (destinationId: number) => {
  const modal = document.querySelector(".dest-modal") as HTMLDivElement;
  const destOverlay = document.querySelector(".dest-overlay") as HTMLDivElement;
  const closeBtn = document.getElementById("closeBtn") as HTMLDivElement;

  const open = () => {
    modal.classList.add("active");
    destOverlay.classList.add("active");
    destOverlay.classList.add("overlay");
    document.body.classList.add("overflow-hidden");

    const scrollY = window.scrollY || window.pageYOffset;
    destOverlay.style.top = scrollY + "px";
  };

  const close = () => {
    modal.classList.remove("active");
    destOverlay.classList.remove("active");
    destOverlay.classList.remove("overlay");
    document.body.classList.remove("overflow-hidden");
  };

  open();

  destOverlay.onclick = (event: MouseEvent) => {
    if ((event.target as HTMLDivElement).contains(modal)) {
      close();
    }
  };

  closeBtn.onclick = () => close();

  console.log(destinationId);
};

export { Modal, ModalController };
