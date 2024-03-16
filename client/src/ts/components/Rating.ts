import { html } from "lit-html";
import { iterator } from "../utils/utilityFuncs";
import { StarIcon } from "./Icons";

interface RatingProps {
  rating: number | null;
}

const MAX_RATING = 5;

const UnRated = html`
  <div>
    ${StarIcon("gray")} ${StarIcon("gray")} ${StarIcon("gray")}
    ${StarIcon("gray")} ${StarIcon("gray")}
  </div>
`;

const Rating = ({ rating }: RatingProps) => {
  const template = html`<div>
    ${rating !== null
      ? iterator(MAX_RATING).map((num) => {
          return num < rating ? StarIcon("orange") : StarIcon("#d5d5cf");
        })
      : UnRated}
  </div>`;

  return template;
};

export { Rating };
