import { html } from "lit-html";
import { StarIcon } from "./Icons";
import { Destination } from "../models/models";

interface DestinationProps {
  destinationInfo: Destination;
}

const DestinationCard = ({ destinationInfo }: DestinationProps) => {
  const template = html`
    <div class="dest-wrapper">
      <div class="dest-image">
        <img src=${destinationInfo.images[0].url} />
        <div class="dest-info">
          <span>${destinationInfo.name}</span>
          <span>${destinationInfo.location}</span>
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
  </div>
`;

  return template;
};

export { DestinationCard };