import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import models from '../app/models/index';

class DataBase {
  constructor() {
    this.connection = new Sequelize(dataBaseConfig);
    this.init();
  }

  init() {
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new DataBase();
