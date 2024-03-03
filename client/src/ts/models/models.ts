export type Destination = {
  destinationId?: number;
  name: string;
  description: string;
  location: string;
  rating: number | null;
  images: { url: string }[];
};

export interface Package {
  packageId?: number;
  name: string;
  numberOfDays: number;
  hotelStar: number;
  numberOfLocations: number;
  isFeatured: boolean;
}
