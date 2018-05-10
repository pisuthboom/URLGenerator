const express = require('express')
const app = express()

// const BitlyAPI = require("node-bitlyapi");
// const Bitly = new BitlyAPI({
// 	client_id: "o_2t467f1fb9",
// 	client_secret: "R_8442b58a66af40e390faedb5d6d5376c"
// });
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

function getLinkClick(links) {
  links.forEach(link => {
    bitly.clicks(link).then(response => {
      console.log(response.data)
    })
  })
}

app.get('/', (req, res) => {
  res.send('Back-end for URL Generator');
})

app.get('/:userid', (req, res) => {
  let url = req.params.url;
  console.log(url)
  bitly.clicks(url).then(response => {
    console.log(response.data)
      res.send(response.data)
  })

})

app.post('/', (req, res) => {
  let link = req.body.link;
  bitly.shorten(link)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });
  console.log(link);
  // Bitly.shorten({longUrl:link}, function(err, results) {
  // 	console.log(results);
  // });
  res.send(link);
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
