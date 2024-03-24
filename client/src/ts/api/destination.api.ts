import { Destination } from "../models/models";

const API_BASE_URL = "/api";

const fetchDestinations = async (
  page: number
): Promise<{ destinations: Destination[]; totalPages: number }> => {
  const url = `${API_BASE_URL}/destinations?page=${page}`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    throw new Error("Failed to fetch destinations");
  }
  return { destinations: data.data, totalPages: data.totalPages };
};

const fetchTopRatedDestinations = async (): Promise<Destination[]> => {
  const url = `${API_BASE_URL}/destinations/toprated`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    throw new Error("Failed to fetch top destinations");
  }

  return data.data;
};

const fetchDestination = async (
  destinationId: number
): Promise<Destination> => {
  const url = `${API_BASE_URL}/destinations/${destinationId}`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.error) throw new Error("Failed to fetch destination");

  return data.data;
};

export { fetchDestinations, fetchTopRatedDestinations, fetchDestination };
