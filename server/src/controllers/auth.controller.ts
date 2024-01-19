import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateUserDto, LoginUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import { RequestWithUser, UserRes } from '@interfaces/auth.interface';
import { AuthService } from '@services/auth.service';
import { JsonResponse } from '@/utils/JsonResponse';

export class AuthController {
  public authService = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: UserRes = await this.authService.signup(userData);

      res.status(201).json(new JsonResponse('/signup', 'signup successfull', signUpUserData, 201));
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: LoginUserDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json(new JsonResponse('/login', 'login successfull', findUser, 200));
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: UserRes = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json(new JsonResponse('/logout', 'logout successfull', logOutUserData, 200));
    } catch (error) {
      next(error);
    }
  };
}
