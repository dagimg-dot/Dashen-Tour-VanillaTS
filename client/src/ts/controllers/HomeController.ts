import { HomeState } from "../types/homeTypes";
import { CoreElements } from "../types/types";
import { applyStickyNavBar } from "../utils/utilityFuncs";
import HomeView from "../views/HomeView";

const HomeController = ({ root, title }: CoreElements) => {
  const initialState: HomeState = {
    rootNode: root,
  };

  (() => {
    title.innerText = "Dashen Tour";
    HomeView.render(initialState);
    applyStickyNavBar();
  })();
};

export default HomeController;
