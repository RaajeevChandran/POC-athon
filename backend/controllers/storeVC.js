const axios = require('axios');


exports.STOREVC = (req,res) => {
var data = JSON.stringify({
  "data": req.body.signedCredential });

var config = {
  method: 'post',
  url: 'https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/credentials',
  headers: { 
    'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
    'Content-Type': 'application/json', 
    'Authentication': req.body.accessToken, 
    'Authorization': req.body.accessToken
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return res.json(response.data);
})
.catch(function (error) {
  console.log(error);
  return res.send(error)
});
}