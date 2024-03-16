import { Destination } from "../models/models";
import { ReactiveElements, State } from "./types";

export interface HomeState extends State {
  topRated: {
    isLoading: boolean;
    topRatedDestinationsList: Destination[];
  };
}

export type HomeReactiveElements = ReactiveElements & {
  contact: HTMLAnchorElement | null;
  packages: HTMLAnchorElement | null;
  toTopBtn: HTMLButtonElement | null;
};

export type HOMEACTIONS =
  | { type: "SET_TOP_RATED_LOADING"; payload: boolean }
  | { type: "SET_TOP_RATED_DEST_LIST"; payload: Destination[] };
