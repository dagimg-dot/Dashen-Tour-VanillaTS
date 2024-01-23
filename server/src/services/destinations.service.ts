import { DB } from '@/database';
import { Destination } from '@/interfaces/destinations.interface';
import { Service } from 'typedi';

@Service()
export class DestinationService {
  public destinations = DB.Destinations;

  public async findAllDestinations(): Promise<Destination[]> {
    const allDestinations: Destination[] = await DB.Destinations.findAll();
    return allDestinations;
  }

  public async createDestination(destinationdData: Destination): Promise<Destination> {
    const createDestinatonData: Destination = await DB.Destinations.create(destinationdData);
    return createDestinatonData;
  }
}
