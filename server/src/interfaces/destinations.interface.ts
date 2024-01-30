import { DestinationImage } from '@/interfaces/destinationImage.interface';

export interface Destination {
  destinationId?: number;
  name: string;
  description: string;
  location: string;
  images?: DestinationImage[];
}
