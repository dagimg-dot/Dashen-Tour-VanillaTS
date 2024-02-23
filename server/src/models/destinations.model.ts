import { DataTypes, HasManyAddAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import { Destination } from '@/interfaces/destinations.interface';
import { DB } from '@/database';
import { DestinationImage } from '@/interfaces/destinationImage.interface';

export type DestinationCreationAttributes = Optional<Destination, 'destinationId' | 'name' | 'description' | 'location' | 'rating'>;

export class DestinationModel extends Model<Destination, DestinationCreationAttributes> implements Destination {
  public destinationId: number;
  public name: string;
  public description: string;
  public location: string;
  public rating: number;
  declare addImages: HasManyAddAssociationsMixin<DestinationImage, 'imageId'>;

  public static associate(): void {
    DestinationModel.hasMany(DB.DestinationImages, {
      foreignKey: 'destinationId',
      as: 'images',
    });
  }
}

export default function (sequelize: Sequelize): typeof DestinationModel {
  DestinationModel.init(
    {
      destinationId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: false,
      },
      description: {
        type: DataTypes.TEXT,
        unique: false,
      },
      location: {
        type: DataTypes.STRING(20),
        unique: false,
      },
      rating: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
    },
    {
      tableName: 'destinations',
      sequelize,
    },
  );

  return DestinationModel;
}
