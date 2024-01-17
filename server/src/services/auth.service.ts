import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { SECRET_KEY } from '@config/index';
import { DB } from '@database';
import { CreateUserDto, LoginUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { DataStoredInToken, TokenData, UserRes } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { UserModel } from '@/models/users.model';

const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = { id: user.id };
  const expiresIn: number = 5 * 60;

  return { expiresIn, token: sign(dataStoredInToken, SECRET_KEY, { expiresIn }) };
};

const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};

@Service()
export class AuthService {
  public users = DB.Users;
  public async signup(userData: CreateUserDto): Promise<UserRes> {
    const findUser: User = await DB.Users.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `This email ${userData.email} is associated with an account try to login with your email`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: UserModel = await DB.Users.create({ ...userData, password: hashedPassword });

    const { password, ...otherProp } = createUserData.dataValues;
    return otherProp;
  }

  public async login(userData: LoginUserDto): Promise<{ cookie: string; findUser: UserRes }> {
    const findUser: UserModel = await DB.Users.findOne({ where: { email: userData.email } });
    if (!findUser) throw new HttpException(401, 'Incorrect email or password');

    const isPasswordMatching: boolean = await compare(userData.password, findUser.dataValues.password);
    if (!isPasswordMatching) throw new HttpException(401, 'Incorrect email or password');

    const tokenData = createToken(findUser.dataValues);
    const cookie = createCookie(tokenData);

    const { password, ...otherProp } = findUser.dataValues;

    return { cookie, findUser: otherProp };
  }

  public async logout(userData: User): Promise<UserRes> {
    const findUser: UserModel = await DB.Users.findOne({ where: { email: userData.email, password: userData.password } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const { password, ...otherProp } = findUser.dataValues;

    return otherProp;
  }
}
