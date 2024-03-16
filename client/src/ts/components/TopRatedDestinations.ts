import { html } from "lit-html";
import "../../css/components/toprateddestinations.css";
import { Rating } from "./Rating";
import { HomeState } from "../types/homeTypes";
import { Destination } from "../models/models";
import { cstyle, iterator } from "../utils/utilityFuncs";

interface TopDestProps {
  destinationInfo: Destination;
  isLoading: boolean;
  swap: number;
}

const TopDestCard = ({ destinationInfo, isLoading, swap }: TopDestProps) => {
  if (swap % 2 == 1) {
    const template = html`
      <div class="top-dest-img-box">
        ${isLoading
          ? html`<div class="top-dest-img-skeleton skeleton"></div>`
          : html` <img
              crossorigin="anonymous"
              src=${destinationInfo.images[0].url}
              class="top-dest-img"
            />`}
      </div>
      <div class="top-dest-text-box">
        <p class="top-dest-number">፩</p>
        <h3
          class=${cstyle(
            isLoading,
            true,
            "heading-tertiary",
            "skeleton-text top-dest-info-container"
          )}
        >
          ${destinationInfo.name}
        </h3>
        ${isLoading
          ? html` <div class="top-dest-desc-skeleton">
              <p class="line-1 skeleton"></p>
              <p class="line-2 skeleton"></p>
            </div>`
          : html`<p class="top-dest-description">
              ${destinationInfo.description}
            </p>`}
        <div class="top-dest-rating">
          ${Rating({ rating: destinationInfo.rating })}
        </div>
      </div>
    `;

    return template;
  } else {
    const template = html`
      <div class="top-dest-text-box">
        <p class="top-dest-number">፩</p>
        <h3
          class=${cstyle(
            isLoading,
            true,
            "heading-tertiary",
            "skeleton-text top-dest-info-container"
          )}
        >
          ${destinationInfo.name}
        </h3>
        ${isLoading
          ? html` <div class="top-dest-desc-skeleton">
              <p class="line-1 skeleton"></p>
              <p class="line-2 skeleton"></p>
            </div>`
          : html`<p class="top-dest-description">
              ${destinationInfo.description}
            </p>`}
        <div class="top-dest-rating">
          ${Rating({ rating: destinationInfo.rating })}
        </div>
      </div>
      <div class="top-dest-img-box">
        ${isLoading
          ? html`<div class="top-dest-img-skeleton skeleton"></div>`
          : html` <img
              crossorigin="anonymous"
              src=${destinationInfo.images[0].url}
              class="top-dest-img"
            />`}
      </div>
    `;

    return template;
  }
};

const TopRatedDestinations = ({ topRated }: Pick<HomeState, "topRated">) => {
  const skeletonObj = {
    name: "",
    location: "",
    description: "",
    rating: null,
    images: [{ url: "" }],
  };

  const template = html`
    ${topRated.isLoading
      ? html`<div class="destinations grid grid-2-cols grid-center-v">
          ${iterator(3).map((num) => {
            return TopDestCard({
              destinationInfo: skeletonObj,
              isLoading: true,
              swap: num,
            });
          })}
        </div>`
      : html`<div class="destinations grid grid-2-cols grid-center-v">
          ${topRated.topRatedDestinationsList.map((dest, idx) => {
            return TopDestCard({
              destinationInfo: dest,
              isLoading: topRated.isLoading,
              swap: idx,
            });
          })}
        </div>`}
  `;

  return template;
};

export { TopRatedDestinations };
