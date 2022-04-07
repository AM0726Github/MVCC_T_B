const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Model for User 
class User extends Model {
    checkPassword(Log_Pw) {
        return bcrypt.compareSync(Log_Pw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //Not Null
            primaryKey: true, // Will be primary key for User table
            autoIncrement: true //Will went up in value
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, //Not alowed duplication
            validate: {
                isEmail: true //Should be match with ***@***.***
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5] // at least 5 symbols
            }
        }
    },
    {
        hooks: {
            async beforeCreate(Data) {
                Data.password = await bcrypt.hash(Data.password, 10);
                return Data;
            },
            async beforeUpdate(Data) {
                Data.password = await bcrypt.hash(Data.password, 10);
                return Data;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;