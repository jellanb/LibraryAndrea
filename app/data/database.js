import { Sequelize, DataTypes, Model } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Library', 'sa', 'Andrea2023$', {
    host: 'localhost',
    dialect: 'mssql'
});

async function connectDatabase(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

class Books extends Model {}

Books.init({
    // Model attributes are defined here
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: 'Id'
    },
    Year: {
        type: DataTypes.NUMBER,
        field: 'Year'
    },
    Author:{
        type: DataTypes.STRING,
        field: 'Author'
    },
    Title:{
        type: DataTypes.STRING,
        field: 'Title'
    },
    Url: {
        type: DataTypes.STRING,
        field: 'Url'
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Books', // We need to choose the model name
    createdAt: false,
    updatedAt: false
});

async function getAll() {
    const books = await Books.findAll();
    return JSON.stringify(books);
}

export const methods = {
    connectDatabase,
    getAll
}