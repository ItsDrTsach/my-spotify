'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlists_Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
      this.belongsTo(models.Song, { foreignKey: 'songId' });
    }
  }
  Playlists_Songs.init(
    {
      playlistId: {
        field: 'playlist_id',
        type: DataTypes.INTEGER,
      },
      songId: {
        field: 'song_id',
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'PlaylistsSong',
      paranoid: true,
    }
  );
  return Playlists_Songs;
};
