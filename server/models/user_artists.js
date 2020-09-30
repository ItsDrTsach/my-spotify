'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'email' });
      this.belongsTo(models.Artist, { foreignKey: 'ArtistId' });
    }
  }
  User_artists.init(
    {
      email: DataTypes.STRING,
      artistId: {
        field: 'artist_id',
        type: DataTypes.INTEGER,
      },
      isLiked: {
        field: 'is_Liked',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User_artist',
      paranoid: true,
    }
  );
  return User_artists;
};
