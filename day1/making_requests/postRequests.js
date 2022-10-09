const { axios } = require('axios');
const https = require("https");

const obj = {
    time: {
      updated: 'Oct 9, 2022 02:18:00 UTC',
      updatedISO: '2022-10-09T02:18:00+00:00',
      updateduk: 'Oct 9, 2022 at 03:18 BST'
    },
    disclaimer: 'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',
    chartName: 'Bitcoin',
    bpi: {
      USD: {
        code: 'USD',
        symbol: '&#36;',
        rate: '19,381.0343',
        description: 'United States Dollar',
        rate_float: 19381.0343
      },
      GBP: {
        code: 'GBP',
        rate: '16,194.6372',
        rate: '16,194.6372',
        description: 'British Pound Sterling',
        rate_float: 16194.6372
      },
      EUR: {
        code: 'EUR',
        symbol: '&euro;',
        rate: '18,879.9571',
        description: 'Euro',
        rate_float: 18879.9571
      }
    }
  }


  axios
  .post(JSON.stringify(obj), {
    author:"Nishchaya Rawal @RawNish"
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });



