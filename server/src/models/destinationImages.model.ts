import { DB } from '@/database';
import { DestinationImage } from '@/interfaces/destinationImage.interface';
import { DestinationCreationAttributes } from '@/models/destinations.model';
import { Optional, Model, Sequelize, DataTypes } from 'sequelize';

export type DestinationImageCreationAttributes = Optional<DestinationImage, 'imageId' | 'url'>;

export class DestinationImageModel extends Model<DestinationImage, DestinationCreationAttributes> implements DestinationImage {
  public imageId: number;
  public url: string;

  public static associate(): void {
    DestinationImageModel.belongsTo(DB.Destinations, {
      foreignKey: 'destinationId',
      as: 'destination',
    });
  }
}

export default function (sequelize: Sequelize): typeof DestinationImageModel {
  DestinationImageModel.init(
    {
      imageId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      url: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: false,
      },
    },
    {
      tableName: 'destinationImages',
      sequelize,
    },
  );

  return DestinationImageModel;
}
