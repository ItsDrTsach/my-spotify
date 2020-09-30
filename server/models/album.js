'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Artist, {
        foreignKey: 'artistId',
      });

      this.hasMany(models.Song, {
        foreignKey: 'albumId',
      });
    }
  }
  Album.init(
    {
      artistId: {
        field: 'artist_id',
        type: DataTypes.STRING,
      },
      name: DataTypes.STRING,
      coverImg: {
        field: 'cover_img',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Album',
      paranoid: true,
    }
  );
  return Album;
};