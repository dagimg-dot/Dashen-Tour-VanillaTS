import { Destination } from "../models/models";

const API_BASE_URL = "/api";

const fetchDestinations = async (): Promise<Destination[]> => {
  const url = `${API_BASE_URL}/destinations`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    throw new Error("Failed to fetch destinations");
  }
  return data.data;
};

export { fetchDestinations };
