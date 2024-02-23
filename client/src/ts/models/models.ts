export type Destination = {
  destinationId?: number;
  name: string;
  description: string;
  location: string;
  rating: number | null;
  images: { url: string }[];
};
