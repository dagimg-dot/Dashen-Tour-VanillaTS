import { CoreElements, Route, RoutePath } from "../types/types";

import PageNotFound from "../views/PageNotFound";

class Router {
  coreElements!: CoreElements;
  routes!: Route[];
  currentRoute!: Route | null;

  init(coreElements: CoreElements, routes: Route[]) {
    this.coreElements = coreElements;
    this.routes = routes;
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange();
  }

  getRoute(route: string) {
    return this.routes.find((r) => r.path === route);
  }

  renderPageNotFound() {
    PageNotFound.renderView(this.coreElements.root);
  }

  push(path: RoutePath) {
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
