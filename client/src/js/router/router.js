import PageNotFound from "../views/PageNotFound.js";

class Router {
  constructor(coreElements, routes) {
    this.coreElements = coreElements
    this.routes = routes;
    this.currentRoute = null;
  }

  init() {
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange();
  }

  handleRouteChange() {
    const hash = window.location.hash;

    const route = this.routes.find((r) => r.path === hash.slice(1));

    if (route) {
      this.currentRoute = route;
      route.controller(this.coreElements);
    } else {
      this.root.innerHTML = PageNotFound.generateMarkup();
    }
  }
}

export default Router;
