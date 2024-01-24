import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[GET] /users', () => {
    it('response findAll users', async () => {
      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          fullName: 'abebe',
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          id: 2,
          fullName: 'abebe',
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          id: 3,
          fullName: 'abebe',
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).get(`${usersRoute.path}`).expect(200);
    });
  });

  describe('[GET] /users/:id', () => {
    it('response findOne user', async () => {
      const userId = 1;

      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.findByPk = jest.fn().mockReturnValue({
        id: 1,
        fullName: 'abebe',
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
    });
  });

  describe('[POST] /users', () => {
    it('response Create user with out password', async () => {
      const userData: CreateUserDto = {
        fullName: 'abebe',
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.findOne = jest.fn().mockReturnValue(null);
      users.create = jest.fn().mockReturnValue({
        dataValues: {
          id: 1,
          fullName: userData.fullName,
          email: userData.email,
          password: await bcrypt.hash(userData.password, 10),
        },
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
    });
  });

  describe('[PUT] /users/:id', () => {
    it('response Update user', async () => {
      const userId = 1;
      const userData: UpdateUserDto = {
        fullName: 'abebe',
        password: '1q2w3e4r!',
        phoneNumber: '0906290648',
        address: 'Bahir Dar',
      };

      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.findByPk = jest.fn().mockReturnValue({
        id: userId,
        password: await bcrypt.hash(userData.password, 10),
      });

      users.update = jest.fn().mockReturnValue([1]);
      users.findByPk = jest.fn().mockReturnValue({
        id: userId,
        fullName: 'abebe',
        phoneNumber: '0906290648',
        address: 'Bahir Dar',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
    });
  });

  describe('[DELETE] /users/:id', () => {
    it('response Delete user', async () => {
      const userId = 1;

      const usersRoute = new UserRoute();
      const users = usersRoute.usersController.userService.users;

      users.findByPk = jest.fn().mockReturnValue({
        id: userId,
        email: 'a@email.com',
        fullName: 'abebe',
        phoneNumber: '0906290648',
        address: 'Bahir Dar',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([usersRoute]);
      return request(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200);
    });
  });
});
