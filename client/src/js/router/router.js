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

  getRoute(route) {
    return this.routes.find((r) => r.path === route);
  }

  renderPageNotFound() {
    this.coreElements.root.innerHTML = PageNotFound.generateMarkup();
  }

  push(path) {
    const route = this.getRoute(path);

    if (route) {
      const newHash = "#" + path;
      this.currentRoute = route;
      window.location.hash = newHash;
    } else {
      this.renderPageNotFound();
    }
  }

  handleRouteChange() {
    const hash = window.location.hash;

    const route = this.getRoute(hash.slice(1));

    if (route) {
      this.currentRoute = route;
      route.controller(this.coreElements);
    } else {
      this.renderPageNotFound();
    }
  }
}

export default Router;
