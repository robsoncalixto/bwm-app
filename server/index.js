const express   = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const config    = require('./config/dev');
const fakeDb    = require('./fake-db');
const Rental = require('./models/rental');

const rentalRoutes = require('./routes/rentals');

const app = express();
app.use(cors());
mongoose.connect(config.DB_URI,{useNewUrlParser: true})
        .then(() =>{
            const fakedb = new fakeDb();
            fakedb.seedDb();
        });


const PORT = process.env.PORT || 3000;



app.use('/api/v1/rentals',rentalRoutes);



app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});
