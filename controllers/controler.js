const ScrapeModel = require('../models/ScrapeModel') 
const get_trendings=require('../utils/webscrape')

async function controller(req,res){
    try {
        let trends= await get_trendings()
        let mongoData = {};
        // for (let i = 0; i < trends.length; i++) {
        //     mongoData[`nameOfTrend${i + 1}`] = trends[i];
        // }   
        
        const mongoSavedData= await ScrapeModel({
            nameoftrend1:trends.trending[0],
            nameoftrend2:trends.trending[1],
            nameoftrend3:trends.trending[2],
            nameoftrend4:trends.trending[3],
            nameoftrend5:trends.trending[4],
        })
        await mongoSavedData.save()  
        return res.status(200).json({data:{...trends, mongoSnap: mongoSavedData}})
    } catch (error) {
       console.log(error)
       return res.status(500).json({msg:"Something went wrong!"}) 
    }

}
module.exports= controller