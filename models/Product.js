
module.exports=(sequelize,DataTypes) =>{

    const Product = sequelize.define('Product', {
     
        name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    })
    return Product
    }
    // sequelize.sync({ force: false });
    