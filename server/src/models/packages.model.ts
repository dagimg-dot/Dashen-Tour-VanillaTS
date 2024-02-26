import { Package } from '@/interfaces/packages.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type PackageCreationAttributes = Optional<Package, 'packageId' | 'name' | 'hotelStar' | 'isFeatured' | 'numberOfDays' | 'numberOfLocations'>;

export class PackageModel extends Model<Package, PackageCreationAttributes> implements Package {
  public packageId?: number;
  public name: string;
  public numberOfDays: number;
  public hotelStar: number;
  public numberOfLocations: number;
  public isFeatured: boolean;
}

export default function (sequelize: Sequelize): typeof PackageModel {
  PackageModel.init(
    {
      packageId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(30),
      },
      numberOfDays: {
        type: DataTypes.INTEGER,
      },
      hotelStar: {
        type: DataTypes.INTEGER,
      },
      numberOfLocations: {
        type: DataTypes.INTEGER,
      },
      isFeatured: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'packages',
      sequelize,
    },
  );

  return PackageModel;
}
