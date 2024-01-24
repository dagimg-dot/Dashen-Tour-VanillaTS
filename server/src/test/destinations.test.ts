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

  describe('[GET] /destinations/:id', () => {
    it('response fineOne destination', async () => {
      const destinationId = 1;

      const destinationsRoute = new DestinationRoute();
      const destinations = destinationsRoute.destinationsController.destinationService.destinations;

      destinations.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Bahir Dar',
        description: 'this is a description',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([destinationsRoute]);
      return request(app.getServer()).get(`${destinationsRoute.path}/${destinationId}`).expect(200);
    });
  });

  describe('[PUT] /destinations/:id', () => {
    it('response Update destination', async () => {
      const destinationId = 1;
      const destinationData: Destination = {
        name: 'Addis Ababa',
        description: 'hello from desc',
      };

      const destinationsRoute = new DestinationRoute();
      const destinations = destinationsRoute.destinationsController.destinationService.destinations;

      destinations.update = jest.fn().mockReturnValue([1]);
      destinations.findByPk = jest.fn().mockReturnValue({
        id: destinationId,
        name: 'Addis Ababa',
        description: 'hello from desc',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([destinationsRoute]);
      return request(app.getServer()).put(`${destinationsRoute.path}/${destinationId}`).send(destinationData).expect(200);
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

  describe('[DELETE] /destination/:id', () => {
    it('response delete destinations', async () => {
      const destinationId = 1;

      const destinationsRoute = new DestinationRoute();
      const destinations = destinationsRoute.destinationsController.destinationService.destinations;

      destinations.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Bahir Dar',
        description: 'this is a description',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([destinationsRoute]);
      return request(app.getServer()).get(`${destinationsRoute.path}/${destinationId}`).expect(200);
    });
  });
});
