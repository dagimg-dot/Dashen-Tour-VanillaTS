import { html, render } from "lit-html";
import "../../css/components/modal.css";
import { CloseIcon } from "./Icons";
import { Destination } from "../models/models";
import { fetchDestination } from "../api/destination.api";
import { iterator } from "../utils/utilityFuncs";

interface ModalProps {
  destinationInfo?: Destination;
  isLoading?: boolean;
}

const Modal = ({ destinationInfo, isLoading }: ModalProps) => {
  const modalCont = document.getElementById("modal") as HTMLDivElement;

  const template = html`<div class="dest-overlay">
    <div class="dest-modal">
      <div class="dest-modal-header">
        <div></div>
        ${isLoading
          ? html`<div
              class="dest-modal-heading skeleton-text"
              style="width: 23rem; height: 3rem"
            ></div>`
          : html`<div class="dest-modal-heading">
              ${destinationInfo?.name + " | " + destinationInfo?.location}
            </div>`}
        <div class="close-container" id="closeBtn">${CloseIcon}</div>
      </div>
      <div class="dest-modal-imgs">
        ${isLoading
          ? iterator(6).map(() => {
              return html`<div
                class="dest-modal-img skeleton"
                style="width: 45rem; height: 35rem"
              ></div>`;
            })
          : destinationInfo?.images.map((img) => {
              return html`<div class="dest-modal-img">
                <img crossorigin="anonymous" src=${img.url} />
              </div>`;
            })}
      </div>
    </div>
  </div>`;

  render(template, modalCont);
};

const useState = <S>(Render: Function) => {
  function setState(newState: S) {
    Render({ destinationInfo: newState, isLoading: false });
  }

  return setState;
};

const ModalController = async (destinationId: number) => {
  Modal({ isLoading: true });

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

  const setDestination = useState<Destination>(Modal);

  const destinationInfo = await fetchDestination(destinationId);
  setDestination(destinationInfo);

  destOverlay.onclick = (event: MouseEvent) => {
    if ((event.target as HTMLDivElement).contains(modal)) {
      close();
    }
  };

  closeBtn.onclick = () => close();
};

export { Modal, ModalController };
