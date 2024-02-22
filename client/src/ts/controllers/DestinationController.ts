import { fetchDestinations } from "../api/destination.api";
import { NavigationBarController } from "../components/NavigationBar";
import { PaginationController } from "../components/Pagination";
import useReducer from "../hooks/useReducer";
import reducer from "../reducers/DestinationReducer";
import {
  DESTINATIONACTIONS,
  DestinationState,
} from "../types/destinationTypes";
import { CoreElements } from "../types/types";
import { scrollToTop } from "../utils/utilityFuncs";
import DestinationView from "../views/DestinationView";

const DestinationController = ({ root, title }: CoreElements) => {
  const initialState: DestinationState = {
    rootNode: root,
    isLoading: true,
    destinationList: [],
    currentPage: 1,
    totalPages: 0,
  };

  title.innerText = "Dashen Tour - Destinations";
  DestinationView.render(initialState);
  NavigationBarController();
  scrollToTop();

  const [state, dispatch, subscribe] = useReducer<
    DestinationState,
    DESTINATIONACTIONS
  >(reducer, initialState);

  subscribe(() => {
    const newState = state();
    DestinationView.update(newState);
  });

  const fetchDestWithQuery = async (pageNumber = 1) => {
    try {
      const destinations = await fetchDestinations();
      dispatch([
        { type: "SET_DESTINATION_LIST", payload: destinations },
        { type: "SET_LOADING", payload: false },
        { type: "SET_CURRENT_PAGE", payload: pageNumber },
      ]);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  PaginationController(fetchDestWithQuery, dispatch);

  DestinationView.onPageLoad(() => {
    fetchDestWithQuery();
  });
};

export default DestinationController;
