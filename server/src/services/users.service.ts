import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { UserRes } from '@/interfaces/auth.interface';
import { UserModel } from '@/models/users.model';

@Service()
export class UserService {
  public users = DB.Users;
  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await DB.Users.findAll();
    return allUser;
  }

  public async findUserById(userId: number): Promise<UserRes> {
    const findUser: UserModel = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const { password, ...otherProp } = findUser.dataValues;
    return otherProp;
  }

  public async createUser(userData: CreateUserDto): Promise<UserRes> {
    const findUser: User = await DB.Users.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `This email ${userData.email} is associated with an account try to login with your email`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: UserModel = await DB.Users.create({ ...userData, password: hashedPassword });

    const { password, ...otherProp } = createUserData.dataValues;
    return otherProp;
  }

  public async updateUser(userId: number, userData: UpdateUserDto): Promise<UserRes> {
    const findUser: User = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    await DB.Users.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

    const updateUser: UserModel = await DB.Users.findByPk(userId);
    const { password, ...otherProp } = updateUser.dataValues;
    return otherProp;
  }

  public async deleteUser(userId: number): Promise<User> {
    const findUser: User = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    await DB.Users.destroy({ where: { id: userId } });

    return findUser;
  }
}
