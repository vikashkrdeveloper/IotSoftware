const mongoose = require('mongoose');
const databaseaddress = process.env.DATABASE_ADDRESS;
mongoose.connect(databaseaddress)
    .then(() => {
        console.log('DataBase Connected');
    })
    .catch((error) => {
        console.log('DataBase Not Connected'+error);
    })

module.exports = mongoose;