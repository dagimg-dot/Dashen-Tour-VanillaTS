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
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default DestinationReducer;
