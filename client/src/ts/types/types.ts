export type CoreElements = {
  root: HTMLDivElement;
  title: HTMLTitleElement;
};

export type Controller = (coreElements: CoreElements) => void;

export type RoutePath = "" | "/" | "/signup" | "/login";

export type Route = {
  path: RoutePath;
  controller: Controller;
};

export interface PageAction<T extends { type: string }> {
  type: T["type"];
  payload: any;
}

export type State = {
  rootNode: HTMLDivElement;
};

export type EventCallBack<T extends Event> = (event: T) => void;

export interface HTMLTemplateLiteral extends String {}

export type Reducer<S, A> = (state: S, action: A) => S;

type ReactiveElement = HTMLElement | null;

export type ReactiveElements = Record<string, ReactiveElement>;
