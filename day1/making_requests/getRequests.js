//using axios

const axios = require('axios');

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(res=>{
    console.log(res.data.bpi.USD.rate);
    console.log(res.data.disclaimer);
}).catch(err=>{
    console.log(err);
})

//using https module

// const { rmSync } = require('fs');
const https = require('https');

https.get('https://api.coindesk.com/v1/bpi/currentprice.json',(res)=>{
    let ans = '';
    res.on('data',(chunk)=>{
        ans+=chunk;
    })
    res.on('end',()=>{
        console.log(JSON.parse(ans).disclaimer);
    })
}).on("error",(err)=>{
    console.log(err);
})

 