const express  = require('express');
const app = express();
const Port = 3000;
const axios = require('axios')

const Tick = require('./model/tick');



app.set("view engine","ejs");
app.set('views',"views");

const connection = require('./model/connection');
axios.get('https://api.wazirx.com/api/v2/tickers')
  .then(response => {
    const data = response.data;
    for (const [name, tick] of Object.entries(data)) {
      Tick.create({
        name,
        last: tick.last,
        buy: tick.buy,
        sell: tick.sell,
        volume: tick.volume,
        base_unit: tick.base_unit
      });
    }
  })
  .catch(error => {
    console.log(error);
  });

  app.get('/ticks', async (req, res) => {
    await Tick.find().then(ticks => {
      res.send(ticks);
    });
});



app.get('/',async(req,res)=>{
    const ticks = await Tick.find()
   res.render('home',{ ticks})
});

app.listen(Port , ()=>{
    console.log('Server started Listening ................')
})