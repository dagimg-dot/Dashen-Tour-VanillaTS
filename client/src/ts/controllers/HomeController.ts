import { fetchTopRatedDestinations } from "../api/destination.api";
import { NavigationBarController } from "../components/NavigationBar";
import useReducer from "../hooks/useReducer";
import reducer from "../reducers/HomeReducer";
import { HOMEACTIONS, HomeState } from "../types/homeTypes";
import { CoreElements } from "../types/types";
import { applyScrollEvents, scrollToTop } from "../utils/utilityFuncs";
import HomeView from "../views/HomeView";

const HomeController = ({ root, title }: CoreElements) => {
  const initialState: HomeState = {
    rootNode: root,
    topRated: {
      isLoading: true,
      topRatedDestinationsList: [],
    },
  };

  title.innerText = "Dashen Tour";
  HomeView.render(initialState);
  applyScrollEvents();
  NavigationBarController();

  const [state, dispatch, subscribe] = useReducer<HomeState, HOMEACTIONS>(
    reducer,
    initialState
  );

  subscribe(() => {
    const newState = state();
    HomeView.update(newState);
  });

  const fetchTopDestinations = async () => {
    try {
      const topDestinations = await fetchTopRatedDestinations();
      console.log(topDestinations)
      dispatch([
        { type: "SET_TOP_RATED_DEST_LIST", payload: topDestinations },
        { type: "SET_TOP_RATED_LOADING", payload: false },
      ]);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  HomeView.handleNavLinkClick((event: PointerEvent) => {
    event.preventDefault();

    const navLinkId = (event.target as HTMLAnchorElement).id;
    const sectionId = "section-" + navLinkId;
    const el = document.getElementById(sectionId) as HTMLElement;

    el.scrollIntoView({ behavior: "smooth" });
  });

  HomeView.handleToTopButtonClick(() => scrollToTop());

  HomeView.onPageLoad(async () => {
    await fetchTopDestinations();
  });
};

export default HomeController;
