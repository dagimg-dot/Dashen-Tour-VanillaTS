import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Destination } from '@/interfaces/destinations.interface';

export type DestinationCreationAttributes = Optional<Destination, 'destinationID' | 'name' | 'description'>;

export class DestinationModel extends Model<Destination, DestinationCreationAttributes> implements Destination {
  public destinationID: number;
  public name: string;
  public description: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

export default function (sequelize: Sequelize): typeof DestinationModel {
  DestinationModel.init(
    {
      destinationID: {
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
    },
    {
      tableName: 'destinations',
      sequelize,
    },
  );

  return DestinationModel;
}
