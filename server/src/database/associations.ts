import { DestinationModel } from '@/models/destinations.model';
import { DestinationImageModel } from '@/models/destinationImages.model';

export const initializeAssociations = () => {
  // Association of Destination and its images
  DestinationModel.associate();
  DestinationImageModel.associate();
};
