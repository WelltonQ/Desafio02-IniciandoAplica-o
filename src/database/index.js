import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipients from '../app/models/Recipients';

import DatabaseConfig from '../config/database';

const models = [User, Recipients];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
