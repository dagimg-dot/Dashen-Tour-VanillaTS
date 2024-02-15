import { html, render } from "lit-html";
import { DestinationState } from "../types/destinationTypes";
import { NavigationBar } from "../components/NavigationBar";
import "../../css/destination.css";
import Footer from "../components/Footer";

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
    render(
      html`<div>
        <nav class="destination-nav">${NavigationBar()}</nav>
        <div class="other">
          <div>hello</div>
        </div>
      </div>
      ${Footer()}
      `,
      state.rootNode
    );
  }
}

export default new DestinationView();
