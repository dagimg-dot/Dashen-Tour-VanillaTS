export type Destination = {
  destinationId?: number;
  name: string;
  description: string;
  location: string;
  images: { url: string }[];
};

export interface Package {
  packageId?: number;
  name: string;
  numberOfDays: number;
  hotelStar: number;
  numberOfLocations: number;
  isFeatured: string;
}

export const DataSetFormMap: { [index: string]: string } = {
  day: "numberOfDays",
  location: "numberOfLocations",
  star: "hotelStar",
};
