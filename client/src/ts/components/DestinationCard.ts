import { html } from "lit-html";
import { Destination } from "../models/models";
import { noImage } from "../../static";
import { cstyle } from "../utils/utilityFuncs";
import { Rating } from "./Rating";
import { ifDefined } from "lit-html/directives/if-defined.js";

interface DestinationProps {
  destinationInfo: Destination;
  isLoading: boolean;
}

const DestinationCard = ({ destinationInfo, isLoading }: DestinationProps) => {
  const template = html`
      <div class=${cstyle(
        isLoading,
        true,
        "dest-image",
        "skeleton"
      )} data-idx=${ifDefined(destinationInfo.destinationId)}>
        ${
          !isLoading
            ? destinationInfo.images.length == 0
              ? html`<img src=${noImage} />`
              : html`<img
                  src=${destinationInfo.images[0].url}
                  crossorigin="anonymous"
                />`
            : ""
        }
        <div class="dest-info">
          <span class=${cstyle(
            isLoading,
            true,
            "",
            "dest-info-container skeleton-text"
          )}>${destinationInfo.name}</span>
          <span class=${cstyle(
            isLoading,
            true,
            "",
            "dest-info-container skeleton-text"
          )}>${destinationInfo.location}</span>
        </div>
        <div class="dest-rating">
          ${Rating({ rating: destinationInfo.rating })}
        </div>
      </div>
  </div>
`;

  return template;
};

const DestinationCardController = (controller: Function) => {
  const destImage = document.querySelectorAll(
    ".dest-image"
  ) as unknown as HTMLDivElement[];

  destImage.forEach((container) => {
    container.onclick = () => controller(container.dataset.idx);
  });
};

export { DestinationCard, DestinationCardController };
