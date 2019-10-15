module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      resolved: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      }
    });
  



    Comment.associate = function(models) {
      // We're saying that a Comment should belong to an User
      // A Comment can't be created without an User due to the foreign key constraint
      Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };
  