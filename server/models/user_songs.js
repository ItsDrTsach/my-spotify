'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'email' });
      this.belongsTo(models.Song, { foreignKey: 'songId' });
    }
  }
  User_songs.init(
    {
      email: DataTypes.STRING,
      songId: {
        field: 'song_id',
        type: DataTypes.INTEGER,
      },
      isLiked: {
        field: 'is_Liked',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User_song',
      paranoid: true,
    }
  );
  return User_songs;
};
