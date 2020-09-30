'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'email' });
      this.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
    }
  }
  User_playlists.init(
    {
      email: DataTypes.STRING,
      playlistId: {
        field: 'playlist_id',
        type: DataTypes.INTEGER,
      },
      isLiked: {
        field: 'is_Liked',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User_playlist',
      paranoid: true,
    }
  );
  return User_playlists;
};
