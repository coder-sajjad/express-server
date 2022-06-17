const mongoose = require('mongoose');

// Connect MongoDB
const connectMongoDb = async () => {

    

    try{
        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`MongoDB Connection set successfull HOST : ${ connect.connection.host }`.bgCyan .black);
    }catch ( error ){
        console.log(`${error}`.red);
    }
}

// Exports connection
module.exports = connectMongoDb;