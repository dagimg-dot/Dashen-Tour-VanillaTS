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
