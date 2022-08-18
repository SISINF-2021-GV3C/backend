// Respuesta de cada petición
// {
//     success: Boolean,
//     message: String,
//     code: Number,
//     data: Object
// }
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


  
class Api{
    constructor(Api) {
    }
    static async getCoins()  {
        let data = await CoinGeckoClient.coins.all();
        console.log(data)
        return data
      };
    // var func = async() => {
    //     let data = await CoinGeckoClient.ping();
    //   };

}


module.exports =  Api; 