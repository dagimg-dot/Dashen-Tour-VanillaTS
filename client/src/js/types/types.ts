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

export type EventCallBack<T> = (event: T) => void;

export type EventFullElement<T> = {
  event: string;
  el: HTMLElement | null;
  cb: EventCallBack<T> | null;
};

export interface HTMLTemplateLiteral extends String {}

export type Reducer<S, A> = (state: S, action: A) => S;
