import { html, render } from "lit-html";
import { DestinationState } from "../types/destinationTypes";
import { NavigationBar } from "../components/NavigationBar";
import "../../css/destination.css";
import Footer from "../components/Footer";
import { SearchIcon } from "../components/Icons";
import { DestinationCard } from "../components/DestinationCard";
import "../../css/components/navigationbar.css";
import "../../css/components/destinationCard.css";
import { Pagination } from "../components/Pagination";
import { iterator } from "../utils/utilityFuncs";

class DestinationView {
  root: HTMLDivElement | null = null;

  render(state: DestinationState) {
    this.root = state.rootNode;
    this._renderView(state);
  }

  update(state: DestinationState) {
    this._renderView(state);
  }

  onPageLoad(handler: Function) {
    handler();
  }

  _renderView(state: DestinationState) {
    const skeletonObj = {
      name: "",
      location: "",
      description: "",
      rating: null,
      images: [{ url: "" }],
    };

    render(
      html`<div>
          <nav class="destination-nav">${NavigationBar()}</nav>
          <div class="main container-m">
            <header class="destination-header">
              <div class="dest-heading">
                <h1>All Destinations</h1>
                <h2>Page ${state.currentPage}</h2>
              </div>
              <div class="dest-header-right">
                <div>${SearchIcon}</div>
                <select class="dest-filter">
                  <option>Region</option>
                  <option>Amhara</option>
                  <option>Oromia</option>
                  <option>Tigray</option>
                </select>
              </div>
            </header>
            ${state.isLoading
              ? html`<div class="destinations-container">
                  ${iterator(8).map(() => {
                    return DestinationCard({
                      destinationInfo: skeletonObj,
                      isLoading: true,
                    });
                  })}
                </div>`
              : state.destinationList.length == 0
              ? html`<h1 class="dest-messages">There are no destinations</h1>`
              : html`<div class="destinations-container">
                  ${state.destinationList.map((destinationInfo) => {
                    return DestinationCard({
                      destinationInfo,
                      isLoading: state.isLoading,
                    });
                  })}
                </div>`}
            ${Pagination({
              currentPage: state.currentPage,
              totalPages: state.totalPages,
            })}
          </div>
        </div>
        ${Footer()}`,
      state.rootNode
    );
  }
}

export default new DestinationView();
