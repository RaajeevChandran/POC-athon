exports.GETVC = (req,res) => {
    var axios = require('axios');


var config = {
  method: 'get',
  url: 'https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/credentials',
  headers: { 
    'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
    'Authorization': req.body.accessToken, 
    '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41': 'true'
  },
  data : req.body.id
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return res.json(response.data)
})
.catch(function (error) {
  console.log(error);
  return res.send(error)
});
}