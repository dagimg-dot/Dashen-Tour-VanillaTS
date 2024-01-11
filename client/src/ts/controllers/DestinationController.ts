import { DestinationState } from "../types/destinationTypes";
import { CoreElements } from "../types/types";
import DestinationView from "../views/DestinationView";

const DestinationController = ({ root, title }: CoreElements) => {
  const initialState: DestinationState = {
    rootNode: root,
  };

  (() => {
    title.innerText = "Dashen Tour - Destinations";
    DestinationView.render(initialState);
  })();
};

export default DestinationController;
