import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password' | 'fullName' | 'phoneNumber' | 'address'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public fullName: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public address: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: false,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      phoneNumber: {
        type: DataTypes.STRING(25),
        allowNull: true,
        unique: false,
      },
      address: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique: false,
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
