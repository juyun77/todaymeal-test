// Favorites.js
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define(
    "Favorites",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      },
      videoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "video_id",
      },
    },
    {
      unique: true, // 중복 방지
      tableName: "Favorites",
      timestamps: true,
    },
  );
  return Favorites;
};
