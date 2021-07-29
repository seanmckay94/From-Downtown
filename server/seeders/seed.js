const db = require('../config/connection');
const { userProfile } = require('../models/index');
const userProfileSeeds = require('./userProfileSeeds.json');

db.once('open', async () => {
    try {
        await userProfile.deletemany({});
        await userProfile.create(userProfileSeeds);

        console.log('all done! Now thats a deep 3 folks');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});