const mongoose = require('mongoose');

const mageSchema = new mongoose.Schema(
    {
        nameoftrend1: String,
        nameoftrend2: String,
        nameoftrend3: String,
        nameoftrend4: String,
        nameoftrend5: String,
    }
) 

const ScrapeModel  = mongoose.model('ScrapeData', mageSchema);

module.exports=ScrapeModel