import { CoreElements } from "../types/types";
import HomeView from "../views/HomeView";

const HomeController = ({ root, title }: CoreElements) => {
  title.innerText = "Dashen Tour";
  root.innerHTML = HomeView.generateMarkup();
};

export default HomeController;
