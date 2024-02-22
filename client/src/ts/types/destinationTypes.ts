import { Destination } from "../models/models";
import { State } from "./types";

export interface DestinationState extends State {
  isLoading: boolean;
  destinationList: Destination[];
  currentPage: number;
  totalPages: number;
}

export type DESTINATIONACTIONS =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_DESTINATION_LIST"; payload: Destination[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_TOTAL_PAGES"; payload: number };
