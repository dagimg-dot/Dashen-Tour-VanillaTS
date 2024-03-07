import { ReactiveElements, State } from "./types";

export interface HomeState extends State {}

export type HomeReactiveElements = ReactiveElements & {
  contact: HTMLAnchorElement | null;
  packages: HTMLAnchorElement | null;
  toTopBtn: HTMLButtonElement | null;
};
