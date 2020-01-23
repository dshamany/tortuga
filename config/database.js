const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true, 
    useFindAndModify: true, 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`MongoDB Connected on ${db.host}:${db.port}`);
});