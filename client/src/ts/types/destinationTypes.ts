import { Destination } from "../models/models";
import { State } from "./types";

export interface DestinationState extends State {
  isLoading: boolean;
  destinationList: Destination[];
}

export type DESTINATIONACTIONS =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_DESTINATION_LIST"; payload: Destination[] };
