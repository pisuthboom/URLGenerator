const express = require('express')
const app = express()

const BitlyClient = require('bitly');
const bitly = BitlyClient('6c243cd24ba6862f72bc8c381f7798255e84fd9d');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Back-end for URL Generator');
})

app.post('/', (req, res) => {
  let link = req.body.link;
  bitly.shorten(link)
  .then(function(result) {
    console.log(link);
    console.log(result);
    res.send(result);
  })
  .catch(function(error) {
    console.error(error);
  });
})

app.post('/numclick', (req, res) => {
    let url = req.body.link;
    console.log(url)
    bitly.clicks(url)
    .then(response => {
      console.log(response)
        res.send(response)
    })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
