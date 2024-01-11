import { html, render } from "lit-html";
import { DestinationState } from "../types/destinationTypes";

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
    render(html`<div>Destination View</div>`, state.rootNode);
  }
}

export default new DestinationView();
