const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/from-downtown',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndexes: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection