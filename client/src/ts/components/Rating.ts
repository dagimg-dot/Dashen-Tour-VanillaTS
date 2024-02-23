import { html } from "lit-html";
import { iterator } from "../utils/utilityFuncs";
import { StarIcon } from "./Icons";

interface RatingProps {
  rating: number | null;
}

const MAX_RATING = 5;

const UnRated = html`<div>
  ${StarIcon()} ${StarIcon()} ${StarIcon()} ${StarIcon()} ${StarIcon()}
</div> `;

const Rating = ({ rating }: RatingProps) => {
  const template = html`<div>
    ${rating
      ? iterator(MAX_RATING).map((num) => {
          return num < rating ? StarIcon("orange") : StarIcon("white");
        })
      : UnRated}
  </div>`;

  return template;
};

export { Rating };
