import { html, render } from "lit-html";
import "../../css/components/modal.css";
import { CloseIcon } from "./Icons";
import { Destination } from "../models/models";
import { fetchDestination } from "../api/destination.api";

interface ModalProps {
  destinationInfo: Destination;
}

const skeletonObj = {
  name: "",
  location: "",
  description: "",
  rating: null,
  images: [{ url: "" }],
};

const Modal = ({ destinationInfo }: ModalProps) => {
  const template = html`<div class="dest-overlay">
    <div class="dest-modal">
      <div class="dest-modal-header">
        <div></div>
        <div class="dest-modal-heading">
          ${destinationInfo.name + " | " + destinationInfo.location}
        </div>
        <div class="close-container" id="closeBtn">${CloseIcon}</div>
      </div>
      <div class="dest-modal-imgs">
        ${destinationInfo.images.map((img) => {
          return html`<div class="dest-modal-img">
            <img crossorigin="anonymous" src=${img.url} />
          </div>`;
        })}
      </div>
    </div>
  </div>`;

  return template;
};

const useState = <S extends Destination>(container: HTMLElement) => {
  function setState(newState: S) {
    render(Modal({ destinationInfo: newState }), container);
  }

  return setState;
};

const ModalController = async (destinationId: number) => {
  const modalCont = document.getElementById("modal") as HTMLDivElement;
  render(Modal({ destinationInfo: skeletonObj }), modalCont);

  const setDestination = useState<Destination>(modalCont);

  const destinationInfo = await fetchDestination(destinationId);
  setDestination(destinationInfo);

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
};

export { Modal, ModalController };
