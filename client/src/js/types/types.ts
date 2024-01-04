export type CoreElements = {
  root: HTMLDivElement;
  title: HTMLTitleElement;
};

export type Controller = (coreElements: CoreElements) => void;

export type Route = {
  path: string;
  controller: Controller;
};

export type Action = {
  type: string;
  payload: any;
};

export type PageAction<T> = {
  type: T;
  payload: any;
};

export type State = {
  rootNode: HTMLDivElement;
};

export type EventCallBack = (event: Event) => void;

export type EventFullElement = {
  event: string;
  el: HTMLElement | null;
  cb: EventCallBack | null;
};