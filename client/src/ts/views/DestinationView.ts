import { html, render } from "lit-html";
import { DestinationState } from "../types/destinationTypes";
import { NavigationBar } from "../components/NavigationBar";
import "../../css/destination.css";
import Footer from "../components/Footer";
import { SearchIcon } from "../components/Icons";
import { DestinationCard } from "../components/DestinationCard";
import "../../css/components/navigationbar.css";
import { Destination } from "../models/models";

class DestinationView {
  root: HTMLDivElement | null = null;

  render(state: DestinationState) {
    this.root = state.rootNode;
    this._renderView(state);
  }

  update(state: DestinationState) {
    this._renderView(state);
  }

  _renderView(state: DestinationState) {
    const destinationInfo: Destination = {
      destinationId: 32,
      name: "Lake Tana",
      location: "Bahir Dar",
      description: "the best lake",
      images: [
        {
          url: "./src/assets/images/destinations/001.jpg",
        },
      ],
    };

    render(
      html`<div>
          <nav class="destination-nav">${NavigationBar()}</nav>
          <div class="main container-m">
            <header class="destination-header">
              <h1 class="dest-heading">All Destinations</h1>
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
            <div class="destinations-container">
              ${DestinationCard({ destinationInfo })}
              ${DestinationCard({ destinationInfo })}
              ${DestinationCard({ destinationInfo })}
              ${DestinationCard({ destinationInfo })}
              ${DestinationCard({ destinationInfo })}
              ${DestinationCard({ destinationInfo })}
            </div>
            <!-- Pagination -->
            <div>Pagination</div>
          </div>
        </div>
        ${Footer()}`,
      state.rootNode
    );
  }
}

export default new DestinationView();
