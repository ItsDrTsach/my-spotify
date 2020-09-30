'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PlaylistsSong, { foreignKey: 'playlistId' });
    }
  }
  Playlist.init(
    {
      name: DataTypes.STRING,
      uploadedAt: {
        field: 'uploaded_at',
        type: DataTypes.DATE,
      },
      coverImg: {
        field: 'cover_img',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Playlist',
      paranoid: true,
    }
  );
  return Playlist;
};