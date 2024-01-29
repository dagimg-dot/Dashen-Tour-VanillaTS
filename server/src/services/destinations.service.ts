import { DB } from '@/database';
import { HttpException } from '@/exceptions/HttpException';
import { Destination } from '@/interfaces/destinations.interface';
import { Service } from 'typedi';

@Service()
export class DestinationService {
  public destinations = DB.Destinations;

  public async findAllDestinations(): Promise<Destination[]> {
    const allDestinations: Destination[] = await DB.Destinations.findAll();
    return allDestinations;
  }

  public async findDestinationById(destinationId: number): Promise<Destination> {
    const findDestination = await DB.Destinations.findByPk(destinationId, {
      include: 'images',
    });
    if (!findDestination) throw new HttpException(404, "Destination doesn't exist");

    return findDestination;
  }

  public async createDestination(destinationdData: Destination): Promise<Destination> {
    const createDestinatonData: Destination = await DB.Destinations.create(destinationdData, {
      include: 'images',
    });

    return createDestinatonData;
  }

  public async updateDestination(destinationId: number, destinationData: Destination): Promise<Destination> {
    const findDestination = await DB.Destinations.findByPk(destinationId);
    if (!findDestination) throw new HttpException(404, "Destination doesn't exist");

    await DB.Destinations.update({ ...destinationData }, { where: { destinationId: destinationId } });

    const updateDestination: Destination = await DB.Destinations.findByPk(destinationId);
    return updateDestination;
  }

  public async deleteDestination(destinationId: number): Promise<Destination> {
    const findDestination = await DB.Destinations.findByPk(destinationId);
    if (!findDestination) throw new HttpException(404, "Destination doesn't exist");

    await DB.Destinations.destroy({ where: { destinationId: destinationId } });

    return findDestination;
  }
}
