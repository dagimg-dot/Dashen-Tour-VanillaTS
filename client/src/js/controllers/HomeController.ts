import HomeView from "../views/HomeView";

const HomeController = ({ root, title }) => {
  title.innerText = "Dashen Tour"
  root.innerHTML = HomeView.generateMarkup();
};

export default HomeController;
