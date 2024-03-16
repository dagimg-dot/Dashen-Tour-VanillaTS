import { DB } from '@/database';
import { HttpException } from '@/exceptions/HttpException';
import { Destination } from '@/interfaces/destinations.interface';
import { DESTINATION_PER_PAGE } from '@/utils/constants';
import { Service } from 'typedi';

@Service()
export class DestinationService {
  public destinations = DB.Destinations;

  public async findAllDestinations(): Promise<Destination[]> {
    const allDestinations: Destination[] = await DB.Destinations.findAll({ include: 'images' });
    return allDestinations;
  }

  public async findDestinations(page: number): Promise<{ destinations: Destination[]; numberOfPages: number }> {
    const destinationLength = await DB.Destinations.count();
    const numberOfPages = Math.ceil(destinationLength / DESTINATION_PER_PAGE);
    const destinations: Destination[] = await DB.Destinations.findAll({
      include: 'images',
      limit: DESTINATION_PER_PAGE,
      offset: (page - 1) * DESTINATION_PER_PAGE,
    });

    return { destinations, numberOfPages };
  }

  public async findTopRatedDestinations(max = 3): Promise<Destination[]> {
    const destinations: Destination[] = await DB.Destinations.findAll({ include: 'images', order: [['rating', 'DESC']], limit: max });

    return destinations;
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

    if (destinationData.deletedImages.length !== 0) {
      destinationData.deletedImages.forEach(async imageData => {
        await DB.DestinationImages.destroy({ where: { url: imageData.url } });
      });
    }

    if (destinationData.images.length !== 0) {
      const newImages = await Promise.all(
        destinationData.images.map(async imageData => {
          const image = await DB.DestinationImages.create({ ...imageData, destinationId: destinationId });
          return image;
        }),
      );

      await findDestination.addImages(newImages);
    }

    await DB.Destinations.update({ ...destinationData }, { where: { destinationId: destinationId } });

    const updateDestination: Destination = await DB.Destinations.findByPk(destinationId, {
      include: 'images',
    });

    return updateDestination;
  }

  public async deleteDestination(destinationId: number): Promise<Destination> {
    const findDestination = await DB.Destinations.findByPk(destinationId);
    if (!findDestination) throw new HttpException(404, "Destination doesn't exist");

    await DB.Destinations.destroy({ where: { destinationId: destinationId } });

    return findDestination;
  }
}
