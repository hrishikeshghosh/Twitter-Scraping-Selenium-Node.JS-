const axios=require('axios')
const dotenv=require('dotenv')

dotenv.config()

const Get_Proxy=async()=>{
const options = {
  method: 'GET',
  url: 'https://open-proxies.p.rapidapi.com/daily',
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-host': process.env.RAPID_API_HOST
  }
};

try {
	const response = await axios.request(options);
    const proxyList = response.data.split("\n");
    return proxyList
} catch (error) {
	console.error(error);
}
}

module.exports=Get_Proxy

