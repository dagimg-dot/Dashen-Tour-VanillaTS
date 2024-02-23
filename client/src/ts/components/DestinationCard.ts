import { html } from "lit-html";
import { StarIcon } from "./Icons";
import { Destination } from "../models/models";
import { noImage } from "../../static";
import { cstyle } from "../utils/utilityFuncs";

interface DestinationProps {
  destinationInfo: Destination;
  isLoading: boolean;
}

const DestinationCard = ({ destinationInfo, isLoading }: DestinationProps) => {
  const template = html`
      <div class=${cstyle(isLoading, true, "dest-image", "skeleton")}>
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
          ${StarIcon}
          ${StarIcon}
          ${StarIcon}
          ${StarIcon}
          ${StarIcon}
        </div>
      </div>
  </div>
`;

  return template;
};

export { DestinationCard };
