import {
  DESTINATIONACTIONS,
  DestinationState,
} from "../types/destinationTypes";
import { PageAction } from "../types/types";

const DestinationReducer = (
  state: DestinationState,
  action: PageAction<DESTINATIONACTIONS>
): DestinationState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_DESTINATION_LIST":
      return {
        ...state,
        destinationList: action.payload,
      };
    default:
      return state;
  }
};

export default DestinationReducer;
