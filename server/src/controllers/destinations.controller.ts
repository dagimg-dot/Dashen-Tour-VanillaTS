import { Destination } from '@/interfaces/destinations.interface';
import { DestinationService } from '@/services/destinations.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class DestinationController {
  public destinationService = Container.get(DestinationService);

  public getDestinations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.query.page) {
        const pageNumber = +req.query.page;
        const { destinations: findAllDestinationsData, numberOfPages } = await this.destinationService.findDestinations(pageNumber);

        // await new Promise(resolve => setTimeout(resolve, 4000));

        res.status(200).json({ data: findAllDestinationsData, totalPages: numberOfPages, message: 'findAll' });
      } else {
        const findAllDestinationsData = await this.destinationService.findAllDestinations();

        res.status(200).json({ data: findAllDestinationsData, message: 'findAll' });
      }
    } catch (error) {
      next(error);
    }
  };

  public getTopRatedDestinations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.query.max) {
        const max = +req.query.max;
        const topRatedDestinations = await this.destinationService.findTopRatedDestinations(max);

        // await new Promise(resolve => setTimeout(resolve, 3000));

        res.status(200).json({ data: topRatedDestinations, message: 'top rated' });
      } else {
        const topRatedDestinations = await this.destinationService.findTopRatedDestinations();

        // await new Promise(resolve => setTimeout(resolve, 3000));

        res.status(200).json({ data: topRatedDestinations, message: 'top rated' });
      }
    } catch (error) {
      next(error);
    }
  };

  public getDestinationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const destinationID = Number(req.params.id);
      const findDestinationData = await this.destinationService.findDestinationById(destinationID);

      res.status(200).json({ data: findDestinationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createDestination = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const destinationData: Destination = req.body;
      const createDestinatonData = await this.destinationService.createDestination(destinationData);

      res.status(201).json({ data: createDestinatonData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateDestination = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const destinationID = Number(req.params.id);
      const destinationData: Destination = req.body;
      const findDestinationData: Destination = await this.destinationService.updateDestination(destinationID, destinationData);

      res.status(200).json({ data: findDestinationData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDestination = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const destinationID = Number(req.params.id);
      const deleteDestinationData: Destination = await this.destinationService.deleteDestination(destinationID);

      res.status(200).json({ data: deleteDestinationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
