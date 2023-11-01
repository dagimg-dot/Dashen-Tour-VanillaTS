import PageNotFound from "../views/PageNotFound.js";

class Router {
  coreElements;
  routes;
  currentRoute = null;

  init(coreElements, routes) {
    this.coreElements = coreElements;
    this.routes = routes;
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange();
  }

  push(path) {
    const route = this.routes.find((r) => r.path === path);

    if (route) {
      const newHash = "#" + path;
      this.currentRoute = route;
      window.location.hash = newHash;
    } else {
      this.root.innerHTML = PageNotFound.generateMarkup();
    }
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
