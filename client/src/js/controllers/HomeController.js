import HomeView from "../views/HomeView.js";

const HomeController = (root, css) => {
  // This is for parcel
  //   css.setAttribute("href", "/index.c92073ef.css");

  css.setAttribute("href", "./src/css/style.css");
  root.innerHTML = HomeView.generateMarkup();
};

export default HomeController;
