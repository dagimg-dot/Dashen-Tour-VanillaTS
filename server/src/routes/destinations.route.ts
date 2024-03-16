import { DestinationController } from '@/controllers/destinations.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

export class DestinationRoute implements Routes {
  public path = '/destinations';
  public router = Router();
  public destinationsController = new DestinationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.destinationsController.getDestinations);
    this.router.get(`${this.path}/toprated`, this.destinationsController.getTopRatedDestinations);
    this.router.get(`${this.path}/:id(\\d+)`, this.destinationsController.getDestinationById);
    this.router.post(`${this.path}`, this.destinationsController.createDestination);
    this.router.put(`${this.path}/:id(\\d+)`, this.destinationsController.updateDestination);
    this.router.delete(`${this.path}/:id(\\d+)`, this.destinationsController.deleteDestination);
  }
}
