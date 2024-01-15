import Sequelize from 'sequelize';
import { NODE_ENV } from '@config/index';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';

const sequelize = new Sequelize.Sequelize({
  dialect: 'sqlite',
  storage: './server/db/dashen-tour.db',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

export const DB = {
  Users: UserModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};