import { App } from '@/app';
import { Destination } from '@/interfaces/destinations.interface';
import { DestinationRoute } from '@/routes/destinations.route';
import { Sequelize } from 'sequelize';
import request from 'supertest';

describe('Testing Destinations', () => {
  describe('[GET] /destinations', () => {
    it('response findAll destinations', async () => {
      const destinationsRoute = new DestinationRoute();
      const destinations = destinationsRoute.destinationsController.destinationService.destinations;

      destinations.findAll = jest.fn().mockReturnValue([
        {
          name: 'Semien Mountians',
          description: 'The best place to visit',
        },
        {
          name: 'Semien Mountians',
          description: 'The best place to visit',
        },
        {
          name: 'Semien Mountians',
          description: 'The best place to visit',
        },
        {
          name: 'Semien Mountians',
          description: 'The best place to visit',
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([destinationsRoute]);
      return request(app.getServer()).get(`${destinationsRoute.path}`).expect(200);
    });
  });

  describe('[POST] /destinations', () => {
    it('response Create Destination', async () => {
      const destinationData: Destination = {
        name: 'Semien Mountians',
        description: 'The best place to visit',
      };

      const destinationsRoute = new DestinationRoute();
      const destinations = destinationsRoute.destinationsController.destinationService.destinations;

      destinations.create = jest.fn().mockReturnValue({
        name: 'Semien Mountains',
        description: 'The best place to visit',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([destinationsRoute]);
      return request(app.getServer()).post(`${destinationsRoute.path}`).send(destinationData).expect(201);
    });
  });
});
