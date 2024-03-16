import { HOMEACTIONS, HomeState } from "../types/homeTypes";
import { PageAction } from "../types/types";

const HomeReducer = (
  state: HomeState,
  action: PageAction<HOMEACTIONS>
): HomeState => {
  switch (action.type) {
    case "SET_TOP_RATED_LOADING":
      return {
        ...state,
        topRated: {
          ...state.topRated,
          isLoading: action.payload,
        },
      };

    case "SET_TOP_RATED_DEST_LIST":
      return {
        ...state,
        topRated: {
          ...state.topRated,
          topRatedDestinationsList: action.payload,
        },
      };

    default:
      return state;
  }
};

export default HomeReducer;
