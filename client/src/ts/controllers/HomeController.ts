import { NavigationBarController } from "../components/NavigationBar";
import { HomeState } from "../types/homeTypes";
import { CoreElements } from "../types/types";
import { applyStickyNavBar } from "../utils/utilityFuncs";
import HomeView from "../views/HomeView";

const HomeController = ({ root, title }: CoreElements) => {
  const initialState: HomeState = {
    rootNode: root,
  };

  title.innerText = "Dashen Tour";
  HomeView.render(initialState);
  applyStickyNavBar();
  NavigationBarController();

  HomeView.handleNavLinkClick((event: PointerEvent) => {
    event.preventDefault();

    const navLinkId = (event.target as HTMLAnchorElement).id;
    const sectionId = "section-" + navLinkId;
    const el = document.getElementById(sectionId) as HTMLElement;

    el.scrollIntoView({ behavior: "smooth" });
  });
};

export default HomeController;
